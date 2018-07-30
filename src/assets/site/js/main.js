(function ($) {
"use strict";

/*-- Variables --*/
var $section = $('.section'),
    $menuArea = $('#menu-area'),
    $menuToggle = $('.menu-toggle'),
    $menuItem = $('.main-menu ul li a'),
    $portfolioFilter = $('.portfolio-filter'),
    $portfolioGrid = $('.portfolio-grid');

/*-- Preloader --*/
$(window).on('load', function(){
	$('#preloader').fadeOut('slow');
});
    
/*-- Default In & Out Animation For Section --*/
$section.addClass('fadeOutDown').removeClass('fadeInUp active');
$('#home-area').addClass('active fadeInUp').removeClass('fadeOutDown');

/*-- Menu Functions --*/
$menuToggle.on('click', function (){
    if($(this).hasClass('open')) {
        $(this).removeClass('open');
        $('.section.active').addClass('fadeInUp').removeClass('fadeOutDown');
        $menuArea.removeClass('active fadeInUp').addClass('fadeOutDown');
    } else {
        $(this).addClass('open');
        $('.section.active').addClass('fadeOutDown').removeClass('fadeInUp');
        $menuArea.addClass('active fadeInUp').removeClass('fadeOutDown');
    }
});

/*-- Section Animation --*/
$menuItem.on('click', function (e){
	e.preventDefault();
	var $activeSection = $(this).attr('href');
	var $overlayChance = $(this).parent('li').attr('class');
	$menuToggle.removeClass('open');
	$section.removeClass('active fadeInUp').addClass('fadeOutDown');
	$($activeSection).addClass('active fadeInUp').removeClass('fadeOutDown');
	return false;
});

/*-- Back Form Blog Deatils Page --*/
var sect = window.location.hash;
if ( $(sect).length == 1 ){
    $('.section.active').removeClass('active fadeInUp').addClass('fadeOutDown');
    $(sect).addClass('active').removeClass('fadeOutDown');
}   

/*-- Magnific Popup --*/
$('.portfolio-item a').magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	}	
});

/*-- Isotop --*/
$portfolioGrid.imagesLoaded( function() {
    /*-- Filter List --*/
    $portfolioFilter.on( 'click', 'button', function() {
        $portfolioFilter.find('button').removeClass('active');
        $(this).addClass('active');
        var $filterValue = $(this).attr('data-filter');
        $portfolioGrid.isotope({ filter: $filterValue });
    });
    /*-- Filter Grid --*/
    $portfolioGrid.isotope({
      itemSelector: '.portfolio-item',
      masonry: {
        columnWidth: '.portfolio-item',
      }
    });
});

/*-- Perfect Scrollbar --*/
$('.section, .page').perfectScrollbar();


})(jQuery);	