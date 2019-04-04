/*
* PostCSS is a tool for transforming styles with JS plugins.
* These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.
* https://github.com/postcss/postcss
*/

const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        /*
        * Remove unused CSS
        */
        purgecss({
            content: ['./**/*.html']
        }),
        /*
        * Adds vendor prefixes to css attributes
        * https://github.com/postcss/autoprefixer
        */
       autoprefixer({
            /* It should add vendor prefixes for the last 2 versions of all browsers, meaning old prefixes such as
            * -webkit-border-radius: 5px; that the latest browsers support as border-radius won't be added.
            * https://github.com/ai/browserslist#queries
            */
            browsers: 'last 2 versions'
        }),
    ]
};
