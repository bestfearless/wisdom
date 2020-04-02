/*
dayone

^https://dayone.me/api/v2/users/(receipt|account-status) url script-response-body Js_Dayone.js

*/

const path1 = "/account-status";
const path2 = "/receipt";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj = {
  "expirationDate": 3760317603000,
  "startDate": 1491074090000,
  "subscriptionPlan": "com.bloombuilt.dayoneios.subscription.premium.yearly_discounted_trial",
  "lastRenewalDate": 1491074190000,
  "subscriptionName": "premium",
  "bundleReason": "purchase",
  "cancellationDate": 0
    }
}
if ($request.url.indexOf(path2) != -1){
obj={
  "bundle": {
    "bundleName": "premium",
    "features": [
      {
        "name": "imagesPerEntry",
        "limit": 30,
        "canUpgrade": false
      },
      {
        "name": "journalLimit",
        "limit": 100,
        "canUpgrade": false
      },
      {
        "name": "audioPerEntry",
        "limit": 10,
        "canUpgrade": false
      },
      {
        "name": "sync",
        "canUpgrade": false
      },
      {
        "name": "syncMac",
        "canUpgrade": false
      },
      {
        "name": "printingDiscount",
        "canUpgrade": false
      },
      {
        "name": "prioritySupport",
        "canUpgrade": false
      }
    ]
  },
  "reason": "purchase"
}
}
$done({body: JSON.stringify(obj)});
