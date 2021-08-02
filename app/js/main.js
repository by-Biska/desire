$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });

  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });


  $(".header__btn-menu").on("click", function () {
    $(".menu").toggleClass("menu--open");
  });

  $(window).resize(function () { 
    if($(window).width() < 651) {
      $('.works-path__item--measurements').appendTo($('.works-path__items-box'));
    } else {
      $('.works-path__item--measurements').appendTo($('.works-path__items'));
    }
  });

  $(window).scroll(function () { 
    if($(this).scrollTop() > 400) {
      $('.btn-up').fadeIn()
    }else {
      $('.btn-up').fadeOut()
    }
  });
  $(document).ready(function(){
    $('.btn-up').click(function(){
      $('html ,body').animate({scrollTop : 0}, 800);
    })
  })

  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });

  $(".contact-slider").slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
    slidesToScroll: 8,
        }
      },
      {
        breakpoint: 1510,
        settings: {
          slidesToShow: 6,
    slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 5,
    slidesToScroll: 5,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 4,
    slidesToScroll: 4,
        }
      },
      {
        breakpoint: 785,
        settings: {
          slidesToShow: 3,
    slidesToScroll: 3,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
    slidesToScroll: 2,
        }
      }
    ]
  });

  $(window).resize(function () { 
    if($(window).width() < 375) {
      $(".contact-slider").slick('unslick');
    } else {
      $(".contact-slider").slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 8,
        slidesToScroll: 8,
            }
          },
          {
            breakpoint: 1510,
            settings: {
              slidesToShow: 6,
        slidesToScroll: 6,
            }
          },
          {
            breakpoint: 1140,
            settings: {
              slidesToShow: 5,
        slidesToScroll: 5,
            }
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 4,
        slidesToScroll: 4,
            }
          },
          {
            breakpoint: 785,
            settings: {
              slidesToShow: 3,
        slidesToScroll: 3,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
        slidesToScroll: 2,
            }
          }
        ]
      });
    }
  });
  

  $(".article-slider__box").slick({
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="img/blog/arrow-slider-right.svg" alt="arrow right"></button>',
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="img/blog/arrow-slider-left.svg" alt="arrow left"></button>'
  });

  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".living",
    },
  });
});
