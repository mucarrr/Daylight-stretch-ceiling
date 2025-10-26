'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !phone || !message) {
      return {
        success: false,
        error: 'Tüm alanları doldurunuz.'
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: 'Geçerli bir email adresi giriniz.'
      };
    }

    // Phone validation (basic Turkish phone number)
    const phoneRegex = /^(\+90|0)?[5][0-9]{9}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return {
        success: false,
        error: 'Geçerli bir telefon numarası giriniz.'
      };
    }

    const { data, error } = await resend.emails.send({
      from: 'Daylight Gergi Tavan <noreply@daylightgergitavan.com>',
      to: ['daylightgergitavan@gmail.com'],
      subject: `Yeni İletişim Formu - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #1f2937; padding-bottom: 10px;">
            Yeni İletişim Formu Mesajı
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">İletişim Bilgileri</h3>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Mesaj</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 14px; color: #6b7280;">
            <p><strong>Gönderim Tarihi:</strong> ${new Date().toLocaleString('tr-TR')}</p>
            <p><strong>IP Adresi:</strong> ${formData.get('ip') || 'Bilinmiyor'}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        error: 'Email gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.'
      };
    }

    return {
      success: true,
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
    };

  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      error: 'Bir hata oluştu. Lütfen tekrar deneyiniz.'
    };
  }
}
