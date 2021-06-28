let mix = require('laravel-mix');

mix.postCss("src/style2.css", "public/css", [
 require("tailwindcss"),
]);

mix.browserSync('localhost:5500');