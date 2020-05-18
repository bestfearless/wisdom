/*
今日热榜 unlock
^https?:\/\/api\.tophub\.today/account/sync*
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
