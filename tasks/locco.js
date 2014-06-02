//
// [grunt-locco](https://github.com/xavier/grunt-locco)
// ====================================================
//
// > Copyright (c) 2014 Xavier Via
// >
// > Licensed under the MIT license.
//

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
  //
  //       // Options object, exactly the same as locco's second argument
  //       options: {
  //
  //         // Sets the output folder for documentation. Default: doc
  //         output: "docs",
  //
  //         // If true, copies the full folder structure into the output folder
  //         // If false, copies the folder structure from the first wildcard. For
  //         // example, if the pattern "tasks/**/*.js" is used and a
  //         // "tasks/deep/file.js" is matched, the output file will be
  //         // "doc/deep/file.js".
  //         includeBase: false
  //
  //       }
  //     },
  //   },
  // });
  // ```
  grunt.registerMultiTask(
    'locco',
    'A Grunt plugin for creating locco documentation',
    function() {

    var options = this.data.options

    // Runs locco for each pattern
    this.data.src.forEach(function (pattern) {
      grunt.log.writeln(
        "Generating locco documentation for files matching " +
        pattern + " ..." )

      var files = locco(pattern, options)

      grunt.log.writeln("Generated documentation for:")
      files.forEach(function (file) {
        grunt.log.writeln("  " + file)
      })
    })
  })

}
