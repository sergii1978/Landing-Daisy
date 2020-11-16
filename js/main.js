// portfolio-slider
var mixer = mixitup ( '.container-filter' );

// swiper-carousel
            var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
       
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })

//Выпадающее меню
$(document).ready(function() {
      $('.menu-icon').click(function () {
      $('.nav-hide').slideToggle(500);
      $('nav').css({
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'center'
      });
      $('.menu-wrap').css({
        'display': 'flex',
        'flex-direction': 'row',
        'justify-content': 'center'
        });
        $('.menu-bar').css({
          'display': 'flex',
          'flex-direction': 'row',
          'justify-content': 'center'
          });
      $('.nav-hide').css({
          'display': 'flex',
          'flex-direction': 'column',
          'justify-content': 'center'
      });
      // $('ul.header-menu').css({
      //     'display': 'flex',
      //     'flex-direction': 'column',
      //     'justify-content': 'center',
      //     'background': 'transparent'
      // });
      // $('.header-menu li').css({
      //     'margin-left': '0',
      //     'margin-top': '5px',
      //     'margin-bottom': '5px'
      // });

      if ($('.menu-icon').html() == '<use xlink:href="/svg/sprite-menu.svg#bars"></use>') {
          $(this).html('<use xlink:href="/svg/sprite-menu.svg#times"></use>');
      } else {
        $(this).html('<use xlink:href="/svg/sprite-menu.svg#bars"></use>')};
  });
});