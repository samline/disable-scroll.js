let mix = require('laravel-mix');

mix
.setResourceRoot('../')
.setPublicPath('dist')
.sourceMaps()

if(mix.inProduction()) {
  mix.js(
    'src/disable-scroll.js',
    'js/disable-scroll.min.js'
  )
} else {
  mix.js(
    'src/disable-scroll.js',
    'js/disable-scroll.js'
  )
}
