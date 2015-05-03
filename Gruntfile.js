'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    jshint: {
      dev: {
        src: ['*.js', 'lib/**/*.js', 'test/**/*.js']
      },
      options: {
        jshintrc: '.jshintrc'
      }
    },
    simplemocha: {
      dev: {
        src: ['test/**/*.js']
      }
    },
    watch: {
      app: {
        files: ['<%= jshint.dev.src %>', '<%= simplemocha.dev.src %>'],
        tasks: ['jshint', 'simplemocha']
      }
    }
  });//end grunt initConfig
  grunt.registerTask('test', ['jshint:dev']);
  grunt.registerTask('mocha', ['simplemocha:dev']);
  grunt.registerTask('default', ['test', 'mocha', 'watch']);
};