module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			all: ['Gruntfile.js', 'js/**/*.js', '!js/**/*.min.js']
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: [{
					expand: true,
					cwd: 'css/',
					src: '**/*.scss',
					dest: 'css/',
					ext: '.css'
				}]
			}
		},
		autoprefixer: {
			dist: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: '**/*.css',
					dest: 'css/',
					ext: '.css'
					// 'css/style.css': 'css/style.css',
					// 'css/listicle.css': 'css/listicle.css',
					// 'css/maps.css': 'css/maps.css'
				}]
			}
		},
		connect: {
			server: {
				options: {
					port: 9000,
					hostname: 'localhost',
					livereload: true,
					open: true,
				},
			},
		},
		watch: {
			options: {
				livereload: true,
			},
			html: {
				files: ['**/*.html'],
				options: {
					spawn: false,
				},
			},
			css: {
				files: ['css/*.scss'],
				tasks: ['sass', 'autoprefixer'],
				options: {
					spawn: false,
				},
			},
			script: {
				files: ['js/*.js'],
				tasks: ['jshint'],
				options: {
					spawn:false,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');


	grunt.registerTask('default', ['jshint', 'sass', 'autoprefixer', 'connect', 'watch']);
};