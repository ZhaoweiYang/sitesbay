// 选择角色-开始



var roleArray = [0];
for (var i = 0; i < $("#welcome li").length; i++) {
	roleArray[i]=0;
};
$("#welcome li").click(function () {

	var roleIndex = $(this).index();
	console.log(roleIndex);
	if (roleArray[roleIndex]==0) {
		roleArray[roleIndex]=1;
		$(this).children("p").css("background","rgb(57,111,234)");
		$(this).children("p").css("color","white");
		$("#welcome span").css("display","none");
	}else{
		$(this).children("p").css("background","white");
		$(this).children("p").css("color","black");
		roleArray[roleIndex]=0;
	};
});

$("#welcome div").click(function(){
	var roleNum = 0;
	for (var i = 0; i < roleArray.length; i++) {
		roleNum = roleNum + roleArray[i];
	};
	if (roleNum) {
		$("#welcome").css("display","none");
	}else{
		$("#welcome span").css("display","block");
		return;
	};
});
// 选择角色-结束


// 常用-开始


var searchName = ["百度","谷歌","虾米","哔哩哔哩"];
var url = ["http://www.baidu.com/","http://www.gu1234.com/","http://www.xiami.com/","http://www.bilibili.com"];
var searchUrl = ["http://www.baidu.com/s?ie=UTF-8&wd=","http://www.gu1234.com/search?hl=zh-CN&source=hp&q=","http://www.xiami.com/search?key=","http://www.bilibili.com/search?keyword="];
var siteIco = ["img/baidu.png","img/google.png","img/xiami.png","img/bilibili.png"];

var searchModel = "<li><img src=\"img/google.png\"> <a id=\"xiami\" href=\"\"  target=\"_blank\">虾米音乐<\/a><p></p><span>设为默认搜索</span><\/li>";
var defaultSearch = 0;


for (var i = 0; i < searchName.length; i++) {
	$("#favorite").append(searchModel);
	$("#favorite a:eq("+i+")").text(searchName[i]);
	$("#favorite img:eq("+i+")").attr("src",siteIco[i]);
	if (searchUrl[i]=="") {
		$("#favorite span:eq("+i+")").remove();
		$("#favorite p:eq("+i+")").remove();
		$("#favorite li:eq("+i+")").css("background","#ECF1E7");
		$("#favorite span:eq("+i+")").css("display","none");
	};
};
$("#favorite").append("<div id=\"addFav\">+<\/div>");

$("#addFav").click(function(){
	$("#addFavBox").css("display","block");
});
$("#addFavBox img").click(function(){
	$("#addFavBox").css("display","none");
});

$("#favorite span").click(function(){
	event.stopPropagation();
	defaultSearch = $(this).parents("#favorite li").index();
	$("#searchBar").text($(this).siblings("a").text());
	$("#favorite span").css("color","red");
	$(this).css("color","green");
	$(this).css("display","none");

});
$("#favorite li").click(function(){
	var a = $(this).index();
	var _keyWord= $("#search input").val();
	if ((searchUrl[a]=="")||(_keyWord=="")) {
        window.open(url[a],'_blank');  
		// $("#favorite a:eq("+a+")").attr('href',url[a]);
	}else{
		window.open(searchUrl[a] + _keyWord,'_blank');  
		// $("#favorite a:eq("+a+")").attr('href',searchUrl[a] + _keyWord);
			// console.log("a");
	};
})
$("#favorite li").mouseover(function(){
	$(this).children("p").css("display","block");
});
$("#favorite li").mouseout(function(){
	$(this).children("p").css("display","none");
	// $(this).children("span").css("display","none");
});
$("#favorite p").click(function(){
	if ($(this).siblings("span").css('display') == "none") {
		event.stopPropagation();
		$(this).siblings("span").css("display","block");
		return;
	};
	if ($(this).siblings("span").css('display') == "block") {
		event.stopPropagation();
		$(this).siblings("span").css("display","none");
		return;
	};
	
});
$("#search input").keypress(function (e) {
	if ($("#search input").val()=="") {
		return;
	};
	var key = e.which; 
	if (key == 13) {
		window.open(searchUrl[defaultSearch]+$("#search input").val(), "_blank");
	}
});
$("#searchBar").click(function(){
	if ($("#search input").val()=="") {
		return;
	};
	window.open(searchUrl[defaultSearch]+$("#search input").val(), "_blank");
})
// 常用-结束


// 角色栏-开始
var roleNameA = ["程序员","二次元爱好者","文案工作者"];
var roleIdA = ["123","213","234"];

var roleModel = "<li name=\"\"><\/li>";

for (var i = 0; i < roleNameA.length; i++) {
	$("#roleBox").append(roleModel);
	$("#roleBox li:eq("+i+")").text(roleNameA[i]);
	$("#roleBox li:eq("+i+")").attr("name",roleIdA[i]);
};
$("#roleBox").append("<li id=\"addRole\">+</li>");

$("#addRole").click(function(){
	$("#welcome").css("display","block");
});

var mainClass = ["推荐","旅行","健身","电视剧"];
for (var i = 0; i < mainClass.length; i++) {
	$("#class").append(roleModel);
	$("#class li:eq("+i+")").text(mainClass[i]);
};


$("#roleBox").children().click(function(){
	$("#roleBox").children().css("color","2px solid white");
	$("#roleBox").children().css("border-bottom","#737373");
	$(this).css("border-bottom","2px solid #427fed");
	$(this).css("color","#262626;");
});

$("#switch").click(function(){
	if ($("#roleBox").css('display') == "none") {
		$(this).text("收起导航");
		$("#roleBox").css("display","block");
		$("#recommendSite").css("display","block");
		return;
	};
	if ($("#roleBox").css('display') == "block") {
		$(this).text("展开导航");
		$("#roleBox").css("display","none");
		$("#recommendSite").css("display","none");
		return;
	};
	
});



// 角色栏-结束

// 推荐-开始


$("#beCommon img").mouseover(function(){
	$(this).siblings("span").css("display","block");
});
$("#beCommon img").mouseout(function(){
	$(this).siblings("span").css("display","none");
});







// 推荐-结束


if ($("#class li").length) {
	$("#welcome").css("display","none");
};
