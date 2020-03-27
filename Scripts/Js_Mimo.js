var obj = JSON.parse($response.body);

obj= {
  "source": "ios",
  "status": "active",
  "interval": "yearly",
  "billingInfo": {
    "currency": "USD",
    "nextBillingPrice": 59.98999999999999
  },
  "subscriptions": [
    {
      "source": "ios",
      "status": "active",
      "interval": "yearly",
      "billingInfo": {
        "currency": "USD",
        "nextBillingPrice": 59.98999999999999
      },
      "intervalCount": 1,
      "activeUntil": "2089-02-27T08:04:21+00:00",
      "createdAt": "2089-02-27T08:04:21+00:00",
      "clientSecret": "",
      "isActive": true
    }
  ],
  "intervalCount": 1,
  "activeUntil": "2089-02-27T08:04:21+00:00",
  "createdAt": "2089-02-27T08:04:21+00:00",
  "clientSecret": "",
  "isActive": true
};

$done({body: JSON.stringify(obj)});