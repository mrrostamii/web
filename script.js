
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
  
  
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });
  
  
    return false;
  });
  new Swiper ('.swiper-container', {
    rtl:true,
    direction: 'horizontal',
    effect:'slide',
    speed:850,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      576: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 25,
      }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {el: '.swiper-scrollbar'},
    autoplay:false
  });

  const swiper = new Swiper(".mahsolmy", {
    slidesPerView: 4,
    slidesPerGroup:2,
    spaceBetween: 25,
    speed:850,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      576: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 25,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
  },
  autoplay:false
  });
 new Swiper(".yekoyek", {
    slidesPerView: 4,
    slidesPerGroup:2,
    spaceBetween: 25,
    speed:850,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      400: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      576: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 25,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
  },
  autoplay:true
  });
 
  $('.owl-carousel').owlCarousel({
  rtl:true,
  loop:false,
  margin:5,
  smartSpeed:500,
  slideBy:2,
  autoplay:true,
  autoplayTimeout:3500,
  slideTransition:'linear',
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      576:{
          items:2,
          nav:false
      },
      768:{
        items:3,
        nav:false
    },
      992:{
        items:3,
        nav:false
    },
      1000:{
          items:5,
          loop:true,
          nav:true
      }
  }
});
$('[data-toggle="tooltip"]').tooltip();
$('.carousel').carousel({
    speed:800
})
var $a= $.noConflict(true);
$a(window).scroll(function(){
    if ($a(window).scrollTop() >= 300) {
        $a('.navbar').addClass('fixed-header') ;
    }
    else {
        $a('.navbar').removeClass('fixed-header');
    }
});
