$(function () {
    // Next
    // 1 to 2
    $("#js-next-to-2").on('click', function () {
        $("#js-form-page-1").hide();
        $("#js-form-page-2").show();
    });

    // 2 to 3
    $("#js-next-to-3").on('click', function () {
        $("#js-form-page-2").fadeOut('slow');
        $("#js-form-page-3").fadeIn('slow');
    });

    // 3 to 4
    $("#js-next-to-4").on('click', function () {
        $("#js-form-page-3").hide('slow');
        $("#js-form-page-4").show('slow');
    });

    // Previous
    // 2 to 1
    $("#js-previous-to-1").on('click', function () {
        $("#js-form-page-2").hide();
        $("#js-form-page-1").show();
    });

    // 3 to 2
    $("#js-previous-to-2").on('click', function () {
        $("#js-form-page-3").hide();
        $("#js-form-page-2").show();
    });

    // 4 to 3
    $("#js-previous-to-3").on('click', function () {
        $("#js-form-page-4").hide();
        $("#js-form-page-3").show();
    });

});