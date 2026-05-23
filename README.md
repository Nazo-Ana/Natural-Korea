# Natural Korea React Website

This is the cleaner React version of the original one-file HTML website.

## Current status

The React/Vite version is the current website. Edit the files in `src/`, run the app with `npm run dev`, and build the deployable site with `npm run build`.

The old HTML file and unused raw source photos have been kept as local backups in `archive/`.

The old file is here:

```text
archive/Natural korea website.html
```

The new React website starts here:

```text
src/App.jsx
src/data/siteContent.js
src/styles.css
```

## 1. Install Node.js

React needs Node.js and npm. Install the LTS version from:

```text
https://nodejs.org/
```

After installing, close and reopen VS Code, then check:

```bash
node --version
npm --version
```

## 2. Install the project packages

From this folder:

```bash
npm install
```

## 3. Start the website locally

```bash
npm run dev
```

Then open the local URL that Vite prints, usually:

```text
http://127.0.0.1:5174/
```

In VS Code, you can also use the launch configuration named:

```text
Open Natural Korea React app
```

## 4. Edit the website content

Most content is in:

```text
src/data/siteContent.js
```

Edit this file when you want to change:

- Product names
- Product descriptions
- Contact email
- Instagram link
- Address
- Testimonials
- Footer links

## 5. Replace product pictures

Put new pictures here:

```text
src/assets/products/
```

Then import them in:

```text
src/data/siteContent.js
```

Example:

```js
import newProductImage from '../assets/products/my-new-product.png';
```

Then use `newProductImage` in the product object you want to update.

## 6. Build for hosting

When the website is ready:

```bash
npm run build
```

This creates a `dist` folder. Upload the contents of `dist` to your hosting provider.

Do not edit files inside `dist` directly. They are generated from the `src` files.

## 7. Deploy

For Netlify:

```text
Build command: npm run build
Publish directory: dist
```

This project includes `netlify.toml`, so Netlify can detect those settings automatically.

For any static hosting provider, upload the contents of `dist/`.

## Important note about the contact form

The contact form is launch-safe without a backend. If no Formspree endpoint is configured, it opens a pre-filled email to the company email address.

To use Formspree later, copy `.env.example` to `.env` and set:

```text
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

The contact code is in:

```text
src/components/Contact.jsx
```
