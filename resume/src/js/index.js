// 引入zepto-modules模块
var $ = require('zepto-modules/zepto');

require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/form');
require('zepto-modules/ie');
require('zepto-modules/touch');
module.exports = $;

var wx = require('./components/weixin/jweixin-1.0.0.js');
// console.log(wx);

/*$.post('http://me.hao669.online/me/php/getsign.php',{url:window.location.href}, function(data){
	wx.config({
      debug: true,
      appId: data.appId,
      timestamp: data.timestamp,
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: [
        // 所有要调用的 API 都要加到这个列表中
        'chooseImage','scanQRCode'
      ]
    });
})
*/
$.ajax({
    url:'http://me.hao669.online/me/php/getsign.php',
    type:'POST',
    data:{url:window.location.href},
    dataType:'json',
    success:function(data){
    	wx.config({
      debug: true,
      appId: data.appId,
      timestamp: data.timestamp,
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: [
        // 所有要调用的 API 都要加到这个列表中
        'chooseImage','scanQRCode'
      ]
    });
    },
    error:function(xhr,type){
    	alert('ajax error!');
    }

  });



  $('#scan').tap(function(){
  	wx.scanQRCode({
    needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
    success: function (res) {
    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
  		}
	});
  })

  $('#photo').tap(function(){
  	wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
          var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
      }
    });
  })

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

//主页面隐藏
$("#mainContent").hide();

// 引入swiper模块
var Swiper = require('./components/swiper/swiper.min.js');

var swiperAnimate = require('./components/swiper/swiper.animate1.0.2.min.js');


var swiper = new Swiper('.swiper-container',{
      direction : 'vertical',
      pagination : '.swiper-pagination',
      // effect : 'cube',
      onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
      },
      onSlideChangeEnd: function(swiper){ 
        swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
      } 
});

var IScroll = require('./components/iscroll/iscroll.js');

//进入主页面函数--主页面显示
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

});

/*//音乐播放控制
$("#audio_btn").click(function(){
    $(this).toggleClass("rotate"); //控制音乐图标 自转或暂停
});*/
var media = document.getElementById("media"); 
$(function(){
    $("#audio_btn").click(function(){
        $(this).toggleClass("rotate");//控制音乐图标 自转或暂停
        //控制背景音乐 播放或暂停            
        if($(this).hasClass("rotate")){
            media.play();
        }else{
            media.pause();
        }
    })
});









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