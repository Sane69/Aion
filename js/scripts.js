$(document).ready(function() {
    $('.slider').slick();

    $('.header__burger').click(function(e) {
        $('.header__burger, .header__mobile, .header').toggleClass('active');
        $('body').toggleClass('lock')
   })

    $('.footer__scroll').click(function(e) {
        var target = $(this.hash);
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000)
      })
    $('.footer__lang--link').click(function(e) {
        $('.footer__lang--hover').toggleClass('active')
        $('.footer__lang--arrow').toggleClass('active')
    })
    $('.header__auto--btn, .header__auto--btnMobile').click(function(e) {
        $('.login').addClass('active')
        $('.form__login').addClass('active')
    })
    $('.login').click(function(e) {
        $('.login').removeClass('active')
        $('.form__login').removeClass('active')
        $('.form__reg').removeClass('active')
    })
    $('#form-reg').click(function(e) {
        $('.form__login').removeClass('active')
        $('.form__reg').addClass('active')
    })
    $('#form-reg-log').click(function(e) {
        $('.form__reg').removeClass('active')
        $('.form__login').addClass('active')
    })
})