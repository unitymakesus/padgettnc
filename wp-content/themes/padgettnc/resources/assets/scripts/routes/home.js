export default {
  init() {
    // JavaScript to be fired on the home page
  },
  finalize() {
    $('.visible').click(function(){
      $(this).removeClass('diamond-is-active');
      $('.diamond.visible').not(this).addClass('diamond-is-active');

      if($(this).next('.hidden').hasClass('main-diamond-is-active')) {
        $(this).next('.hidden').removeClass('main-diamond-is-active');
      }
      $(this).next('.hidden').addClass('main-diamond-is-active');
    });
  },
};
