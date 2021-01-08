$( document ).ready(function() {
    jQuery('.item-masonry').hover(
		function(){
			$(this).find(".cover-item-gallery").fadeIn();
		},
		function(){
			$(this).find(".cover-item-gallery").fadeOut();
		}
    );

    var sizer = '.sizer4';

    var container = $('#gallery');

    container.imagesLoaded(function(){
    	container.masonry({
    		itemSelector: '.item-masonry',
    		columnWidth: sizer,
    		percentPosition: true,
            originTop: false,
          
    	});
    });
});


$(document).ready(function(){
  $('.slider').slick({
        arrows:false,
        dots:true,
        dotsClass:'slick-dots',
      cssEase: 'ease-out',
  

  });
   });

$(document).ready(function(){
  $('.slider_two').slick({
        arrows:false,
        dots:true,
        dotsClass:'slick-dots',
      cssEase: 'ease-out',
      
  });
   });

$(document).ready(function(){
  $('.vertical_slider').slick({
        arrows:false,
        dots:true,
          infinite: false,
        vertical:true,
        slidesToShow: 1,
      slidesToScroll: 1,
        verticalSwiping: true,
        dotsClass:'slick-dots',
        cssEase: 'ease-out',


      
  });
   });


$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});




const navSlide = () =>{
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.menu_media');

  burger.addEventListener('click',()=>{
    nav.classList.toggle('menu--active');
  })
  
}


navSlide();