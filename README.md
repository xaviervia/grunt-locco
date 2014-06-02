# grunt-locco

> A Grunt plugin for creating locco documentation

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-locco --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-locco');
```

## The "locco" task

### Overview

In your project's Gruntfile, add a section named `locco` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  locco: {
    all: {
      // Put here the patterns of files to be parsed for documentation
      src: ["lib/**/*.js"],

      // Options object, exactly the same as locco's second argument
      options: {

        // Sets the output folder for documentation. Default: doc
        output: "docs",

        // If true, copies the full folder structure into the output folder
        // If false, copies the folder structure from the first wildcard. For
        // example, if the pattern "tasks/**/*.js" is used and a
        // "tasks/deep/file.js" is matched, the output file will be
        // "doc/deep/file.js".
        includeBase: false

      }
    },
  },
});
```

### Usage

To make documentation for a target, run from the shell:

```js
grunt locco:all
```

## License

Copyright (c) 2014 Xavier Via

[MIT license](LICENSE-MIT)
