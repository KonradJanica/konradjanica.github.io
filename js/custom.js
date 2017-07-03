// Custom Script
// Developed by: Samson.Onna
var customScripts = {
    profile: function () {
        // portfolio
        if ($('.isotopeWrapper').length) {
            var $container = $('.isotopeWrapper');
            var $resize = $('.isotopeWrapper').attr('id');
            // initialize isotope
            $container.isotope({
                itemSelector: '.isotopeItem',
                resizable: false, // disable normal resizing
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
            $("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
            // $('.navbar-inverse').on('click', 'li a', function () {\
                // $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');\
            // });\
            $('#filter a').click(function () {
                $('#filter a').removeClass('current');
                $('#filter a').attr("style", "color: #547980");
                $(this).addClass('current');
                $(this).attr("style", "color: #FFF");
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 1000,
                        easing: 'easeOutQuart',
                        queue: false
                    }
                });

                // Add animation to all boxes
                $(".portfolio-desc").each(function () {
                    $(this).addClass('portfolio-item-animation');
                    $(this).removeClass('portfolio-item-animation-reverse');
                });
                $(".folio-info").each(function () {
                    $(this).addClass('folio-info-animation');
                    $(this).removeClass('folio-info-animation-reverse');
                });

                return false;
            });
            var currentNavColor = "#547980";
            $('#nav-toggle').click(function() {
              currentNavColor = currentNavColor == "#547980" ? "#9DE0AD" : "#547980";
              $(this).attr("style", "background-color: " + currentNavColor);
            });
            $(window).smartresize(function () {
                                  $container.isotope({
                                                     // update columnWidth to a percentage of container width
                                                     masonry: {
                                                       columnWidth: $container.width() / $resize
                                                     }
                                  });
            });
        }
    },
    fancybox: function () {
      // fancybox
      $(".fancybox").fancybox();
    },
    onePageNav: function () {
      
      $('#mainNav').onePageNav({
                               currentClass: 'active',
                               changeHash: false,
                               scrollSpeed: 950,
                               scrollThreshold: 0.2,
                               filter: '',
                               easing: 'swing',
                               begin: function () {
                                 //I get fired when the animation is starting
                               },
                               end: function () {
                                 //I get fired when the animation is ending
                               },
                               scrollChange: function ($currentListItem) {
                                 //I get fired when you enter a section and I pass the list item of the section
                               }
      });
    },
    slider: function () {
      $('#da-slider').cslider({
                              autoplay: true,
                              bgincrement: 0
      });
    },
    owlSlider: function () {
      var owl = $("#owl-demo");
      owl.owlCarousel();
      // Custom Navigation Events
      $(".next").click(function () {
                       owl.trigger('owl.next');
      })
      $(".prev").click(function () {
                       owl.trigger('owl.prev');
      })
    },
    bannerHeight: function () {
      var bHeight = $(".banner-container").height();
      $('#da-slider').height(bHeight);
      $(window).resize(function () {
                       var bHeight = $(".banner-container").height();
                       $('#da-slider').height(bHeight);
      });
    },
    init: function () {
      customScripts.onePageNav();
      customScripts.profile();
      customScripts.fancybox();
      customScripts.slider();
      customScripts.owlSlider();
      customScripts.bannerHeight();
    }
}
$('document').ready(function () {
                    customScripts.init();

                    // Create cross browser requestAnimationFrame method:
                    window.requestAnimationFrame = window.requestAnimationFrame
                        || window.mozRequestAnimationFrame
                        || window.webkitRequestAnimationFrame
                        || window.msRequestAnimationFrame
                        || function(f){setTimeout(f, 1000/60)}

                    function parallaxbubbles(){
                        var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
                        var scrollamount = (scrolltop / (document.body.scrollHeight-window.innerHeight)) * 100 // get amount scrolled (in %)
                        document.getElementById('home-parlax').style.top = -scrolltop * 0.8 + 'px' // move bubble1 at 20% of scroll speed
                    }

                    window.addEventListener('scroll', function(){ // on page scroll
                        requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen repaint
                    }, false)
});
