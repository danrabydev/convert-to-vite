import { render } from "./src/entry-server.tsx";
import { writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";

const routes = ["/"]; // Define your routes
const distDir = resolve("dist/client");

mkdirSync(distDir, { recursive: true });

routes.forEach(async (route) => {
  const { html } = await render({ path: route });
  const template = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8' /><title>Vite SSR App</title></head><body><!--ssr-outlet--><script type='module' src='/src/entry-client.tsx'></script></body></html>";
  const output = template.replace("<!--ssr-outlet-->", html);
  writeFileSync(resolve(distDir, `${route === "/" ? "index" : route}.html`), output);
});
