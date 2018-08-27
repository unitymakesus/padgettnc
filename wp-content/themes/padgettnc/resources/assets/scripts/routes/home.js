export default {
  init() {
    // JavaScript to be fired on the home page
  },
  finalize() {
    $('.diamond-service').click(function(){
      let side = $(this).attr('data-side');
      $(this).removeClass('service-not-active');
      $('.diamond-service').not(this).addClass('service-not-active');
      $('.diamond-cube').attr('data-show', side);
      $('.diamond-cube-default').removeClass('show');
    });

    $(document).click(function(){
      if($(event.target).closest('.diamond').length==0) {
        $('.diamond-service').removeClass('service-not-active');
        $('.diamond-cube').removeAttr('data-show');
        $('.diamond-cube-default').addClass('show');
      }
    })
  },
};
