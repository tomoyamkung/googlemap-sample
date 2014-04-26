googlemap-sample
================


# changelog

## v0.7.1

### grunt-jsbeautifier を導入しました

[JavaScript beautifier](http://jsbeautifier.org/) の Grunt 版である [grunt-jsbeautifier](https://www.npmjs.org/package/grunt-jsbeautifier) を導入しました。

grunt-jsbeautifier は JavaScript, JSON, CSS, HTML ファイルをフォーマットしてくれるプラグインです。
フォーマットするルールはオプションで設定できますが、本プロジェクトではデフォルトのルールで運用していきます。


#### インストール

インストールは簡単です。

1. `npm` コマンドのパスが通っているターミナルで本プロジェクトに移動する
2. 次のコマンドを実行する
	- `$ npm install grunt-jsbeautifier --save-dev`


#### 設定

grunt-jsbeautifier の設定は、他のプラグインと同様に Gruntfile.js で行います。

設定内容は次の通りです。

```js
// grunt-jsbeautifier の設定
jsbeautifier: {
    files: ["js/**/*.js", "test/**/*.js", "css/**/*.css", "*.html"],
    option: {}
}
```


#### 実行方法

次のコマンドで grunt-jsbeautifier によるフォーマットが実行されます。

```sh
$ grunt jsbeautifier
```


### 緯度・経度の入力フォーマットに誤りがある場合にエラーメッセージを表示するようにしました

コロンが複数付いている場合にエラーメッセージを表示するようにしました。

※暫定対応的な感じになっていますので完全に弾くわけではありません


### Marker をすべて削除するボタンを追加しました

Marker を削除するボタンを設置しました。
~~削除確認のダイアログなどは表示されないのでご注意ください。~~
DELETE ボタンクリック時に確認ダイアログを表示するように修正しました。


## v0.7

### Marker を表示するトリガーを変更しました

これまで入力欄の値を変更したタイミングで Marker を表示させていましたが、新たに Marker ボタンを設置しました。
Marker ボタンをクリックすると、入力欄の値の場所に Marker が表示されるようになります。


### 緯度・経度の入力でも Marker が打てるようになりました

画面上部の入力欄に "latitude:longitude" の形式で入力すると、その緯度・経度が表す場所に Marker が表示されます。

例）　二子玉川駅 → 35.61149899999999:139.626624

