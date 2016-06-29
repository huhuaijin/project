/**
 * Created by Administrator on 2016/6/20.
 */
//��װ����
module.exports = function(grunt) {
    //�������ã����в����������Ϣ
    grunt.initConfig({
        //��ȡpackage.json����Ϣ
        pkg: grunt.file.readJSON('package.json'),

        //uglify������Ϣ ѹ��js
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

    //����grunt���ǽ�ʹ�ò��
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //����grunt���������ն�������gruntʱ��Ҫ��Щʲô���Ⱥ�˳��
    grunt.registerTask('default',['uglify','watch']);
};