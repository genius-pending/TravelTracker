const submitButton = $('#submit-btn');
let pictureURL;
$(document).ready(function () {
  submitButton.click((event) => {
    event.preventDefault();
    const userName = $('#user-name').val();
    const cityName = $('#city-name').val();
    const cityReview = $('#city-review').val();
    console.log(`
    user name: ${userName},
    city name: ${cityName},
    review: ${cityReview},
    pictureURL: ${pictureURL}
    `);
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

// Cloudinary
let myWidget = cloudinary.createUploadWidget(
  {
    cloudName: 'phase2projectbirmingham',
    uploadPreset: 'xuimcgyf',
  },
  (error, result) => {
    // Log whatever we have back from cloudinary after upload
    if (!error && result && result.event === 'success') {
      console.log('Done! Here is the image info: ', result.info);
      pictureURL = result.info.url;
    }
  }
);

//global variable for the city
var city = "";
//global variable for the review
var review = ""; 

var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: 'phase2projectbirmingham',
    uploadPreset: 'xuimcgyf',
  },
  (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log('Done! Here is the image info: ', result.info);
      $.post('/',{
        city: city,
        review: review,
        picture: result.info.url,
      }).then (() => {
        console.log('post request made')
      })
    }
  }
);
document.getElementById('upload_widget').addEventListener(
  'click',
  function () {
    console.log('upload clicked');
    myWidget.open();
  },
  false
);


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
  $('input.cloudinary-fileupload[type=file]').cloudinary_fileupload();
});

const file = result.info.url;
*/
/*var cropMyWidget;

var myCropWidget = cloudinary.createUploadWidget(
  {
    cloudName: 'phase2projectbirmingham',
    uploadPreset: 'ml_default',
    folder: 'widgetUpload',
    cropping: true,
  },
  (error, result) => {
    console.log(error, result);
  }
);*/


/*cloudinary.openUploadWidget(
  {
    cloudName: 'phase2projectbirmingham',
    uploadPreset: 'ml_default',
    sources: ['local', 'url', 'image_search'],
    googleApiKey: 'AIrFcR8hKiRo',
    searchBySites: ['all', 'cloudinary.com'],
    searchByRights: true,
  },
  (error, result) => {}
);
*/