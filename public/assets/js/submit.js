const submitButton = $('#submit-btn');
$(document).ready(function () {
  submitButton.click((event) => {
    event.preventDefault();
    // $.post({
    //   url: '/submit/review',
    //   data: formData,
    //   processData: false,
    //   contentType: false,
    // }).then(() => {
    //   console.log('running post request');
    //   // console.log(res);
    // }).catch((err) => {
    //   if (err) {
    //     console.log('Error on post:', err);
    //   }
    // })
  });
});
