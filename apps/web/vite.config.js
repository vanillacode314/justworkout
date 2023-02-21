import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite';
import { presetUno, presetIcons, presetWebFonts, extractorSvelte } from 'unocss';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    Unocss({
      mode: 'svelte-scoped',
      extractors: [extractorSvelte],
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle'
          }
        }),
        presetWebFonts({
          fonts: {
            sans: 'Roboto:400,500,600,700',
            barlow: 'Barlow:400,500,600,700'
          }
        })
      ]
    }),
    sveltekit()
  ]
};

export default config;
