$(function(){

	var nav = $("#side-nav ul li");
	var contents = $("#contents ._preview");
	var sideBar = $("#side-nav");
	$(".nav_button").click(function(){ //side bar
		sideBar.toggleClass("on");

		if(sideBar.hasClass("on")){
			sideBar.animate({"left":"0px"},200,"easeInOutCirc");
			$(".nav_button").text("Close");
		} else {
			sideBar.animate({"left":"-15%"},200, "easeInOutCirc");
			$(".nav_button").text("Open");
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

	$(window).scroll(function(){
		var section = $("._section");
		if(section.hasClass('active')){
			console.log(123123123);
		}
	});

	$(window).load(function() {
		$(".se-pre-con").fadeOut();
		$('#skills').addClass('show');
	});
	$(document).ready(function() {
		$('#fullpage').fullpage();
	});

});
