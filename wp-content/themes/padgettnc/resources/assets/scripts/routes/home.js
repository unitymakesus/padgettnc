import hoverintent from '../autoload/hoverintent.min';

export default {
  init() {
    // JavaScript to be fired on the home page
  },
  finalize() {
    $('.diamond-service').each(function() {
      hoverintent(
        $(this)[0],
        function() {
          // Handler in
          let side = $(this).attr('data-side');
          $(this).removeClass('not-active').addClass('active');
          $('.diamond-service').not(this).addClass('not-active').removeClass('active');
          $('.diamond-cube').attr('data-show', side);
          $('.diamond-cube-default').removeClass('show');
        },
        function() {
          // Handler out
        }
      );
    });

    $('.our-services').on('mouseleave', function() {
      $('.diamond-service').removeClass('not-active').removeClass('active');
      $('.diamond-cube').removeAttr('data-show');
      $('.diamond-cube-default').addClass('show');
    });
  },
};
