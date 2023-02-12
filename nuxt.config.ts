// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css' }
      ],
      meta: [
        { name: 'description', content: "Doctoral student working on Lie theory, differential geometry and topology in category theory and mathematical physics." },
        { name: 'keywords', content: 'Lie categories, Lie groupoids, Lie algebroids, differential geometry, differential topology, mathematical physics' },
        { name: 'author', content: 'Žan Grad' },
        { name: "google-site-verification", content: "5XJiG03RmRFYp12aMDeXTie640ueCk-guBIZq7Dy29A" },
        { name: "robots", content: "index. follow" },
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
