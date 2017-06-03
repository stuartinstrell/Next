

//header and nav locking mechanism on scroll
var lastScrollTop = 0;
var navBarHeight = $(".primary-nav").height();

$(window).scroll(function(event){
   var scrollPos = $(this).scrollTop();
   if (scrollPos > lastScrollTop){
       // scroll down
       if (scrollPos > navBarHeight) {  
       		$('body').addClass("nav-locked").removeClass("lower-header");
   		}
	} else {
		// scroll up
		if (scrollPos > navBarHeight) {
			$('body').addClass("lower-header");
		}
		if (scrollPos == 0) {
			$('body').removeClass("nav-locked").removeClass("lower-header");
		}
   }
   lastScrollTop = scrollPos;
});


//full screen modal

$(function(){
	$(".modal-open").click(function(event) {
		event.preventDefault();
		$(".modal").toggleClass("modal-open");
	});

	$(".modal-close").click(function(event) {
		event.preventDefault();
		$(".modal").toggleClass("modal-open");
	});
});


//search take over

$(function(){
	$(".quicklinks__icn--search").click(function(event) {
		event.preventDefault();
		$(".search-container").toggleClass("search-open");
		$(".search-header--input").focus();
	});

	$(".search-header--close-btn").click(function(event) {
		event.preventDefault();
		$(".search-container").toggleClass("search-open");
	});
});