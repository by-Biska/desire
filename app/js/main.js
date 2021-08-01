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
