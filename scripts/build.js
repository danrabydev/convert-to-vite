require('dotenv').config();
require('vite').build({
  configFile: require('path').resolve(__dirname, '../vite.config.js'),
  build: { ssr: true }
});