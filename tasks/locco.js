/*
 * grunt-locco
 * https://github.com/xavier/grunt-locco
 *
 * Copyright (c) 2014 Xavier Via
 * Licensed under the MIT license.
 */

'use strict';

var locco = require("locco");

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('locco', 'A Grunt plugin for creating locco documentation', function() {

    // Runs locco for each pattern
    this.data.src.forEach(function (pattern) {
      grunt.log.writeln("Generating locco documentation for files matching " + pattern + " ...");
      var files = locco(pattern);
      grunt.log.writeln("Generated documentation for:");
      files.forEach(function (file) {
        grunt.log.writeln("  " + file);
      });
    });
/*
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });

*/
  });

};
