let obj=JSON.parse($response.body);
obj={
  "data": {
    "is_vip": "1",
    "vip_expired": "1",
    "is_vip_now": true
  },
  "error": false,
  "status": 200
}

$done({body: JSON.stringify(obj)})
