var obj = JSON.parse($response.body);
obj.user.subscription_expiration_date_epoch= 3760317603;

$done({body: JSON.stringify(obj)});