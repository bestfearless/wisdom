/*
Elevate

^https:\/\/accounts\.elevateapp\.net\/api\/users\?user%5Bauthentication_token* url script-response-body Js_Elevate.js

*/

var obj = JSON.parse($response.body);
obj.user.subscription_expiration_date_epoch= 3760317603;

$done({body: JSON.stringify(obj)});