module.exports = function(grunt) {
	grunt.initConfig({
		// パッケージファイルを読み込む
		pkg: grunt.file.readJSON('package.json'),

		// grunt-contrib-connect の設定
		connect: {
			site: {
				options: {
					// ドメイン名は 'localhost' とする
					hostname: 'localhost',
					// 接続するポートは 9000 とする
					port: 9000
				}
			}
		},

		// grunt-contrib-watch の設定
		watch: {
			// プロジェクト下のある 全 HTML, CSS, JavaScript を監視対象とする
			files: ['**/*.html', '**/*.css', '**/*.js'],
			options: {
				// 上記のファイルが更新されたらブラウザをリロードする
				livereload: true
			}
		}
	});

	// LiveReload するために必要なタスクをロードする
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// `grunt` コマンドで実行するデフォルトタスクを定義する
	grunt.registerTask('default', ['connect', 'watch']);
};
