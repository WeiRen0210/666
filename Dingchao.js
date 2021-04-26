/*
Dingchao unlock vip
伪君子制作
qq3367141972

MITM = apiv2.dingstock.net
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const path1 = '\/xserver\/user\/u\/detail';

if (url.indexOf(path1) != -1) {
	obj.data["isVip"] = true;
	obj.data["vipValidity"] = 1745659932000;
	body = JSON.stringify(obj);
}
$done({body});
