const submitButton = $('#submit-btn');
const nameError = $('#name-error');
const cityError = $('#city-error');
const reviewError = $('#review-error');
let picture = 'https://via.placeholder.com/600';

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
  if (cityReview.trim().length < 100 || cityReview.trim().length > 500) {
    reviewError.css({ opacity: 1 });
    $('#city-review').addClass('is-invalid');
    return false;
  }
  return true;
};

const checkForEmptyText = (text) => {
  return (text.trim().length < 1) ? ('No informations provided') : (text.trim());
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
    const hotel = checkForEmptyText($('#hotel-name-text').val());
    const hotelrev = checkForEmptyText($('#hotel-review-text').val());
    const restaurant = checkForEmptyText($('#restaurant-name-text').val());
    const restaurantrev = checkForEmptyText($('#restaurant-review-text').val());
    const input = validateInput(username, cityname, review);
    const formData = {
      username,
      cityname,
      review,
      picture,
      hotel,
      hotelrev,
      restaurant,
      restaurantrev
    };
    console.log(formData);
    if (input) {
      $.ajax({
        method: 'POST',
        url: '/submit',
        data: formData,
        dataType: 'json'
      }).done(() => {
        window.location.href = '/browse';
      }).fail((err) => {
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
    // When cloudinary respond
    if (!error && result && result.event === 'success') {
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
  picture = 'https://via.placeholder.com/600';
});

// Cloudinary widget
document.getElementById('upload_widget').addEventListener(
  'click',
  function () {
    console.log('upload clicked');
    myWidget.open();
  },
  false
);