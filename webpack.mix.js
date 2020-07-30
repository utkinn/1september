const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/checker.js', 'public/js')
    .js('resources/js/compose.js', 'public/js')
    .sass('resources/sass/quiz.sass', 'public/css')
    .sass('resources/sass/compose.sass', 'public/css')
    ;
