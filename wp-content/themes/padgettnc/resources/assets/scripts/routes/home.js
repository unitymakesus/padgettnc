export default {
  init() {
    // JavaScript to be fired on the home page
  },
  finalize() {
    $('.diamond-services').click(function(){
      $(this).removeClass('service-not-active');
      $('.diamond-services').not(this).addClass('service-not-active');

      $('.diamond-content-container').removeClass('service-active');
      $(this).next('.diamond-content-container').addClass('service-active');
    });

    $(document).click(function(){
      if($(event.target).closest('.diamond').length==0) {
        $('.diamond').removeClass('service-not-active');
        $('.diamond-content-container').removeClass('service-active');
      }
    })
  },
};
