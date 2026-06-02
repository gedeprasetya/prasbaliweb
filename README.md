# Pras Bali Web

Static landing page for Pras, a Bali-based web development and digital solutions service.

## Files

- `index.html` - page structure and content
- `styles.css` - responsive visual design
- `script.js` - language detection, desktop window interactions, taskbar clock, WhatsApp and email form flow
- `assets/hero-workspace.png` - generated project hero image
- `assets/xp-wallpaper.png` - original XP-inspired nostalgia wallpaper
- `assets/pras-desktop-wallpaper.png` - final desktop wallpaper with PRAS hill typography

## Features

- Auto language selection from the visitor's browser/device language, with location timezone as a fallback hint.
- Multilingual locale copy for Indonesian, English, Spanish, French, German, Japanese, and Chinese, selected automatically from the visitor's browser/device language.
- GSAP-powered animation through CDN, with a safe no-animation fallback if the CDN is unavailable.
- Windows XP-inspired nostalgic desktop concept with shortcut icons, start bar, system tray, and popup windows.
- Contact form can open WhatsApp directly with a prefilled project brief.
- Email form submission is ready for Vercel Serverless Functions using Resend.
- Static deployment, so no build step is required.

## Email Form Setup

The WhatsApp form works without setup. To make the Email button send directly to your inbox, add these environment variables in Vercel:

- `RESEND_API_KEY` - your Resend API key
- `CONTACT_TO_EMAIL` - `prasetyamaha99@gmail.com`
- `CONTACT_FROM_EMAIL` - verified sender, for example `Pras Bali Web <hello@yourdomain.com>`

If `RESEND_API_KEY` is not configured yet, the Email button falls back to opening the visitor's email app.

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
