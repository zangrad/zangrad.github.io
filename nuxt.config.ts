// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css' }
      ]
      // script: [{ src: 'https://polyfill.io/v3/polyfill.min.js?features=es6' }],
      // script: [{ id: 'MathJax-script', async: true,  src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' }],
    },
  },
  build: {
    publicPath: 'https://zangrad.github.io/',
  },
  content: {
    markdown: {
      anchorLinks: false,
      remarkPlugins: [
        'remark-math'
      ],
      rehypePlugins: [
        'rehype-katex'
      ]
    }
  },
  plugins: [
    '@/plugins/vimg.ts'
  ],
})
