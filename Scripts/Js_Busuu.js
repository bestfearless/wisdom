/*
Busuu

^https:\/\/api\.busuu\.com\/users\/me* url script-response-body Js_Busuu.js

*/

var obj = JSON.parse($response.body);
obj.data.is_premium= true;
obj.data.access.tier= "plus";
$done({body: JSON.stringify(obj)});
