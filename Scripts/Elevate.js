/*
Elevate unlock
^https:\/\/accounts\.elevateapp\.net\/api\/users\?user%5Bauthentication_token*
*/

var obj = JSON.parse($response.body);
obj.user.subscription_expiration_date_epoch= 3760317603;

$done({body: JSON.stringify(obj)});
