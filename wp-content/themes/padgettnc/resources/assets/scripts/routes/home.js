export default {
  init() {
    // JavaScript to be fired on the home page
  },
  finalize() {
    $('.diamond-services').click(function(){
      $(this).removeClass('not-active');
      $('.diamond-services').not(this).addClass('not-active');

      // if($(this).next('.hidden').hasClass('main-diamond-is-active')) {
      //   $(this).next('.hidden').removeClass('main-diamond-is-active');
      // }
      // $(this).next('.hidden').addClass('main-diamond-is-active');
    });

    $(document).click(function(){
      if($(event.target).closest('.diamond').length==0) {
        $('.diamond').removeClass('not-active');
      }
    })
  },
};
