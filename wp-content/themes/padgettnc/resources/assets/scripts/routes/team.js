export default {
  init() {
    $('.staff-card-container').click(function(){
      $(this).toggleClass('flipped');
    })
  },
  finalize() {
  },
};
