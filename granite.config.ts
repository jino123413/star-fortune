import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'star-fortune',
  web: {
    host: '0.0.0.0',
    port: 3011,
    commands: {
      dev: 'rsbuild dev --host',
      build: 'rsbuild build',
    },
  },
  permissions: [],
  outdir: 'dist',
  brand: {
    displayName: '별이 뭐래',
    icon: 'https://raw.githubusercontent.com/jino123413/app-logos/master/star-fortune.png',
    primaryColor: '#1A237E',
    bridgeColorMode: 'inverted',
  },
  webViewProps: {
    type: 'partner',
  },
});
