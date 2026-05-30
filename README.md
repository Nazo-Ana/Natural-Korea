# Natural Korea Website

Production React + Vite + TypeScript website for `www.naturalkorea.company`.

## Stack

- React 18
- Vite
- TypeScript
- Vercel serverless functions
- Resend email delivery

## Project Structure

```text
src/
|-- api/
|   `-- contact/
|-- assets/
|   |-- icons/
|   |-- images/
|   |   `-- products/
|   `-- logos/
|-- components/
|   |-- cards/
|   |-- forms/
|   |-- layout/
|   |-- sections/
|   |-- shared/
|   `-- ui/
|-- constants/
|-- data/
|-- hooks/
|-- layouts/
|-- pages/
|-- routes/
|-- services/
|-- store/
|-- styles/
|-- types/
|-- utils/
|-- App.tsx
`-- main.tsx

api/
`-- contact.ts
```

## Local Development

```bash
npm install
npm run dev
```

The local Vite app runs at:

```text
http://127.0.0.1:5174/
```

## Quality Checks

```bash
npm run typecheck
npm run build
```

`npm run build` runs TypeScript first, then creates the production bundle in `dist/`.

## Editing Content

Most site copy, navigation, product data, testimonials, footer links, and brand contact details live in:

```text
src/data/siteContent.ts
```

Contact form constants live in:

```text
src/constants/contact.ts
```

## Replacing Assets

Product images:

```text
src/assets/images/products/
```

Brand logos:

```text
src/assets/logos/
```

Import new files in `src/data/siteContent.ts` and use the imported asset in the related content object.

## Contact Form

The public form posts to:

```text
/api/contact
```

The serverless function validates the payload, checks a honeypot field, applies a basic per-IP rate limit, and sends the email through Resend to:

```text
sales@naturalkorea.company
```

Required environment variables:

```text
RESEND_API_KEY=
CONTACT_FROM_EMAIL=Natural Korea <sales@naturalkorea.company>
CONTACT_TO_EMAIL=sales@naturalkorea.company
```

`CONTACT_FROM_EMAIL` must use a domain verified in Resend. Configure these variables in Vercel Project Settings under Environment Variables.

For local end-to-end testing of the serverless function, run the project through Vercel CLI:

```bash
npx vercel dev
```

## Deployment

Vercel settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm ci
```

The `/api/contact.ts` file is deployed by Vercel as a serverless function. Do not expose `RESEND_API_KEY` through any `VITE_` environment variable.
