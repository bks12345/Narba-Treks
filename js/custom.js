$(function() {
  // ------------------------------------------------------- //
  // Multi Level dropdowns
  // ------------------------------------------------------ //
  $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    $(this).siblings().toggleClass("show");


    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });

  });
});



$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $(".header-top").addClass("newClass");
  } else {
    $(".header-top").removeClass("newClass");
  }     
  });
$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $(".color-menu").addClass("newClass1");
  } else {
    $(".color-menu").removeClass("newClass1");
  }     
  });
$('.carousel').carousel({
  interval: 3000,
  pause: "false"
})

         $('#customers-testimonials').owlCarousel({
              loop: true,
              center: true,
              items: 3,
              margin: 0,
              autoplay: true,
              dots:true,
              autoplayTimeout: 8500,
              smartSpeed: 450,
              responsive: {
                0: {
                  items: 1
                },
                768: {
                  items: 2
                },
                1170: {
                  items: 3
                }
              }
          });


$('.deals-slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 3,        
        autoplay: true,
        autoplayTimeout:3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            770: {
                items: 2,
                nav: false,
                loop: true
            },
           
            1000: {
                items: 3,
                nav: false,
                loop: true
            }
        }

    })

$('.trend-slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 3,        
        autoplay: true,
        autoplayTimeout:3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            770: {
                items: 2,
                nav: false,
                loop: true
            },
           
            1000: {
                items: 3,
                nav: false,
                loop: true
            }
        }

    })
$('.tours-slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 4,        
        autoplay: true,
        autoplayTimeout:5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: true
            },
            770: {
                items: 3,
                nav: false,
                loop: true
            },
           
            1000: {
                items: 4,
                nav: false,
                loop: true
            }
        }

    })
$('.client-slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 3,        
        autoplay: true,
        autoplayTimeout:5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            770: {
                items: 2,
                nav: false,
                loop: true
            },
           
            1000: {
                items: 3,
                nav: false,
                loop: true
            }
        }

    })

    $('.activity-slider').owlCarousel({
    items:1,
    loop:true,
    nav: false,
    margin:10,
    animateOut: 'fadeOut',
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    
});

    $('.banner-slider').owlCarousel({
    loop:true,
    dots:false,
    items:1,
    nav:true,
    margin:10,
    mouseDrag:false,
    autoplay:true,
    animateOut: 'fade',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.testimonal-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 2,        
        autoplay: true,
        autoplayTimeout:90000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
                       
            1000: {
                items: 2,
                nav: false,
                loop: true
            }
        }

    })
