

var siteIco = [];
var siteLogo = [];
var siteSlogan = [];
var searchName = [];
var url =[];
var searchUrl = [];
for (var i = 0; i < data.length; i++) {
	siteIco.push(data[i].siteIco);
	siteLogo.push(data[i].siteLogo);
	siteSlogan.push(data[i].siteSlogan);
	searchName.push(data[i].searchName);
	url.push(data[i].url);
	searchUrl.push(data[i].searchUrl.substr(1,data[i].searchUrl.length));
};

// 这是常用栏目
var commonA = [];
var commonUrl = ["http://www.gu1234.com/","http://www.cnblogs.com/"];

for (var i = 0; i < commonUrl.length; i++) {
	for (var j = 0; j < url.length; j++) {
		if (url[j]==commonUrl[i]) {
			commonA.push(j);
		};
	};
};

// 这是导航栏里面的综合，注意：必须searchUrl要不为空且不存在编码问题
var all = [];
var allUrl = ["http://sports.qq.com/"];

for (var i = 0; i < allUrl.length; i++) {
	for (var j = 0; j < url.length; j++) {
		if (url[j]==allUrl[i]) {
			all.push(j);
		};
	};
};

// 以下是导航栏里面的各种角色

var roleNameA = ["程序员","音乐爱好者","文案工作者"];
var roleIdA = ["programer","music","text"];

// 音乐爱好者
var music = [];
var musicLover = ["http://sports.qq.com/","http://www.cnblogs.com/"];

for (var i = 0; i < musicLover.length; i++) {
	for (var j = 0; j < url.length; j++) {
		if (url[j]==musicLover[i]) {
			music.push(j);
		};
	};
};



// 程序员
var programer = [];
var programerUrl = ["http://sports.qq.com/"];

for (var i = 0; i < programerUrl.length; i++) {
	for (var j = 0; j < url.length; j++) {
		if (url[j]==programerUrl[i]) {
			programer.push(j);
		};
	};
};

// 文案工作者
var text = [];
var textUrl = ["http://sports.qq.com/"];

for (var i = 0; i < textUrl.length; i++) {
	for (var j = 0; j < url.length; j++) {
		if (url[j]==textUrl[i]) {
			text.push(j);
		};
	};
};









