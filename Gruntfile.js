module.exports = function(grunt) {
    grunt.initConfig({
        // パッケージファイルを読み込む
        pkg: grunt.file.readJSON('package.json'),

        // grunt-contrib-connect の設定
        connect: {
            live: { // LiveReload 用の設定
                options: {
                    hostname: 'localhost', port: 9000
                }
            },
            qunit: { // QUnit 用の設定
                options: {
                    port: 9090, base: '.'
                }
            }
        },

        // grunt-contrib-watch の設定
        watch: {
            live: { // LiveReload 用の設定
                // プロジェクト下のある 全 HTML, CSS, JavaScript を監視対象とする
                files: ['**/*.html', '**/*.css', '**/*.js'],
                options: {
                    livereload: true // 上記のファイルが更新されたらブラウザをリロードする
                }
            },
            qunit: { // QUnit 用の設定
                files: ['test/**/*.js', 'js/**/*.js'], // test ディレクトリ、および、js ディレクトリにある全 JavaScript を監視対象とする
                tasks: ['qunit']
            }
        },

        // grunt-contrib-qunit の設定
        qunit: {
            all: ['test/**/*.html'] // test ディレクトリにある HTML を実行対象とする
        }
    });

    // LiveReload するために必要なタスクをロードする
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt-contrib-qunit を有効にするためのタスクをロードする
    grunt.loadNpmTasks('grunt-contrib-qunit');

    // `grunt` コマンドで実行するデフォルトタスクを定義する
    grunt.registerTask('default', ['connect:live', 'watch:live']);
    // `grunt test` で実行するタスクを定義する
    grunt.registerTask('test', ['connect:qunit', 'watch:qunit', 'qunit']);
};