# Pras Bali Web

Static landing page for Gede Prasetya (Pras), a Bali-based web development and digital solutions service.

## Files

- `index.html` - page structure and content
- `styles.css` - responsive visual design
- `script.js` - language detection, GSAP animation hooks, mobile navigation, project planner, and contact mailto flow
- `assets/hero-workspace.png` - generated project hero image

## Features

- Auto language selection from the visitor's browser/device language, with location timezone as a fallback hint.
- Manual language selector with support for Indonesian, English, Spanish, French, German, Japanese, and Chinese.
- GSAP-powered animation through CDN, with a safe no-animation fallback if the CDN is unavailable.
- Static deployment, so no build step is required.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the GitHub repository in Vercel.
3. Keep the framework preset as `Other`.
4. Leave the build command empty.
5. Use `/` as the output directory.

Before publishing publicly, update `businessEmail` in `script.js` with your real email address.

Current contact details:

- WhatsApp: `https://wa.me/6281353443517`
- Email: `prasetyamaha99@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/gedeprasetya/`
