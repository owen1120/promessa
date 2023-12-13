$(document).ready(function(){

	// fullpage plugin initialization
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
		menu: '#js-menu',
		autoScrolling: false, 
		//因fullpaget插件會自動抓取網頁的一個距離並停住,故設定為false才能偵測到下方js設定的滾動距離
		fitToSection:false,
		// 預設為true,滾動時自動抓取一個section,對行動裝置使用者體驗並不佳
		scrollingSpeed: 1200 
		//預設速度比較快,故調慢一點
	});

	// logo change when scroll
	$(window).on('scroll',function(){ //選取整個畫面,當畫面滾動時會執行後面的函數 
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 300){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling");
		}
	})
 
	//rellax plugin initialization
	if(screen.width > 768){
		var rellax = new Rellax('.rellax',{
			center: true
		});
	}
	

	//carousel plugin initialization
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[], /*清除原本預設的文字*/
    dots: false, /*清除原本預設的點*/
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        1600:{
            items:4
        }
    }
})

})