const submitButton = $('#submitButton');
//const photoFile = $('#photoFile');
let formData;
submitButton.click((event) => {
  console.log('clicking');
  event.preventDefault();
  const cityText = $('#citytext')
if(cityText.val().trim().length < 1){
console.log('Please enter a value');
}

const reviewText = $('#reviewtext')
if(reviewText.val().trim().length < 1){
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