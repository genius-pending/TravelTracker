/*const submitButton = $('#submitButton');
//const photoFile = $('#photoFile');
let formData;
submitButton.click((event) => {
  console.log('clicking');
  event.preventDefault();
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

$(document).ready(function() {
  $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
});

const file = result.info.url;
*/
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'CLOUDINARY_CLOUD_NAME', 
  uploadPreset: 'my_preset'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
  }
)

document.getElementById("upload_widget").addEventListener("click", function(){
  console.log("upload clicked")
      myWidget.open();
    }, false);