/* eslint-disable */
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // Add your custom env vars here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}