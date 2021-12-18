import sveltePreprocess from 'svelte-preprocess'

export default {
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        sourceMap: !production,
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')()],
        },
      }),
    }),
  ],
}