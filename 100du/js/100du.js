$(function (){
	//导航
	(function () {
	   $('nav a').not('.aLogo').each(function (i) {
	       $(this).css('backgroundPosition',i*(-66)+'px 0px');
	       $(this).hover(function () {
	           $(this).css('backgroundPosition',i*(-66)+'px -70px');
	       },function () {
	           $(this).css('backgroundPosition',i*(-66)+'px 0px');
	       });
	   });
	})();
	
	
	//搜索框
	(function (){
		var oLi = $('#search .menu li')
		var oText = $('#search .form .text'); 
		var arrSearch = ['例如:荷棠鱼坊烤鱼或樱花日本料理','例如:北京市海淀区或北京市朝阳区','例如:烤鱼优惠券或复古餐厅优惠券','例如:美食日记','例如:大江南美食视频或比赛视频'];
		var iNow = 0;
		oText.val(arrSearch[iNow]);
		oLi.each(function (index){
			$(this).click(function (){
				oLi.attr('class','gradient');
				$(this).attr('class','active');
				iNow = index;
				oText.val(arrSearch[iNow]);
			});
		});
		oText.focus(function (){
			if($(this).val() == arrSearch[iNow]){
				$(this).val('');
			}
		});
		oText.blur(function (){
			if($(this).val() == ''){
				$(this).val(arrSearch[iNow]);
			}
		});
		
	})();
	
	//文字滑动
	(function (){
		var update = $('.update');
		var oUl = update.find('ul');
		var upBtn = $('#updateUp');
		var downBtn = $('#updateDown');
		var iH = 0;
		var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://maolove.cn' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://maolove.cn' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://maolove.cn' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://maolove.cn' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://maolove.cn' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://maolove.cn' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://maolove.cn' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://maolove.cn' }
		];
		
		var timer = null;
		var iNow = 0;
		var str = '';
		for(var i = 0;i<arrData.length;i++){
			str += '<li><a href="'+ arrData[i].url +'"><strong>'+ arrData[i].name +'</strong> <span>'+ arrData[i].time +'分钟前</span> 写了一篇新文章：'+ arrData[i].title +'…</a></li>';
		}
		oUl.html(str);
		iH = oUl.find('li').height();
	
		function Move(num){
			iNow += num;
			if(Math.abs(iNow)>arrData.length-1){
				iNow = 0;
			}
			if(iNow > 0){
				iNow = -(arrData.length-1);
			}
			oUl.stop().animate({top:iH*iNow},1000);
		}
		upBtn.click(function (){
			Move(1);
		});
		downBtn.click(function (){
			Move(-1);
		});
		update.hover(function (){
			clearInterval(timer);
		},autoPlay);
		function autoPlay(){
			timer = setInterval(function (){
				Move(-1);
			},2000);
		}
	})();
	
	
	//标签
	(function (){
			
		//options tab two
		$('.options_hot .nav li').click(function (){
			$('.options_hot .nav li').removeClass('active').addClass('gradient').eq($(this).index()).removeClass('gradient').addClass('active');
			$('.options_hot .nav li a').removeClass('triangle_down_red').addClass('triangle_down_gray').eq($(this).index()).removeClass('triangle_down_gray').addClass('triangle_down_red');
			$('.options_hot .con .hot_list').css('display','none').eq($(this).index()).css('display','block');
		});
		$('.options_life .nav li').click(function (){
			$('.options_life .nav li').removeClass('active').addClass('gradient').eq($(this).index()).removeClass('gradient').addClass('active');
			$('.options_life .nav li a').removeClass('triangle_down_red').addClass('triangle_down_gray').eq($(this).index()).removeClass('triangle_down_gray').addClass('triangle_down_red');
			$('.options_life .con1').css('display','none').eq($(this).index()).css('display','block');
		});
		
		//section tab three
		$('.section_lifestyle .tab li').mouseover(function (){
			$('.section_lifestyle .tab li').removeClass('active').addClass('gradient').eq($(this).index()).removeClass('gradient').addClass('active');
			$('.section_lifestyle .tab li a').removeClass('triangle_down_red').addClass('triangle_down_gray').eq($(this).index()).removeClass('triangle_down_gray').addClass('triangle_down_red');
			$('.section_lifestyle .lifestyle_list').css('display','none').eq($(this).index()).css('display','block');
		});
		$('.section_coupons .tab li').mouseover(function (){
			$('.section_coupons .tab li').removeClass('active').addClass('gradient').eq($(this).index()).removeClass('gradient').addClass('active');
			$('.section_coupons .tab li a').removeClass('triangle_down_red').addClass('triangle_down_gray').eq($(this).index()).removeClass('triangle_down_gray').addClass('triangle_down_red');
			$('.section_coupons .coupus1_list').css('display','none').eq($(this).index()).css('display','block');
		});
	})();
	
	//自动播放焦点图
	(function (){
		var pic = $('.recommend_con .pic');
		var oUl = pic.find('ul');
		var oUlLi = pic.find('ul li');
		var oOl = pic.find('ol');
		var oOlLi = pic.find('ol li');
		var oP = pic.find('p');
		var arrText = ['爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方'];
		var iNow = 0;
		var timer = null;
		
		Fade();
		
		oOlLi.click(function (){
			iNow = $(this).index();
			//oOlLi.attr('class','').eq($(this).index()).attr('class','active');
			Fade();
		});
		
		function Fade(){
			oUlLi.each(function (index){
				if(index != iNow){
					$(this).fadeOut();
					$(this).css('zIndex','1');
					oOlLi.eq(index).removeClass('active');
				}
				else{
					$(this).fadeIn();
					$(this).css('zIndex','2');
					oOlLi.eq(index).addClass('active');
				}
				oP.html(arrText[iNow]);
			});
		}
		
		pic.hover(function (){
			clearInterval(timer);
		},autoPlay);
		
		function autoPlay(){
			timer = setInterval(function (){
				iNow++;
				iNow %= arrText.length;
				Fade();
			},1500);
		}
		autoPlay();
		
	})();
	
	//日历提示
	(function (){
		var calendar = $('.calendar');
		var week = $('.calendar_week span');
		var aImg = calendar.find('ol li img');
		var info = $('.today_info');
		var infoImg = info.find('img');
		var infoWeek = info.find('.text strong');
		var infoText = info.find('.text p');
		
		aImg.hover(function (){
			//info.show();
			var aTop = $(this).parent().position().top-30;
			var aLeft = $(this).parent().position().left+55;
			var index = $(this).parent().index()%week.length;//弃用函数：.size()  被弃版本：jQuery-1.8以上  替代函数：.length
			info.show().css({
				top:aTop,
				left:aLeft
			});
			infoImg.attr('src',$(this).attr('src'));
			infoText.text($(this).attr('info'));
			infoWeek.text(week.eq(index).text());
			
		},function (){
			info.hide();
		});
		
		
		
	})();
	
	
	//BBS论坛
	(function (){
		$('.bbs_list li').mouseover(function (){
			$('.bbs_list li').removeClass('active').eq($(this).index()).addClass('active');
		});
	})();

	//遮罩层
	(function (){
		
		var arr = [
			'',
			'用户1<br />人气1',
			'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'
		];
		$('.hot_area li').mouseover(function (){
			
			if ( $(this).index() == 0 ) return;
			
			$('.hot_area li p').remove();
			
			$(this).append('<p style="width:'+ ($(this).width()-12) +'px; height:'+ ($(this).height()-12) +'px;">'+ arr[$(this).index()] +'</p>');
		});

	})();


});
