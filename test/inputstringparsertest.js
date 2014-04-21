module('緯度:経度の書式', { });
test('10:10 と入力した場合', 1, function() {
  strictEqual(InputStringParser.isLatLng("10:10"), true);
});


module('住所や地名を', { });
test('名称を入力した場合', 1, function() {
  strictEqual(InputStringParser.isLatLng("ハチ公"), false);
});

module('コロンが複数ある場合', { });
test('コロンが2つある場合', 1, function() {
  // throws(InputStringParser.isLatLng("10:10:10"), SyntaxError);
  // ↑ のように書けるはずなのだが、なぜか失敗してしまう。。。
  try {
  	InputStringParser.isLatLng("10:10:10");
  	ok(false, "例外が投げられるのでここには来ない");
  } catch(e) {
  	strictEqual(e.message, "緯度・経度指定の書式が異なります。");
  }
});
