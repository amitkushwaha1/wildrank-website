/**
 * Shared helper that submits a form to FormSubmit's AJAX endpoint.
 *
 * It POSTs in the background (fetch) so the visitor never leaves the page
 * and never sees FormSubmit's own thank-you page.
 *
 * Delivery: each enquiry is sent as TWO independent requests — one to each
 * recipient address — and BOTH must succeed before we report success. That
 * way "reached both inboxes" is verified per-address, instead of trusting a
 * single CC line that we cannot observe.
 */

export const FORM_RECIPIENTS = [
  "wildranktechnologies@gmail.com",
  "amitkushwaha6397@gmail.com",
] as const;

export interface SubmitResult {
  ok: boolean;
  message: string;
}

interface FormSubmitResponse {
  success?: unknown;
  message?: unknown;
}

async function postOne(
  endpoint: string,
  body: URLSearchParams
): Promise<{ ok: boolean; detail: string }> {
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
      cache: "no-store",
    });

    let payload: FormSubmitResponse | null = null;
    try {
      payload = (await res.json()) as FormSubmitResponse;
    } catch {
      payload = null;
    }

    const successFlag =
      payload?.success === true || payload?.success === "true";
    const message =
      typeof payload?.message === "string" && payload.message.trim()
        ? payload.message
        : `HTTP ${res.status}`;

    return { ok: res.ok && successFlag, detail: message };
  } catch {
    return { ok: false, detail: "network error" };
  }
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

  const base = new URLSearchParams({
    ...data,
    _subject: subject,
    _template: "table",
    _captcha: "false",
  });

  // Reply-To the visitor so hitting "Reply" in the inbox answers them directly.
  if (data.Email) base.set("_replyto", data.Email);

  // Fire one request per recipient, in parallel.
  const results = await Promise.all(
    FORM_RECIPIENTS.map((addr) => {
      const body = new URLSearchParams(base.toString());
      return postOne(addr, body).then((r) => ({ addr, ...r }));
    })
  );

  const failed = results.filter((r) => !r.ok);

  if (failed.length === 0) {
    return {
      ok: true,
      message: "Thanks! We've received your request and will reply within 24 hours.",
    };
  }

  if (failed.length === results.length) {
    // Every recipient rejected — surface FormSubmit's own reason (e.g. the
    // one-time activation notice) so it is visible instead of silent.
    return { ok: false, message: failed[0].detail };
  }

  // Partial: at least one inbox got it, but not all.
  return {
    ok: false,
    message:
      "Your enquiry was only partially delivered. Please email us directly at info@wildranktechnologies.com.",
  };
}
