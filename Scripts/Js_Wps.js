/*
Wps

^https://account.wps.com/api/users/ url script-response-body Js_Wps.js

*/

let obj = JSON.parse($response.body);

  obj.level = 5,
  obj.exp = 0,
  obj.vip.memberid = 20,
  obj.vip.expire_time = 3760317603,
  obj.vip.has_ad = 0,
  obj.total_buy = 1

$done({body: JSON.stringify(obj)});