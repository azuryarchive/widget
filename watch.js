import esbuild from 'esbuild'
import cssModules from 'esbuild-css-modules-plugin'

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outfile: 'dist/index.js',
  watch: true,
  plugins: [
    cssModules()
  ]
})