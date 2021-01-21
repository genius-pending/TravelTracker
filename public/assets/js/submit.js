const submitButton = $('#submit-btn');
const nameError = $('#name-error');
const cityError = $('#city-error');
const reviewError = $('#review-error');
let picture;

// Check for input presence
const validateInput = (userName, cityName, cityReview) => {
  if (userName.trim().length < 1) {
    nameError.css({ opacity: 1 });
    $('#user-name').addClass('is-invalid');
    return false;
  }
  if (cityName.trim().length < 1) {
    cityError.css({ opacity: 1 });
    $('#city-name').addClass('is-invalid');
    return false;
  }
  if (cityReview.trim().length < 100) {
    reviewError.css({ opacity: 1 });
    $('#city-review').addClass('is-invalid');
    return false;
  }
  return true;
};

// Remove error messages from submit form
const removeErrors = () => {
  nameError.css({ opacity: 0 });
  cityError.css({ opacity: 0 });
  reviewError.css({ opacity: 0 });
  $('#user-name').removeClass('is-invalid');
  $('#city-name').removeClass('is-invalid');
  $('#city-review').removeClass('is-invalid');
};

$(document).ready(function () {
  submitButton.click((event) => {
    event.preventDefault();
    removeErrors();
    const username = $('#user-name').val();
    const cityname = $('#city-name').val();
    const review = $('#city-review').val();
    const input = validateInput(username, cityname, review);
    const formData = {
      username,
      cityname,
      review,
      picture
    };
    // console.log(`
    // input: ${input},
    // user name: ${username},
    // city name: ${cityname},
    // review: ${review},
    // pictureURL: ${pictureURL}
    // `);
    if (input) {
      $.post({
        url: '/submit',
        data: formData,
        dataType: 'json',
      }).then(() => {
        console.log('Im here');
        document.location.href = 'http://localhost:3000/browse';
      }).catch((err) => {
        if (err) {
          console.log('Error on post:', err);
        }
      });
    }
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
      picture = result.info.url;
      $('.picture-upload').append(`
      <div class="card uploaded-card" style="width: 10rem;">
        <img src="${picture}" class="card-img-top" alt="Uploaded-picture-icon">
        <div class="card-body">
          <p class="card-text">Uploaded picture</p>
          <a href="#" id="remove-uploaded" class="card-link">Remove</a>
        </div>
      </div>`);
    }
  }
);

// Click event for removing added image
$('body').on('click', '#remove-uploaded', function() {
  $('.uploaded-card').remove();
});

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