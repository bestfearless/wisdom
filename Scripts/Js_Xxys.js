/*
小小影视 unlock
app 下载地址:http://t.cn/AiWI7o28
由于小小影视通道很多，启用时会选择通道，有时会导致规则失效，请自行抓包把链接reject
测试时有.*.leleapps.com自行添加规则reject

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
