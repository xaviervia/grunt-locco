/*
 * grunt-jsocco
 * https://github.com/xavier/grunt-jsocco
 *
 * Copyright (c) 2014 Xavier Via
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    locco: {
      main: {
        src: ["tasks/*.js"],
        options: {
          includeBase: true
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['locco']);

};
