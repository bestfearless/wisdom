/*
Beijingtiku unlock vip
https?://wx.xuexiguanjia.org/api/user(info)?
*/

var obj = JSON.parse($response.body);
obj.data.is_is_vip= 1;
obj.data.expire_date= 3760000000;
obj.data.orderStatusNum.switchUserInfo.is_vip= 1;
obj.data.orderStatusNum.switchUserInfo.expire_date= 3760000000;
obj.data.orderStatusNum.switchUserInfo.is_vip= 1;

$done({body: JSON.stringify(obj)});