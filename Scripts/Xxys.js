/*
小小影视 unlock Vip
https?:\/\/.*.xiaoxiao(img|apps|appxs).com\/(vod\/reqplay\/|ucp/index|getGlobalData)
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
delete obj.data.iOS_adgroups
}
$done({body: JSON.stringify(obj)});