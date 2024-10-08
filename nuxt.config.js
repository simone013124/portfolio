import fs from 'fs';
import path from 'path';

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap'},
        {rel: 'stylesheet',href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'},

],
      bodyAttrs: {
        class: 'font-sans'
      }
    }
  },
  css: ['@/assets/css/main.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'Am3ZPHJ4FK2izSeeE4p1qAtt',
        apiOptions: {
          region: '' // Set 'US" if your space is created in US region (EU default)
        }
      }
    ],
    '@nuxtjs/tailwindcss'
  ]


})