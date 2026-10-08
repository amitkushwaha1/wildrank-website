/**
 * Shared helper that submits a form to FormSubmit's AJAX endpoint.
 *
 * It POSTs in the background (fetch) so the visitor never leaves the page
 * and never sees FormSubmit's own thank-you page.
 *
 * Delivery: primary recipient lives in FORM_ENDPOINT, second recipient is
 * added as a CC via FORM_CC, so every enquiry reaches both inboxes.
 */

export const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/wildranktechnologies@gmail.com";

export const FORM_CC = "amitkushwaha6397@gmail.com";

export interface SubmitResult {
  ok: boolean;
  message: string;
}

export async function submitForm(
  data: Record<string, string>,
  subject: string
): Promise<SubmitResult> {
  // Honeypot: bots fill the hidden field. Pretend success and bail out
  // without ever hitting the network.
  if (data._honey) {
    return { ok: true, message: "Thanks! We'll be in touch shortly." };
  }

  const body = new URLSearchParams({
    ...data,
    _subject: subject,
    _template: "table",
    _captcha: "false",
    _cc: FORM_CC,
  });

  // Reply-To the visitor so hitting "Reply" in the inbox answers them directly.
  if (data.Email) body.set("_replyto", data.Email);

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
      // Prevents the browser from sitting on a cached/pending response.
      cache: "no-store",
    });

    let payload: unknown = null;
    try {
      payload = await res.json();
    } catch {
      payload = null;
    }

    const j = (payload ?? {}) as Record<string, unknown>;
    const successFlag = j.success === true || j.success === "true";

    if (res.ok && successFlag) {
      return {
        ok: true,
        message:
          typeof j.message === "string" && j.message.trim()
            ? j.message
            : "Thanks! We've received your request and will reply within 24 hours.",
      };
    }

    return {
      ok: false,
      message:
        typeof j.message === "string" && j.message.trim()
          ? j.message
          : "Sorry, something went wrong. Please email us directly at info@wildranktechnologies.com.",
    };
  } catch {
    return {
      ok: false,
      message:
        "Network error — please check your connection and try again, or email us at info@wildranktechnologies.com.",
    };
  }
}
