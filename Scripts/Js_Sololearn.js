/*
Sololearn

^https:\/\/api\.sololearn\.com\/(authenticateDevice|challenge\/GetContestFeed|Profile\/GetProfile)$ url script-response-body Js_Sololearn.js

*/

let url=$request.url;
let obj=JSON.parse($response.body);

if (url.endsWith('authenticateDevice')) {
	obj.user.badge="platinum|platinum_mod|pro";
	obj.user.accessLevel=65520;
	obj.user.isPro=true;
	obj.user.proExpireDate="2089-02-27T00:00:00";
}

if (url.endsWith('GetContestFeed')) {
	let num=obj.feed.length;
	if (num==0) {
		$done({});
	} else {
		for (var i=0;i<num;i++) {
			obj.feed[i].player.badge="platinum|platinum_mod|pro"; 
			obj.feed[i].player.accessLevel=65520;
			obj.feed[i].player.isPro=true;
			obj.feed[i].player.proExpireDate="2089-02-27T00:00:00";
		}
	}
}

if (url.endsWith('GetProfile')) {
	if (obj.profile.email==null) {
		$done({});
	} else {
		obj.profile.badge="platinum|platinum_mod|pro";
		obj.profile.accessLevel=65520;
		obj.profile.isPro=true;
		obj.profile.proExpireDate="2089-02-27T00:00:00";
	}
}

$done({body:JSON.stringify(obj)});