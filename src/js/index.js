// 引入zepto-modules模块
var $ = require('zepto-modules/zepto');

require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/form');
require('zepto-modules/ie');
require('zepto-modules/touch');
module.exports = $;

var wx = require('./components/weixin/jweixin-1.0.0.js');
console.log(wx);

/*var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'momgodb://127.0.0.1:27017/webapp';
MongoClient.connect(DB_CONN_STR,function(err,db){
	if(err){
		console.log(err);
		return;
	}
	console.log(db);
})
*/

	//获取数据
	/*$.ajax({
	  type: 'GET',
	  url: 'http://localhost:3000/comment/api',
	  success: function(data) {
	    console.log(data);
	  }
	});*/


// $.ajax({
//   type: 'GET',
//   url: '/api/skill.php',
//   success: function(data) {
//     console.log(data);
//   }
// });

$("#mainContent").hide();

// 引入swiper模块
var Swiper = require('./components/swiper/swiper.min.js');

var swiperAnimate = require('./components/swiper/swiper.animate1.0.2.min.js');


var swiper = new Swiper('.swiper-container',{
	  direction : 'vertical',
      onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
      },
      onSlideChangeEnd: function(swiper){ 
        swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
      } 
});

var IScroll = require('./components/iscroll/iscroll.js');

$('#enter').tap(function(){
	$(".swiper-container").hide();
	$("#mainContent").show();

	$('#footer div').click(function(){
		var id = $(this).attr("id");
		var str = '';
		str = '#' + id + "_item";
		if($(str).hasClass('show')){
			return;
		}else{
			$('.list').css({"display":"none"});
			$(str).css({"display":"block"});
		}
	})

})









/*$('#enter').tap(function(){
  $(".swiper-container").hide();
  $("#mainContent").show();


	$.ajax({
	  type: 'GET',
	  url: '/api/skill.php',
	  success: function(data) {
	  	var html = "";
	  	for (var i = 0; i < data.length; i++) {
	  		html += "<li>" + data[i].name  +"</li>";
	  	};
	  	$("#scroller ul").html(html);
	    console.log(JSON.stringify(data));
	  }
	});

	myScroll = new IScroll('#wrapper', { mouseWheel: true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);



})*/

/*$("#footer div").tap(function(){
	var apiTarget = $(this).attr("id");
	var apiUrl = "/api/" + apiTarget + ".php";

	$.ajax({
	  type: 'GET',
	  url: apiUrl,
	  success: function(data) {
	  	var html = "";
	  	
	  	for (var i = 0; i < data.length; i++) {
	  		html += "<li>" + data[i].name  +"</li>";
	  	};

	  	$("#scroller ul").html(html);
	    console.log(data);
	  }
	});


})*/