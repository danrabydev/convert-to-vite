import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { App } from "./App";

export function render({ path }: { path: string }) {
  const html = renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  );
  return { html };
}

// SSR Warning: If using MUI, add Emotion cache for styles.
// SSR Warning: DevExpress may need client-side hydration checks.
// SSR Warning: Reactstrap's Bootstrap JS features won't work in SSR.
