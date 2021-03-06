module.exports = function(grunt) {
  grunt.initConfig({
    info: '<json:component.json>',
    meta: {
      banner: '/*!\n'+
              ' * <%= info.name %> - <%= info.description %>\n'+
              ' * v<%= info.version %>\n'+
              ' * <%= info.homepage %>\n'+
              ' * copyright <%= info.copyright %> <%= grunt.template.today("yyyy") %>\n'+
              ' * <%= info.license %> License\n'+
              '*/'
    },
    lint: {
      all: ['lib/routie.js', 'test/*.js']
    },
    concat: {
      dist: {
        src: ['<banner>', 'lib/routie.js'],
        dest: 'dist/routie.js'
      },
    },
    min: {
      dist: {
        src: ['<banner>', 'dist/routie.js'],
        dest: 'dist/routie.min.js'
      }
    },
    mocha: {
      all: {
        src: 'test/index.html',
        options: {
          ui: 'tdd'
        },
        run: true
      }
    },
    watch: {
      js: {
        files: '<config:lint.all>',
        tasks: 'default' 
      }
    },
    server:{
      port: 8000,
      base: '.'
    }
  });
  grunt.loadNpmTasks('grunt-mocha');
  grunt.registerTask('default', 'lint concat min');
  grunt.registerTask('dev', 'server watch');
}
