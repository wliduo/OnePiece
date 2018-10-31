$(window).on('load', function () {
	
	// alert("正在开发中.....∩_∩");

	// 加载视频
	document.getElementById("videoShow").src = "https://res.wang64.cn/Video/onepiece.mp4";
	document.getElementById("video01").src = "https://res.wang64.cn/Video/OnePiece01.mp4";
	document.getElementById("video02").src = "https://res.wang64.cn/Video/OnePiece02.mp4";
	document.getElementById("video03").src = "https://res.wang64.cn/Video/OnePiece03.mp4";
	document.getElementById("video04").src = "https://res.wang64.cn/Video/OnePiece04.mp4";
	document.getElementById("video05").src = "https://res.wang64.cn/Video/OnePiece05.mp4";

	'use strict';
	
	/* Preloader */	
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
	
	/* Portfolio Index */
	var PORTFOLIO = (function($) {
	var $grid = $('#grid'),	$filterOptions = $('.portfolio-menu'),
		setupFilters = function() {
			var $btns = $filterOptions.children();
				$btns.on('click', function() {
				var $this = $(this),
				isActive = $this.hasClass( 'active' ),
				group = isActive ? 'all' : $this.data('group');
					if ( !isActive ) {
						$('.portfolio-menu .active').removeClass('active');
					}
			$this.toggleClass('active');
			$grid.shuffle( 'shuffle', group );
			});
			$btns = null;
		},
				init = function() {
					setupFilters();
					$grid.shuffle({
						itemSelector: '.col-md-3, .col-md-4',
					});
				};
		return {init: init};
	}(jQuery));

	PORTFOLIO.init();

	/* // 需要预加载的图片路径存放在数组里
	var imgsrc=[
		"images/34.jpg",
		"images/32.jpg",
		"images/33.jpg"
	];
	// 初始化image对象
	var img = new Image();
	// 遍历数组的路径，预加载到浏览器缓存中
	for (var i = 0; i < imgsrc.length; i++){
		img.src = imgsrc[i];
	} */
});

$(document).ready(function() {
	
	'use strict';
	
	$("img.lazy").lazyload({
		effect : "fadeIn",
		failurelimit: 20
	});

	// 检测是否是手机查看
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		// 跳转移动端页面
		// alert("检测到是手机预览，横屏或者电脑体验更佳哦∩_∩");
		var carousel = document.getElementsByName("carousel");
		carousel[0].src = "https://res.wang64.cn/Image/201810/thumbnail/20035.png";
		carousel[1].src = "https://res.wang64.cn/Image/201810/thumbnail/20045.png";
		carousel[2].src = "https://res.wang64.cn/Image/201810/thumbnail/20040.png";
		carousel[0].setAttribute("data-original", "https://res.wang64.cn/Image/201810/normal/20035.png");
		carousel[1].setAttribute("data-original", "https://res.wang64.cn/Image/201810/normal/20045.png");
		carousel[2].setAttribute("data-original", "https://res.wang64.cn/Image/201810/normal/20040.png");
	}else{
		var carousel = document.getElementsByName("carousel");
		carousel[0].src = "https://res.wang64.cn/Image/201810/thumbnail/20010.png";
		carousel[1].src = "https://res.wang64.cn/Image/201810/thumbnail/20025.png";
		carousel[0].setAttribute("data-original", "https://res.wang64.cn/Image/201810/normal/20010.png");
		carousel[1].setAttribute("data-original", "https://res.wang64.cn/Image/201810/normal/20025.png");
		carousel[2].setAttribute("data-original", "https://res.wang64.cn/Image/201810/normal/20005.gif");
	}

	// 加载图片
	var broad = document.getElementsByName("broad");
	broad[0].src = "https://res.wang64.cn/Image/201810/normal/broad/zoro.png";
	broad[1].src = "https://res.wang64.cn/Image/201810/normal/broad/nami.png";
	broad[2].src = "https://res.wang64.cn/Image/201810/normal/broad/usopp.png";
	broad[3].src = "https://res.wang64.cn/Image/201810/normal/broad/sanji.png";
	broad[4].src = "https://res.wang64.cn/Image/201810/normal/broad/chopper.png";
	broad[5].src = "https://res.wang64.cn/Image/201810/normal/broad/robin.png";
	broad[6].src = "https://res.wang64.cn/Image/201810/normal/broad/franky.png";
	broad[7].src = "https://res.wang64.cn/Image/201810/normal/broad/brook.png";
	broad[8].src = "https://res.wang64.cn/Image/201810/normal/broad/luffy.png";

	var logo = document.getElementsByName("logo");
	logo[0].src = "https://res.wang64.cn/Image/201810/thumbnail/logo/luffy.png";
	logo[1].src = "https://res.wang64.cn/Image/201810/thumbnail/logo/zoro.png";
	logo[2].src = "https://res.wang64.cn/Image/201810/thumbnail/logo/nami.png";
	logo[3].src = "https://res.wang64.cn/Image/201810/thumbnail/logo/usopp.png";
	logo[4].src = "https://res.wang64.cn/Image/201810/thumbnail/logo/sanji.png";
	logo[5].src = "https://res.wang64.cn/Image/201810/thumbnail/logo/chopper.png";
	logo[6].src = "https://res.wang64.cn/Image/201810/thumbnail/logo/robin.png";
	logo[7].src = "https://res.wang64.cn/Image/201810/thumbnail/logo/franky.png";
	logo[8].src = "https://res.wang64.cn/Image/201810/thumbnail/logo/brook.png";
	logo[9].src = "https://res.wang64.cn/Image/201810/thumbnail/logo/merry.png";
	logo[10].src = "https://res.wang64.cn/Image/201810/thumbnail/logo/sunny.png";
	logo[11].src = "https://res.wang64.cn/Image/201810/thumbnail/logo/jinbe.png";

	var photos = document.getElementsByName("photos");
	photos[0].src = "https://res.wang64.cn/Image/201810/thumbnail/20020.png";
	photos[1].src = "https://res.wang64.cn/Image/201810/thumbnail/20030.png";

	var broad2 = document.getElementsByName("broad2");
	broad2[0].src = "https://res.wang64.cn/Image/201810/normal/broad2/luffy.png";
	broad2[1].src = "https://res.wang64.cn/Image/201810/normal/broad2/zoro.png";
	broad2[2].src = "https://res.wang64.cn/Image/201810/normal/broad2/nami.png";
	broad2[3].src = "https://res.wang64.cn/Image/201810/normal/broad2/usopp.png";
	broad2[4].src = "https://res.wang64.cn/Image/201810/normal/broad2/sanji.png";
	broad2[5].src = "https://res.wang64.cn/Image/201810/normal/broad2/chopper.png";
	broad2[6].src = "https://res.wang64.cn/Image/201810/normal/broad2/robin.png";
	broad2[7].src = "https://res.wang64.cn/Image/201810/normal/broad2/franky.png";
	broad2[8].src = "https://res.wang64.cn/Image/201810/normal/broad2/brook.png";

	/* Animations Home Page*/
	function onScrollInit( items, trigger ) {
	    items.each( function() {
	    var osElement = $(this),
	    osAnimationClass = osElement.attr('data-animation'),
	    osAnimationDelay = osElement.attr('data-animation-delay');
		          
	    osElement.css({
	    '-webkit-animation-delay':  osAnimationDelay,
	    '-moz-animation-delay':     osAnimationDelay,
	    'animation-delay':          osAnimationDelay
	    });
			
	    var osTrigger = ( trigger ) ? trigger : osElement;
	           
	    osTrigger.waypoint(function() {
	    osElement.addClass('animated').addClass(osAnimationClass);
	    },{
	        triggerOnce: true,
	        offset: '90%'
	    });
	    });
	    }
		onScrollInit( $('.scroll-animation') );
	    onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
	
	/* Swiper Slider Home Page */
	var swiper = new Swiper('#slide', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
		nextButton: '.swiper-top-next',
        prevButton: '.swiper-top-prev'
    });
	
	/* Carousel Index page */
	var swiper = new Swiper('#carousel', {
        slidesPerView: 6,
        paginationClickable: false,
        spaceBetween: 20,
        freeMode: true,
		loop: true,
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
		breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
	
	/* Carousel Index page2 */
	var swiper = new Swiper('#carousel2', {
        slidesPerView: 6,
        paginationClickable: false,
        spaceBetween: 20,
        freeMode: true,
		loop: true,
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
		breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

	/* Testimonials */
	var swiper = new Swiper('#testimonials-carousel', {
		pagination: '.testimonials-pagination',
		paginationClickable: true,
    });
	
	/* FAQ */
	$('.faq-block a').on('click', function() {
		$(this).toggleClass('active').next().slideToggle('slow');
		return false; 
	}); 
	   
	/* Tabs */	
	$('ul.tabs').delegate('li:not(.active)', 'click', function() {
		$(this).addClass('active').siblings().removeClass('active')
		.parents('div.tabs').find('.tab-block').hide().eq($(this).index()).fadeIn(150);
		return false;
	});
		
	/* Gallery */
	var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
	galleryThumbs.params.control = galleryTop;
	
});