# webpack3-starter
[![forthebadge](http://forthebadge.com/images/badges/fo-real.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

[![dependencies](https://david-dm.org/lifenautjoe/webpack3-starter.svg)](https://david-dm.org/lifenautjoe/webpack3-starter)

A simple **webpack3 starter project** for your web development needs.

Read more on the [demo website](https://lifenautjoe.github.io/webpack3-starter/) or continue reading below.

## Motivation

I needed to make a plain ol' "drop your mail to stay updated of an ongoing developments" page.

I didn't need anything fancy, no frontend framework, no unit testing, simply a **starter project that would let me use sass, ES6, load assets, add vendor prefixes, have a dev server, generate sourcemaps and optimize everything for production.**

I looked around and all I found were heavily specialized webpack starter projects (`webpack-angular-starter`, `webpack-react-starter`, etc) full of obscure configuration settings like `if (process.env.DEVTOOLS !== 'custom' && process.env.IS_KNOWN_ENV && common.config.helpers.loadPlugins())` 
and plugins configured in such an intertwined way that stripping undesired functionality is almost impossible. 

So I did this.

## Features

* Webpack settings you can understand
* Sass
* ES6
* Asset loading
* CSS Vendor prefixing
* Development server
* Sourcemaps
* Production optimizations

## Usage

```sh
 git clone https://github.com/lifenautjoe/webpack3-starter
 cd webpack3-starter
 # start the development server
 npm run start
 # build for production
 npm run build
```
___
Author [Joel Hernandez](www.lifenautjoe.com)

