$(function(){

	//side menu
	var nav = $("#side-nav ul li");
	var contents = $("#contents ._preview");
	var sideBar = $("#side-nav");
	$(".nav_button").click(function(){
		sideBar.toggleClass("on");

		$(".top-menu-egg").toggleClass("top-animate-egg");
		$(".bottom-menu-egg").toggleClass("bottom-animate-egg");

		if(sideBar.hasClass("on")){
			sideBar.animate({"left":"0px"},200,"easeInOutCirc");
		} else {
			sideBar.animate({"left":"-15%"},200, "easeInOutCirc");
		}
	});

	$(document).keydown(function(e) {
		if (e.keyCode == 27) {
			$(".top-menu-egg").removeClass("top-animate-egg");
			$(".bottom-menu-egg").removeClass("bottom-animate-egg");
		}
	});

	nav.click(function(e){
		e.preventDefault();
		var target = $(this);
		var index = target.index();
		//alert(index);
		var section = contents.eq(index);
		var offset = section.offset().top;
		//alert(offset);
		$("html,body").animate({scrollTop:offset},600,"easeInOutExpo");
	});

	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		var section = $("._section");

		if(wScroll >= contents.eq(0).offset().top){
			nav.removeClass("active");
			nav.eq(0).addClass("active");
		}else
			nav.removeClass("active");
		if(wScroll >= contents.eq(1).offset().top){
			nav.removeClass("active");
			nav.eq(1).addClass("active");
		}
		if(wScroll >= contents.eq(2).offset().top){
			nav.removeClass("active");
			nav.eq(2).addClass("active");
		}
		if(wScroll >= contents.eq(0).offset().top - $(window).height()/3){
			contents.eq(0).addClass("show");
		}
		if(wScroll >= contents.eq(1).offset().top - $(window).height()/3){
			contents.eq(1).addClass("show");
		}
		if(wScroll >= contents.eq(2).offset().top - $(window).height()/3){
			contents.eq(2).addClass("show");
		}
	});


	// page load
	$(window).load(function() {
		$(".se-pre-con").fadeOut();
		$('#skills').addClass('show');
	});

	// footer modal
	$("._btn").click(function(){
		$("#modal").removeAttr("class").addClass("one");
	});
	$("._close").click(function(){
		$("#modal").addClass("out");
	});

	// full page plug-in
	$(document).ready(function() {
		$('#fullpage').fullpage({
			navigation: true,
			navigationPosition: 'right',
			responsiveWidth: 767
		});
	});

	// push esc key to exit
	$(document).keydown(function(e) {
		if (e.keyCode == 27) {
			$(".top-menu-egg").removeClass("top-animate-egg");
			$(".bottom-menu-egg").removeClass("bottom-animate-egg");
		}
	});
});
