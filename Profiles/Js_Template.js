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
now冥想vip
https://nowapi.navoinfo.cn/my_vip
*/

let obj = JSON.parse($response.body);

 obj.result.user_info["end_at"] = "2099-03-20 19:28:11",
 obj.result.user_info["vip_over_days"] = 9999,
 obj.result.user_info["vip_over_time"] = "2099-03-20 19:28:11",
 obj.result.user_info["vip_forever"] = "true"

$done({body:JSON.stringify(obj)});


/*
下载链接http://u5ss.com/mobi/load_ios.html?code=D6779FDFCCC857EA3854ABC4526F223C
u5影视解锁VIP一个月时间，请多多推广会员会自动延长时间，请勿盗包改包，转载注明出处--Eric
http://.*/api/user/getUserDetail
*/

body = $response.body.replace(/.+/, "352AB684A03282F063D8743B566B5EB2FD80528931292886BF7779A9BE6350875E728142E4D2CFB355EE8F2FD2817EEE224FE1D451874C5F3613047FD6723FE1A7F9856B74AD35D91BCB99A346169A4BF3082029EBE805AF55BAB015C4AD1AD0486F89B6D4F59DC48741375BA13F7EC867DAE7A34935A8CB3F7BA19CBA0DEA5B901A545EAC1BBBD85BFFE2198D2229532119D54B1E42460FA8D2B1E31997B30A2F34D6AE3158AD39881ADF5586D9348CFDC0CF2676288FF562C7E18677F5FA2F8AA8CE10584E33C83913007D8E7410053303B8AC5BEB9F0D56C6E851275E1FB6594EA23335D26439170F8FB8A0862601966CC6283DB5856B7606F6C386D6A6493399B589D47E99E0361FB8F08F0C567735E8D34FBD2D3FDF486AB63CEACEA2AB40FDA857827DCF31FF17052D3BB1D32D9F45474B1AECD58D2F1CAAF35BD20A2E21B3D16EA7C38D921BA614BA5C435F6D5B9DCFF6C11A834AD591ADF3F6FD6F7B73F2658180C35E5E4E0ECDCF7700B954EA4A0A19C0274AA3DCBD0E1FB7A152D58DE39F18ACE19DFD10AB50975E6A04D14A713D280EA532D7E0F5FCBA3F76BC7B805D17636BD9CC64D94B42A4C25EB4F9")
$done({body});


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



