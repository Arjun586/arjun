import { Resend } from 'resend';

const RECIPIENT_EMAIL = 'arjunofficial586@gmail.com';

interface ContactPayload {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
  referenceCode?: string;
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Vercel Serverless Function Handler (`/api/contact`)
 * Automatically deployed by Vercel as a serverless endpoint without needing a dedicated server.
 */
export default async function handler(req: any, res: any) {
  // Handle CORS preflight if needed
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      error: 'Method not allowed. Use POST.',
    });
  }

  try {
    const body: ContactPayload =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const message = (body.message || '').trim();
    const referenceCode = (body.referenceCode || `INQ-${Date.now().toString().slice(-4)}`).trim();

    if (name.length < 2) {
      return res.status(400).json({
        ok: false,
        error: 'Please enter a valid name (at least 2 characters).',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        ok: false,
        error: 'Please provide a valid email address.',
      });
    }

    if (message.length < 10 || message.length > 1000) {
      return res.status(400).json({
        ok: false,
        error: 'Message must be between 10 and 1,000 characters.',
      });
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const fromEmail =
      process.env.RESEND_FROM_EMAIL?.trim() ||
      'Portfolio Contact <onboarding@resend.dev>';

    // If RESEND_API_KEY is not configured yet in environment
    if (!apiKey || apiKey === 'YOUR_RESEND_API_KEY' || apiKey === 're_xxxxxxxxx') {
      if (process.env.VERCEL === '1') {
        return res.status(500).json({
          ok: false,
          error:
            'Server configuration error: RESEND_API_KEY is missing in Vercel Environment Variables.',
        });
      }

      // In local / preview mode without an API key, return a graceful preview response
      return res.status(200).json({
        ok: true,
        mode: 'preview',
        recipient: RECIPIENT_EMAIL,
        referenceCode,
        message:
          'Preview mode: Set RESEND_API_KEY in your Vercel project settings (or .env) to enable live Resend email delivery to arjunofficial586@gmail.com.',
      });
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeRef = escapeHtml(referenceCode);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: `[Portfolio Inquiry ${referenceCode}] New message from ${name}`,
      text: [
        `New Portfolio Contact Inquiry (${referenceCode})`,
        `----------------------------------------`,
        `From: ${name}`,
        `Email: ${email}`,
        `Recipient: ${RECIPIENT_EMAIL}`,
        ``,
        `Message:`,
        message,
      ].join('\n'),
      html: `
        <div style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #161514; color: #EDEDEC; border: 1px solid #2A2826;">
          <div style="font-size: 12px; color: #9A948D; margin-bottom: 16px; border-bottom: 1px solid #2A2826; padding-bottom: 12px;">
            PORTFOLIO INQUIRY · ${safeRef}
          </div>
          <h2 style="font-family: Georgia, serif; font-size: 22px; color: #EDEDEC; margin: 0 0 16px 0;">
            New Message from ${safeName}
          </h2>
          <table style="width: 100%; font-size: 13px; margin-bottom: 20px; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; color: #9A948D; width: 100px;">Sender:</td>
              <td style="padding: 6px 0; color: #EDEDEC; font-weight: 600;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #9A948D;">Reply-To:</td>
              <td style="padding: 6px 0;"><a href="mailto:${safeEmail}" style="color: #34D399; text-decoration: underline;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #9A948D;">Reference:</td>
              <td style="padding: 6px 0; color: #EDEDEC;">${safeRef}</td>
            </tr>
          </table>
          <div style="padding: 16px; background-color: #1E1C1A; border: 1px solid #2A2826; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; line-height: 1.6; color: #D1CBC5;">
            ${safeMessage}
          </div>
          <div style="margin-top: 20px; font-size: 11px; color: #9A948D;">
            Sent via Resend from Arjun's Portfolio Contact Form to ${RECIPIENT_EMAIL}. Reply directly to this email to respond to ${safeName}.
          </div>
        </div>
      `,
    });

    if (error) {
      return res.status(400).json({
        ok: false,
        error: error.message || 'Failed to send email via Resend.',
      });
    }

    return res.status(200).json({
      ok: true,
      mode: 'live',
      id: data?.id,
      recipient: RECIPIENT_EMAIL,
      referenceCode,
    });
  } catch (err: any) {
    console.error('Resend contact API error:', err);
    return res.status(500).json({
      ok: false,
      error: err?.message || 'Unexpected error while sending message.',
    });
  }
}
