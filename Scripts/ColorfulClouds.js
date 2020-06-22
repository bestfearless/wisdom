/*
CaiYun Weather (ColorWeather) unlock Vip
^https:\/\/biz\.caiyunapp\.com\/v2\/user\?app_name\=weather
*/

let obj=JSON.parse($response.body);
obj={
  "result" : {
    "vip_expired_at" : 0,
    "is_xy_vip" : false,
    "last_acted_at" : 1589448082.4624168873,
    "vip_type" : "s",
    "xy_svip_expire" : 0,
    "svip_expired_at" : 3760272085.8364019394,
    "platform_name" : "weixin",
    "wt" : {
      "ranking_above" : 75,
      "vip" : {
        "is_auto_renewal" : false,
        "enabled" : true,
        "svip_auto_renewal_type" : "",
        "expired_at" : 0,
        "auto_renewal_type" : "",
        "svip_expired_at" : 3760272085.8364019394
      },
      "is_login" : true,
      "last_acted_at" : 1589448082.4624168873,
      "created_at" : 1585079051.9547290802
    },
    "score" : 2000,
    "xy_vip_expire" : 0,
    "ranking_above" : 75,
    "device_id" : "CE60046F-31B2-4F17-85F3-29EFE52FD339",
    "_id" : "5e7a630bc55211002c34db62",
    "name" : "wisdom",
    "platform_id" : "o3rJ_t7JdukNIZtRbSDWfIFKErIQ",
    "free_trial" : 0,
    "phone_num" : "13120150292",
    "is_vip" : true,
    "is_login" : true,
    "gender" : null,
    "is_auto_renewal" : false,
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWU3YTYzMGJjNTUyMTEwMDJjMzRkYjYyIiwic3ZpcF9leHBpcmVkX2F0IjoxNTk4MDA5NTY0LjgzNjQwMiwidmlwX2V4cGlyZWRfYXQiOjB9.oF07mMqWQqGglqDBRd9gCA7g9sym7VM32btksCFPzfQ",
    "is_xy_auto_renewal" : false,
    "is_phone_verified" : true,
    "hasBeenInvited" : true,
    "avatar" : "http://thirdwx.qlogo.cn/mmopen/vi_32/4ic6gOGFUiclOH7C0XSb75Y2080J7ptOm41SRNzGFglHHOk7wlr5BSYF2QXm6xn2pXlibAcibdZqXBIMnuTGCtwPVg/132",
    "auto_renewal_type" : "",
    "created_at" : 1585079051.9547109604
  },
  "rc" : 0
}

$done({body: JSON.stringify(obj)})
