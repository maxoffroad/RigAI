# RigAI Landing Page

Minimal responsive landing page for RigAI, an AI assistant for offroad and overland vehicle setup recommendations.

This site uses plain HTML, CSS and JavaScript with no runtime dependencies.

## Local Development

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Production Build

```bash
npm run build
```

The production files will be generated in `dist`.

## Deploy to Cloudflare Pages

1. Push this project to a Git repository.
2. Open Cloudflare Dashboard and go to **Workers & Pages**.
3. Choose **Create application**.
4. Select **Pages** and connect your Git repository.
5. Use these build settings:
   - Build command: `npm run build`
   - Output folder: `dist`
6. Deploy.

The `_redirects` file keeps clean URLs working on Cloudflare Pages, so `/privacy`,
`/affiliate-disclosure` and `/contact` resolve to their matching HTML pages.

## Pages

- `/`
- `/privacy`
- `/affiliate-disclosure`
- `/contact`
