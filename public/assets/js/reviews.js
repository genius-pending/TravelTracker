$(document).ready(function () {
  $('#hotel-review').click(function () {
    if ($('#hotel-review-input').hasClass('d-none')) {
      $('#hotel-review-input').removeClass('d-none');
    } else {
      $('#hotel-review-input').addClass('d-none');
    }
  });
});
