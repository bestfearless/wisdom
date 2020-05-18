/*
网易蜗牛读书 unlock
^https?://p\.du\.163\.com/readtime/info.json url reject-img
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body Js_Wnds.js
*/

var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 3760317603000;
body = JSON.stringify(obj);
$done({body});
