/*
部分内购 unlock 比如Bear,Monly......
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body Js_Buyhack.js

*/

let body= $response.body;
var obj = JSON.parse(body);
if (body.indexOf("expires") !=-1) {
  obj["receipt"]["in_app"][0]["expires_date"] = "2089-02-27 05:14:18 Etc/GMT";
  obj["receipt"]["in_app"][0]["expires_date_pst"] = "2089-02-27 22:14:18 America/Los_Angeles";
  obj["receipt"]["in_app"][0]["expires_date_ms"] = "3760317603000";
  obj["latest_receipt_info"][0]["expires_date"] = "2089-02-27 05:14:18 Etc/GMT";
  obj["latest_receipt_info"][0]["expires_date_pst"] = "2089-02-27 22:14:18 America/Los_Angeles";
  obj["latest_receipt_info"][0]["expires_date_ms"] = "3760317603000";
  }
$done({body: JSON.stringify(obj)});