/*
Busuu unlock vip
^https:\/\/api\.busuu\.com\/users\/me* url script-response-body Js_Busuu.js

*/

var obj = JSON.parse($response.body);
obj.data.is_premium= true;
obj.data.access.tier= "plus";
$done({body: JSON.stringify(obj)});


/*
Elevate unlock
^https:\/\/accounts\.elevateapp\.net\/api\/users\?user%5Bauthentication_token* url script-response-body Js_Elevate.js

*/

var obj = JSON.parse($response.body);
obj.user.subscription_expiration_date_epoch= 3760317603;

$done({body: JSON.stringify(obj)});


/*
今日热榜 unlock
^https?:\/\/api\.tophub\.today/account/sync* url script-response-body Js_Jrrb.js

*/

let obj=JSON.parse($response.body);
obj={
  "data": {
    "is_vip": "1",
    "vip_expired": "3760272085",
    "is_vip_now": true
  },
  "error": false,
  "status": 200
}


$done({body: JSON.stringify(obj)})


/*
Wps unlock
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


/*
peak unlock
^https:\/\/billing\.peakcloud\.org\/billing\/2\/user\/me? url script-response-body Js_Peak.js

*/

let obj=JSON.parse($response.body);
obj={
  "response": {
    "bbuid": "NKoKXsjJnw",
    "usedIntroOfferPeriod": false,
    "class": "UserModuleBillingResponse",
    "is_in_billing_retry": false,
    "modules": [{
      "class": "BillingModuleResponse",
      "name": "com.brainbow.module.peak.PeakModule",
      "subscription": {
        "status": 0,
        "statusdate": 0,
        "source": {
          "id": "com.brainbow.peak.arsub_1wtrial_12m3499",
          "cancelable": false,
          "provider": "itunes",
          "type": "trial"
        },
        "bbuid": "NKoKXsjJnw",
        "endTime": 3760317603000,
        "startTime": 1491074090000,
        "pro": true
      }
    }]
  },
  "metaResponse": {
    "code": 0
  }
}


$done({body: JSON.stringify(obj)})


/*
小小影视 unlock Vip
app下载地址:http://t.cn/AiWI7o28
电报交流频道：https://t.me/ThorHCC
[rewrite_local]
https:\/\/.*\..*\.com\/(vod\/reqplay\/|ucp/index|getGlobalData) url script-response-body xxys.js
MITM = *.*apps.com, *.xiao*.com

*/

const path1 = "/ucp/index";
const path2 = "/vod/reqplay/";
const ad = 'getGlobalData';
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.data.uinfo["down_daily_remainders"] = "5201314";
	obj.data.uinfo["play_daily_remainders"] = "5201314";
	obj.data.uinfo["curr_group"] = "5";
	obj.data.user["isvip"] = "1";
	obj.data.user["goldcoin"] = "5201314";
   	obj.data.user["avatar_url"] = "https://i.loli.net/2019/10/24/eCJuqz75WrL6ihQ.jpg";
}
if ($request.url.indexOf(path2) != -1){
	obj.retcode = "0";
	obj.data.lastplayindex = "1";
	if(obj.data.hasOwnProperty("httpurl_preview")){
		var playurl = obj.data["httpurl_preview"];
		obj.data["httpurl"] = playurl;
	};
}

if ($request.url.indexOf(ad) != -1) {
delete obj.data.adrows
delete obj.data.adgroups
}
$done({body: JSON.stringify(obj)});


/*
菜谱大全
https?:\/\/api\.jiaonizuocai\.com url script-response-body Js_Cpdq.js

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/v4/User/getUserData';
const dish = '/v4/dish/info';
const sb = '/v4/User/getDeviceInfo';
const bd = '/v4/User/bindVipCus';

if (url.indexOf(vip) != -1) {
   obj["data"]["data"]["vip"]["is_open_vip"] = "1";
   obj["data"]["data"]["vip"]["is_vip"] = "2";
   body = JSON.stringify(obj);
   }
   
if (url.indexOf(dish) != -1) {
obj["data"]["power"]["detail"]["video"]["common"]["isShow"] = "0";
     body = JSON.stringify(obj);
     }

if (url.indexOf(sb) != -1) {
	obj["data"]["is_vip"] = "2";
	body = JSON.stringify(obj);
    }
    
if (url.indexOf(bd) != -1) {
	obj["data"]["state"] = "2";
	body = JSON.stringify(obj);
    }

$done({body});



