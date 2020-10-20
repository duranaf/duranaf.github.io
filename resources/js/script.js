$(document).ready(function () {

    /*For the sticky navigation*/
    $('.js--section-about').waypoint(function(direction) {
      if(direction == "down") {
          $('nav').addClass('sticky')
      }
      else {
          $('nav').removeClass('sticky')
      }
  }, {
      offset: '60px;'
  });

    /*Scroll on buttons*/
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    })

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000)
    });


    /* Navigation scroll */
    $(function() {
        $('a[href*=\\#]:not([href=\\#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* Scroll animation */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').hover(function (direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });


    /* Mobile navigation*/
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--menu-icon');

        nav.slideToggle(200);
        // if (icon.attr('menu-outline')) {
        //     icon.addClass('close-outline');
        //     icon.removeAttr('menu-outline');
        // }
        // else {
        //     icon.addClass('menu-outline');
        //     icon.removeAttr('menu-outline');
        //     icon.removeAttr('close-outline');
        // }
        icon.removeAttr("name");
    });


    $(function(){
        $(".aaa").on({
            mouseover:function(){
                $(this).css({
                    left:(Math.random()*200)+"px",
                    top:(Math.random()*200)+"px",
                });
            }
        });
    });
});