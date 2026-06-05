import type { ContactFormData } from '@/lib/validations/contact';

const ADMIN_EMAILS = [
  'benitezl@go.ugr.es',
  'informa@blablaele.com',
];

export async function sendContactEmail(data: ContactFormData) {
  const { Resend } = await import('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, email, subject, message } = data;

  await resend.emails.send({
    from: process.env.EMAIL_FROM || 'MakiLibre <noreply@makilibre.com>',
    to: ADMIN_EMAILS,
    replyTo: email,
    subject: `[MakiLibre Contacto] ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #d97706, #f59e0b); padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Nuevo mensaje de contacto</h1>
        </div>
        <div style="padding: 24px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Nombre:</td>
              <td style="padding: 8px 0; color: #6b7280;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0; color: #6b7280;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Asunto:</td>
              <td style="padding: 8px 0; color: #6b7280;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="font-weight: bold; color: #374151; margin-top: 0;">Mensaje:</p>
            <p style="color: #4b5563; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      </div>
    `,
  });
}
