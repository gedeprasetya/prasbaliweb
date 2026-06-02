const toEmail = process.env.CONTACT_TO_EMAIL || "prasetyamaha99@gmail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "Pras Bali Web <onboarding@resend.dev>";

function sanitize(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return sanitize(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseBody(request) {
  if (typeof request.body === "string") {
    return JSON.parse(request.body || "{}");
  }

  return request.body || {};
}

export default async function handler(request, response) {
  response.setHeader("Content-Type", "application/json");

  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    response.status(503).json({
      error: "Email service is not configured. Add RESEND_API_KEY in Vercel."
    });
    return;
  }

  let payload;

  try {
    payload = parseBody(request);
  } catch {
    response.status(400).json({ error: "Invalid request body" });
    return;
  }

  const name = sanitize(payload.name);
  const email = sanitize(payload.email);
  const service = sanitize(payload.service);
  const message = sanitize(payload.message);
  const locale = sanitize(payload.locale || "en");

  if (!name || !email || !message) {
    response.status(400).json({ error: "Missing required fields" });
    return;
  }

  const subject = `Project inquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Project type: ${service || "Not specified"}`,
    `Locale: ${locale}`,
    "",
    "Project details:",
    message
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#122025">
      <h2 style="margin:0 0 16px">New project inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Project type:</strong> ${escapeHtml(service || "Not specified")}</p>
      <p><strong>Locale:</strong> ${escapeHtml(locale)}</p>
      <hr style="border:none;border-top:1px solid #dce5df;margin:20px 0" />
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      text,
      html
    })
  });

  const result = await resendResponse.json().catch(() => ({}));

  if (!resendResponse.ok) {
    response.status(resendResponse.status).json({
      error: result.message || "Unable to send email"
    });
    return;
  }

  response.status(200).json({ ok: true });
}
