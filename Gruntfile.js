module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ''
      },
      schema: {
        src: ['src/cmapi.namespace.js','src/schemas/*.schema.js'],
        dest: 'dist/cmapi.schema.js'
      },
      examples: {
        src: ['src/cmapi.namespace.js','src/examples/*.examples.js'],
        dest: 'dist/cmapi.examples.js'
      },
      overview: {
        src: ['src/cmapi.namespace.js','src/overviews/*.js'],
        dest: 'dist/cmapi.overview.js'
      },
      notes: {
        src: ['src/cmapi.namespace.js','src/notes/*.notes.js'],
        dest: 'dist/cmapi.notes.js'
      },
      api: {
        src: ['src/api/cmajs.namespace.js','src/api/utils/*.js','src/api/runtime/*.js','src/api/init.js'],
        dest: 'dist/cmajs.js'
      },
      descriptions: {
        src: ['src/cmapi.namespace.js','src/descriptions/*.description.js'],
        dest: 'dist/cmapi.descriptions.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      api: {
        files: {
          'dist/cmajs.min.js': ['<%= concat.api.dest %>']
        }
      },
      schema: {
        files: {
          'dist/cmapi.schema.min.js': ['<%= concat.schema.dest %>']
        }
      },
      examples: {
        files: {
          'dist/cmapi.examples.min.js': ['<%= concat.examples.dest %>']
        }
      },
      overview: {
        files: {
          'dist/cmapi.overview.min.js': ['<%= concat.overview.dest %>']
        }
      },
      notes: {
        files: {
          'dist/cmapi.notes.min.js': ['<%= concat.notes.dest %>']
        }
      },
      descriptions: {
        files: {
          'dist/cmapi.descriptions.min.js': ['<%= concat.descriptions.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/tests.js'],
      options: {
        reporterOutput: "",
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint', 'concat', 'qunit']);

  grunt.registerTask('default', ['jshint', 'concat', 'qunit', 'uglify']);

};