
var visted = 0;
if (document.cookie.indexOf("course")==-1){
	$("#search input").val("更多的搜索，更好的结果  试一下");
};
$("#search input").focus(function(){
	if (document.cookie.indexOf("course")==-1) {
		$("#course").css("display","block");
		$("#favorite p").eq(0).css("display","block");
		$("#favorite b").eq(0).css("display","block");
		$("#favorite span").eq(0).css("display","block");
		document.cookie="course=1";
	};

	if (visted==0) {
		if (document.cookie.indexOf("first")==-1) {
			$("#course").css("display","block");
			document.cookie="first=1"
		};
		$("#search input").val("");
		$("#favorite li").css("display","block"); 
		// $("#addFav").css("display","block"); 

		visted = 1;
	};
});


$(".course_close").click(function(){
	$("#course").css("display","none");
	$("#favorite p").eq(0).css("display","none");
	$("#favorite b").eq(0).css("display","none");
	$("#favorite span").eq(0).css("display","none");
});


// 选择角色-开始

var defaultSearch =0;


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

// var _siteIco;
// var _searchName;


function addCommon (e) {
	// $("#addFav").remove();
	_siteIco = siteIco[e];
	_searchName = searchName[e];
	var searchModel = "<li><img src=\"img/siteIcon/"+_siteIco+"\"> <a id=\"xiami\" href=\"\"  target=\"_blank\">"+_searchName+"<\/a><p></p><b></b><span>设为默认搜索</span><\/li>";
	$("#favorite").append(searchModel);


	// $("#favorite a:eq("+key+")").text(searchName[key]);
	// $("#favorite img:eq("+key+")").attr("src","img/siteIco/"+siteIco[key]);
	if (searchUrl[e]=="") {
		$("#favorite span").eq($("#favorite span").length-1).remove();
		$("#favorite p").eq($("#favorite p").length-1).remove();
		$("#favorite li").eq($("#favorite li").length-1).css("background","#ECF1E7");

	};
	$("#favorite").append("<div id=\"addFav\">+<\/div>");
	var nosearch = 0 ;
	if ((searchUrl[e]=="")&&(document.cookie.indexOf("nosearch")==-1)&&nosearch==0) {
		$("#favorite li").eq($("#favorite li").length-1).append("<div id=\"nosearch\" style=\"display: block;\"><img class=\"course_arrow\" src=\"img/common/course_arrow.png\" style=\"height: 4px;\"><b>这类网站不能搜索</b><img id=\"nosearch_close\" src=\"img/common/close.png\" style=\"cursor: pointer;\"></div>");
		// console.log("这个网站不能搜索");
		document.cookie="nosearch=1";
		nosearch = 1;
	};
};
$("#favorite").on("click","#nosearch_close",function(){
	event.stopPropagation();
	$("#nosearch").css("display","none");
});

for (var i = 0; i < commonA.length; i++) {
	addCommon(commonA[i]);
};

// $("#addFav").click(function(){
// 	$("#recommendSite").css("display","block");
// });

$("#common").on("click","#favorite span",function(){
	event.stopPropagation();
	$("#favorite li").css("border","0px solid #213234");
	$(this).parent().css("border","1px solid #213234");
	$("#searchBar").text($(this).siblings("a").text());
	$(this).css("color","red");
	$(this).css("color","green");
	$(this).css("display","none");
	$("#favorite a").css("font-weight","normal");
	$(this).siblings("a").css("font-weight","bolder");
	$(this).siblings("b").css("display","none");
	var a = $(this).siblings("a").text();
	for (var i = 0; i < searchName.length; i++) {
		if (searchName[i]==a) {
			defaultSearch = i;
			return;
		};
	};

});
$(document).on("click","#favorite li",function(){
	var a;
	for (var i = 0; i < searchName.length; i++) {
		if ($(this).children("a").text() == searchName[i]) {
			a=i;
		};
	};
	
	var _keyWord= $("#search input").val();
	if ((searchUrl[a]=="")||(_keyWord=="")) {
        window.open(url[a],'_blank');  
		// $("#favorite a:eq("+a+")").attr('href',url[a]);
	}else{
		window.open(searchUrl[a] + _keyWord,'_blank');  
		// $("#favorite a:eq("+a+")").attr('href',searchUrl[a] + _keyWord);
			// console.log("a");
	};
});

$("#common").on("mouseover","#favorite b",function(){
	event.stopPropagation();

	$(this).siblings("span").text("从常用栏移除");
});
$("#common").on("mouseout","#favorite b",function(){
	event.stopPropagation();

	$(this).siblings("span").text("设为默认搜索");
});
$("#common").on("click","#favorite b",function(){
	$(this).parent("li").remove();
});


$("#common").on("mouseover","#favorite li",function(){

	$(this).children("p").css("display","block");
	if ($(this).css("background-color")=="rgb(236, 241, 231)") {
		$(this).children("b").css("display","block");
	};
});
$("#common").on("mouseout","#favorite li",function(){

	event.stopPropagation();

	// $(this).children("span").css("display","none");
	$(this).children("p").css("display","none");
	if ($(this).css("background-color")=="rgb(236, 241, 231)") {
		$(this).children("b").css("display","none");
	};
	// $(this).children("b").css("display","none");
	// $(this).children("span").css("display","none");
});
$(document).on("click","#favorite p",function(event){

	event.stopPropagation();

	if ($(this).siblings("span").css('display') == "none") {

		$(this).siblings("span").css("display","block");
		$(this).siblings("b").css("display","block");
		if ($("#searchBar").text()==$(this).siblings("a").text()) {
			$(this).siblings("span").text("已为默认搜索");
		};
		return;
	};
	if ($(this).siblings("span").css('display') == "block") {

		$(this).siblings("b").css("display","none");
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
// $("#searchBar").click(function(){
// 	if ($("#search input").val()=="") {
// 		return;
// 	};
// 	window.open(searchUrl[defaultSearch]+$("#search input").val(), "_blank");
// })
// 常用-结束


// 角色栏-开始


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

var commonName=new Array();
	for (var i = 0; i < commonA.length; i++) {
		var b = commonA[i];
		commonName.push(searchName[b]);
	};

function showRecommend (e) {
	$("#NewSites li").remove();

	var NewSitesModel = "<li><img class =\"siteIntroP\" src=\"\"><a href=\"\" target=\"_blank\"><\/a><p><\/p><div id=\"beCommon\"><span>添加为常用网站<\/span><img src=\"img\/common\/plus.png\"><\/div><\/li>"
	for (var i = 0; i < e.length; i++) {
		var a = e[i];
		$("#NewSites").append(NewSitesModel);
		$(".siteIntroP:eq("+i+")").attr("src","img/siteLogo/"+siteLogo[a]);
		$("#NewSites p:eq("+i+")").text(siteSlogan[a]);
		$("#NewSites a:eq("+i+")").text(searchName[a]);
		$("#NewSites a:eq("+i+")").attr("href",url[a]);

		var _index = $.inArray(searchName[a],commonName);
		if (_index >= 0) {
			$("#beCommon img").eq(i).css("display","none");
		};
	};	
};
showRecommend(all);


$(document).on("mouseover","#beCommon img",function(){
	$(this).siblings("span").css("display","block");
});
$(document).on("mouseout","#beCommon img",function(){
	$(this).siblings("span").css("display","none");
});


$(document).on("click","#beCommon img",function(){
	$(this).css("display","none");
	var a = $.inArray($(this).parent().siblings("a").text(),searchName);
	commonA.push(a);
	var postName = $(this).parent().siblings ("a").text();
	$.each( searchName ,function  (key ,val) {
			if (val==postName) {
				addCommon(key);
				$("#favorite li").css("display","block"); 
				// $("#addFav").css("display","block"); 
				return;
			};
	});
});

$("#roleBox h3").click(function(){
	showRecommend(all);
});
$("li[name='programer']").click(function(){
	showRecommend(programer);
});
$("li[name='text']").click(function(){
	showRecommend(text);
});
$("li[name='music']").click(function(){
	showRecommend(music);
});


// 推荐-结束

if ($("#class li").length) {
	$("#welcome").css("display","none");
};
