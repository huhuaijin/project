/**
 * Created by Administrator on 2016/6/20.
 */
//包装函数
module.exports = function(grunt) {
    //任务配置，所有插件的配置信息
    grunt.initConfig({
        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),

        //uglify配置信息 压缩js
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '**/*.js',
                    dest: 'build/js',
                    ext: '.min.js'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'build/css',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['uglify'],
                options: {spawn: false}
            }
        },

    });

    //告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //告诉grunt当我们在终端中输入grunt时需要做些什么（先后顺序）
    grunt.registerTask('default',['uglify','watch']);
};