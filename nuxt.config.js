export default defineNuxtConfig({
  // SPA mode
  ssr: false,

  server: {
    port: 3001,  // 任意のポート番号に変更
  },

  layout: 'default',

  // Enable devtools for debugging
  devtools: true,

  build: {
    rollupOptions: {
      input: {
        main: './plugins/main.js',  // 自分のエントリーポイントを指定
      }
    }
  },

  router: {
    base: '/',
    mode: 'history',
  },

  generate: {
    fallback: 'index.html', // SPA用の設定
  },

  compatibilityDate: '2025-03-13',
});