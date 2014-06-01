/*
 * grunt-locco
 * https://github.com/xavier/grunt-locco
 *
 * Copyright (c) 2014 Xavier Via
 * Licensed under the MIT license.
 */

'use strict'

var locco = require("locco")

module.exports = function(grunt) {

  // locco grunt task
  // ----------------
  //
  // In your project's Gruntfile, add a section named `locco` to the data
  // object passed into `grunt.initConfig()`.
  //
  // ```js
  // grunt.initConfig({
  //   locco: {
  //     all: {
  //       // Put here the patterns of files to be parsed for documentation
  //       src: ["lib/**/*.js"]
  //     },
  //   },
  // });
  // ```
  grunt.registerMultiTask(
    'locco',
    'A Grunt plugin for creating locco documentation',
    function() {

    // Runs locco for each pattern
    this.data.src.forEach(function (pattern) {
      grunt.log.writeln(
        "Generating locco documentation for files matching " +
        pattern + " ..." )

      var files = locco(pattern)

      grunt.log.writeln("Generated documentation for:")
      files.forEach(function (file) {
        grunt.log.writeln("  " + file)
      })
    })
  })

}
