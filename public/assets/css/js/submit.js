  const submitButton = $('#submitButton');
//const photoFile = $('#photoFile');
  let formData;
  submitButton.click((event) => {
  console.log('clicking');
  event.preventDefault();
  const cityText = $('#city-name-text');
  if (cityText.val().trim().length < 1) {
    console.log('Please enter a value');
  }
  const reviewText = $('#city-review-text');
  if (reviewText.val().trim().length < 1); {
    console.log('Please enter a value');
  }
  $.post({
    url: '/submit/review',
    data: formData,
    processData: false,
    contentType: false,
  }).then(() => {
    console.log('running post request');
    // console.log(res);
  });
});
