import { config } from 'dotenv';
import { createServer } from 'vite';
import express from 'express';
import { render } from '../src/entry-server.tsx';

// Load .env variables
config();

const app = express();

// Create Vite server in middleware mode
const vite = await createServer({
  configFile: new URL('../vite.config.js', import.meta.url).pathname,
  server: { middlewareMode: true }
});

// Use Vite's middleware for asset handling
app.use(vite.middlewares);

// SSR route
app.get('*', async (req, res) => {
  try {
    const { html } = await render();
    const transformedHtml = await vite.transformIndexHtml(req.url, `
      <!DOCTYPE html>
      <html>
        <head><title>${process.env.APP_NAME}</title></head>
        <body><div id="root">${html}</div></body>
      </html>
    `);
    res.send(transformedHtml);
  } catch (error) {
    vite.ssrFixStacktrace(error);
    res.status(500).end(error.stack);
  }
});

// Start Express server
app.listen(5173, () => {
  console.log('Server running at http://localhost:5173');
});