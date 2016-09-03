/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-font-awesome': {
      useScss: true,
      fontsOutput: '/assets/fonts'
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/slick-carousel/slick/slick.js');

  app.import('vendor/boilerplate.css');
  app.import('bower_components/normalize-css/normalize.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/font-awesome/css/font-awesome.css');
  app.import('bower_components/slick-carousel/slick/slick.css');
  app.import('bower_components/slick-carousel/slick/slick-theme.css');

  var fontAwesomeTree = pickFiles('bower_components/font-awesome/fonts', {
    srcDir: '/',
    destDir: '/fonts'
  });

  var slickTree = pickFiles('bower_components/slick-carousel/slick/fonts', {
    srcDir: '/',
    destDir: '/assets/fonts'
  });


  return mergeTrees([app.toTree(), fontAwesomeTree, slickTree]);
};
