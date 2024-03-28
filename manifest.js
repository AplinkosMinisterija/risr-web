export const manifestForPlugIn = {
  registerType: 'prompt',
  includeAssests: ['favicon.ico', 'apple-touc-icon.png', 'masked-icon.svg'],
  manifest: {
    short_name: 'RISR',
    name: '',
    icons: [
      {
        src: 'logo.png',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/png',
      },
      {
        src: 'logo.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: 'logo.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    start_url: '.',
    display: 'standalone',
    theme_color: '#000000',
    background_color: '#000000',
    orientation: 'portrait',
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: /\.(png|jpg|jpeg|svg|gif)$/,
        handler: 'CacheFirst',
      },
    ],
  },
};
