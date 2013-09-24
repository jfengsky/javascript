module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    cssmin: {
      options: {
        banner: '/* <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */'
      },
      combine: {
        files: {
          'build/index.min.css':[
            'css/reset.css',
            'css/style.css'
          ]
        }
      }
    },
    concat: {
      basic_and_extras: {
        files: {
          'build/index.css':[
            'css/reset.css',
            'css/style.css'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['cssmin', 'concat']);
}; 