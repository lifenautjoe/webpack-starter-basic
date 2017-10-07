# webpack-starter-basic
[![forthebadge](http://forthebadge.com/images/badges/fo-real.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

[![dependencies](https://david-dm.org/lifenautjoe/webpack-starter-basic.svg)](https://david-dm.org/lifenautjoe/webpack-starter-basic)

A simple **webpack3 starter project** for your basic web development needs.

Read more on the [demo website](https://lifenautjoe.github.io/webpack-starter-basic/) or continue reading below.

## Motivation

I needed to make a plain ol' "drop your mail to stay updated of an ongoing developments" page.

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

## Usage

```sh
 git clone https://github.com/lifenautjoe/webpack-starter-basic
 cd webpack-starter-basic
 # start the development server
 npm run start
 # build for production
 npm run build
```

## FAQ

### When should I use this starter?

You should use this starter if any of the following are true:

* You want to make a static page. e.g. splash, onboarding, phaser games, threejs visualizations, and countdowns pages.
* You found no good starter kit for whatever I want to do so I need to configure a webpack project myself but don't know where to start.

If you are going to use a frontend framework like angular or react, you can of course add the required plugins and 
configuration but it's normally complicated and quirky enough that it's highly recommended to use one of the existing 
starter projects such as [https://github.com/alicoding/react-webpack-babel](react-webpack-babel) or for angular projects the [https://github.com/angular/angular-cli](angular-cli).


___
Author [Joel Hernandez](www.lifenautjoe.com)

