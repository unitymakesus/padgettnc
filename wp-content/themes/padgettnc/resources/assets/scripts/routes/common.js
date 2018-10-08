export default {
  init() {
    $('.staff-card-container').click(function(){
      $(this).find('.staff-card').toggleClass('flipped');
    })

    $(".nav-primary").sticky({topSpacing:0});

    $('.menu-main-menu-container .menu-item').each(function() {
      if ($(this).hasClass('current-page-ancestor')) {
        $(this).children('a').attr('aria-current', 'true');
      }
      if ($(this).hasClass('current-menu-item')) {
        $(this).children('a').attr('aria-current', 'page');
      }
    });
  },
  finalize() {
    const mDown = window.matchMedia( "(max-width: 992px)" );

    // Show mobile nav
    function showMobileNav() {
      $('.navbar-menu').css('display', 'block');
      $('body').addClass('mobilenav-active');
      $('#menu-trigger + label i').attr('aria-label', 'Hide navigation menu');

      // Enable focus of nav items using tabindex
      $('.navbar-menu').each(function() {
        var el = $(this);
        $('a', el).attr('tabindex', '0');
      });
    }

    // Hide mobile nav
    function hideMobileNav() {
      $('.navbar-menu').css('display', 'none');
      $('body').removeClass('mobilenav-active');
      $('#menu-trigger + label i').attr('aria-label', 'Show navigation menu');

      // Disable focus of nav items using tabindex
      $('.navbar-menu').each(function() {
        var el = $(this);
        $('a', el).attr('tabindex', '-1');
      });
    }

    // Toggle mobile nav
    $('#menu-trigger').on('change focusout', function() {
      if ($(this).prop('checked')) {
        showMobileNav();
      } else {
        hideMobileNav();
      }
    });

    // Only show mobile nav if an element inside is receiving focus
    $('.navbar-menu').each(function () {
      var el = $(this);

      $('a', el).on('focus', function() {
        $(this).parents('li').addClass('hover');
      }).on('focusout', function() {
        $(this).parents('li').removeClass('hover');

        if (mDown.matches) {
          setTimeout(function () {
            if ($(':focus').closest('#menu-primary-menu').length == 0) {
              $('#menu-trigger').prop('checked', false);
              hideMobileNav();
            }
          }, 200);
        }
      });
    });

    // Initialzie Modaal
    $('.modaal').modaal({
      before_open: function() {
        $(event.path[0]).addClass('keep-open');
      },
      before_close: function() {
        $('.modaal .hover-pic').removeClass('keep-open');
      },
    });
  },
};
