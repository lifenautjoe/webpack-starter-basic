<img alt="Webpack Starter Basic Loo" src="https://github.com/lifenautjoe/webpack-starter-basic/blob/master/src/assets/logo-on-dark-bg.png?raw=true" width="250">

# webpack-starter-basic
[![forthebadge](http://forthebadge.com/images/badges/fo-real.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

[![dependencies](https://david-dm.org/lifenautjoe/webpack-starter-basic.svg)](https://david-dm.org/lifenautjoe/webpack-starter-basic)

A simple **webpack 4 starter project** for your basic web development needs.

Read more on the [demo website](https://lifenautjoe.github.io/webpack-starter-basic/) or continue reading below.

## Table of Contents

- [Motivation](#motivation)
- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage)
- [FAQ](#faq)
  * [When should I use this starter?](#when-should-i-use-this-starter)
  * [Where's the common webpack config?](#wheres-the-common-webpack-config)
  * [How to load fonts](#how-to-load-fonts)
  * [How to load images](#how-to-load-images)
    + [In JavaScript](#in-javascript)
    + [In `index.html`](#in-indexhtml)
- [Websites using this starter kit on the wild](#websites-using-this-starter-kit-on-the-wild)

## Motivation

I needed to make a plain ol' "drop your mail to stay updated of ongoing developments" page.

I did not need anything fancy, no frontend framework, no unit testing, simply a **starter project that would let me use sass, ES6, load assets, add vendor prefixes, start a dev server, generate sourcemaps and optimize everything for production.**

I looked around and all I found were heavily specialized and complicated webpack starter projects (`webpack-angular-starter`, `webpack-react-starter`, etc) that are so intertwined with plugins that stripping undesired functionality is almost impossible. 

So I did this.

## Features

* Separated development and production webpack settings you can understand
* Sass
* ES6
* Asset loading
* CSS Vendor prefixing
* Development server
* Sourcemaps
* Favicons generation
* Production optimizations
* Mobile browser header color

## Requirements

* [Node](https://nodejs.org) > 7.6

## Usage

Substitute `PROJECT-NAME` for your project name.

Clone the repository

```sh
 git clone https://github.com/lifenautjoe/webpack-starter-basic PROJECT-NAME
 cd PROJECT-NAME
```

Install npm dependencies

```sh
 npm install 
```

Run the kickstart command
```sh
npm run kickstart
```

**After the project has been kickstarted**

To start the development server

```sh
npm start
```

To build for production

```sh
npm run build
```

To preview the production build
```sh
npm run preview
```

## FAQ

### When should I use this starter?

You should use this starter if any of the following are true:

* You want to make a static page. e.g. splash screen, onboarding screen, phaser game, threejs visualization, countdown.
* You found no good starter kit for whatever you want to do and need a solid place to start from.

**Please note**: If you are going to use a frontend framework like angular or react, you can of course add the required plugins and 
configuration but it's normally complicated and quirky enough that it's highly recommended to use one of the existing 
starter projects such as [react-webpack-babel](https://github.com/alicoding/react-webpack-babel) or for angular projects the [angular-cli](https://github.com/angular/angular-cli).

### Where's the common webpack config?

**There is none and that is good thing.**

The pattern creates unnecessary confusion over the setup, at the end the config will always be different across environments.
People just put booleans everywhere on the common config to switch between these differing configuration options which is just awful to see and confusing for someone who's just starting on webpack.

The only truly shared config between these files are the entry js point and the main html template.

### How to load fonts

If you don't support Opera Mini, browsers support the .woff format. Its newer version .woff2, is widely supported by modern browsers and can be a good alternative.

If you decide to use only this format you can load the fonts in a similar manner to images.

In your `webpack.dev.js` and `webpack.prod.js` add the following

```js
module.exports = {
    // ..
    module: {
        rules: [
            // ..
            {
                test: /\.woff$/,
                loader: 'url-loader',
                options: {
                    // Limit at 50k. Above that it emits separate files
                    limit: 50000,
                    // url-loader sets mimetype if it's passed.
                    // Without this it derives it from the file extension
                    mimetype: 'application/font-woff',
                    // Output below fonts directory
                    name: './fonts/[name].[ext]',
                },
            }
            // ..
        ]
    }
    // ..
};
```

And let's say your font is in the folder `assets` with the name `pixel.woff`

You can add it and use it in `index.scss` as
```scss
@font-face {
    font-family: "Pixel";
    src: url('./../assets/pixel.woff') format('woff');
}

.body{
    font-family: 'Pixel', sans-serif;
}
```

If you would like to support all kinds of font types, remove the woff rule we previously added to `webpack.dev.js` and `webpack.prod.js` and add the following

```js
module.exports = {
    // ..
    module: {
        rules: [
            // ..
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                },
            }
            // ..
        ]
    }
    // ..
};
```

And assuming you have your fonts in the directory `assets` with names `pixel.woff`, `pixel.ttf`, `pixel.eot` , etc.

You can add it and use it in `index.scss` as
```scss
@font-face {
    font-family: 'Pixel';
    src: url('./../assets/pixel.woff2') format('woff2'),
    url('./../assets/pixel.woff') format('woff'),
    url('./../assets/pixel.eot') format('embedded-opentype'),
    url('./../assets/pixel.ttf') format('truetype');
    /* Add other formats as you see fit */
}
```

### How to load images

#### In JavaScript

You can require an image from JavaScript like
```js
const myImage = require('./assets/icon.png');
```

If the image size in bytes is smaller than `8192`you, `myImage` will be a string with the encoded image path such as 
```
data:image/svg+xml;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJhc3NldHMvaW1hZ2VzL3RpY2stQ3lydkhSdi5zdmciOw==
```
If the image size is larger than `8192` it will be a string with the url to the image such as 
```
src/assets/icon.png?hash=5b1f36bc41ab31f5b801
```

This limit is set so images like icons are not loaded through a request but you can force the loader to give you image urls always by doing the following but should not be necessary. The limit works 90% of the time.
```js
const myImage = require('!!url!/assets/icon.png');
```

#### In `index.html`

If you would like to include an image on your `index.html` file, place the path of the image in a webpack require statement`<%= require(imagePath) %>`.

```html
  <img class="splash-title__img"
                     src="<%= require('./src/assets/logo-on-dark-bg.png') %>"
                     alt="webpack logo"></a>
```

## Websites using this starter kit on the wild

* [Droppable library](https://github.com/lifenautjoe/droppable)
* [Noel Event Emitter](https://github.com/lifenautjoe/noel)
* [ChooseIT Wishbot](http://voeux2018.choosit.com/)
* [Webpack Starter Basic](https://lifenautjoe.github.io/webpack-starter-basic/)
* [Openbook Org](https://www.open-book.org/)

Have a website online built with this starter kit and would like to add it to the list? Open an issue!


___
Author [Joel Hernandez](www.lifenautjoe.com)

