$(document).ready(function () {
    $("#hotel-review").click(function () {
        if ($("#hotel-review-input").hasClass("d-none")) {
            $("#hotel-review-input").removeClass("d-none");
        } else {
            $("#hotel-review-input").addClass("d-none");
        }
    });
});

$(document).ready(function () {
    $("#restaurant-review").click(function () {
        if ($("#restaurant-review-input").hasClass("d-none")) {
            $("#restaurant-review-input").removeClass("d-none");
        } else {
            $("#restaurant-review-input").addClass("d-none");
        }
    });
});
