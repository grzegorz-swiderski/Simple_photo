$(document).ready(function(){
    
///hamburger menu
		
    $(".hamburger").click(function(){
        $('.photoMenu').slideToggle();
    });
    
///scroll

	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
    
///slider
   
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        fade: true,
        asNavFor: '.carousel2',
        });
    
    $('.carousel2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.carousel',  
        dots: false,
        centerMode: false,
        arrows: false,
        focusOnSelect: false,
        fade: true
    });
    
    
    $('.carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        setSlideNumber(nextSlide);
    });
    
    function setSlideNumber(currentSlide) {
        $('.number').find('.numberOfSlide').text(currentSlide + 1);
    }
    
    $('.carousel-community').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        prevArrow: $('.prev-community'),
        nextArrow: $('.next-community')    
    });
    
    $(".fa-arrow-up").hide();
	
	$(".fa-arrow-up").click(function(){
		$("html,body").animate({scrollTop: 0},500);
	});
	
	$(document).scroll(function(){
		var position=$(this).scrollTop();
		
		if((position<250) || (position>2800)){
			$(".fa-arrow-up").fadeOut();
		} else {
            $(".fa-arrow-up").fadeIn();
        }
	});
   
 
});