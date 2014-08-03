var roleNameA = ["程序员","音乐爱好者","文案工作者"];
var roleIdA = ["programer","music","text"];

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


// var siteIco = [

// "baidu.png",
// "google.png",
// "xiami.png",
// "bilibili.png",
// "iqiyi.png",
// "doubanMovie.png"

// ];
// var siteIntro =[
// "_baidu.png",
// "_google.png",
// "_xiami.png",
// "_bilibili.png",
// "_iqiyi.png",
// "_doubanMovie.png"
// ]

// var siteSlogan = [
// "全球最大的中文搜索引擎",
// "全球最大的搜索引擎",
// "高品质音乐 发现 分享",
// "神奇的哔哩哔哩",
// "高清影视剧,网络视频在线观看",
// "中国最专业的电影点评网站"
// ]

// var searchName = [

// "百度",
// "Google",
// "虾米音乐",
// "哔哩哔哩",
// "爱奇艺",
// "豆瓣电影"


// ];
// var url = [

// "http://www.baidu.com/",
// "http://www.gu1234.com/",
// "http://www.xiami.com/",
// "http://www.bilibili.com",
// "http://www.iqiyi.com/",
// "http://movie.douban.com/"

// ];
// var searchUrl = [

// "http://www.baidu.com/s?ie=UTF-8&wd=",
// "http://www.gu1234.com/search?hl=zh-CN&source=hp&q=",
// "http://www.xiami.com/search?key=",
// "http://www.bilibili.com/search?keyword=",
// "http://so.iqiyi.com/so/q_",
// "http://movie.douban.com/subject_search?search_text="

// ];
var commonA = [0,1,2];
var programer = [3,2,1];
var music = [2,1,0];
var text = [1,2,0];
var all =[1,2,3,4];




