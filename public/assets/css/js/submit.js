const submitButton = ('submitBtn');
const photoFile = $('#photoFile');
let formData;
submitButton.click((event) => {
  console.log('clicking');
  event.preventDefault();
  formData = new formData();
  formData.append('image', photoFile);
});
$.post({
  url: '/submit/review',
  data: formData,
  processData: false,
  contentType: false,
}).then(() => {
  console.log('running post request');
  // console.log(res);
});