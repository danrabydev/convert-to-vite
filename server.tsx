import { createServer } from 'vite';
import express from 'express';

async function startServer() {
  const app = express();

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.get('*', async (req: express.Request, res: express.Response) => {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const { html } = await render({ path: req.originalUrl });
    const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vite SSR App</title>
  </head>
  <body>
    <div id="app">${html}</div>
    <script type="module" src="/src/entry-client.tsx"></script>
  </body>
</html>
    `;
    res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
  });

  app.listen(5173, () => console.log('Server running at http://localhost:5173'));
}

startServer();