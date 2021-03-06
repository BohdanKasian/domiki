//main page slider
$('.mane-page-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    variableWidth: true,
});

//main page slider_houses
$('.index_slider_houses').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 425,
            settings: {
                centerMode: true,
                slidesToScroll: 1,
            }
        }]
});

//main page slider_gallery
$('.index_slider_gallery').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 425,
            settings: {
                centerMode: true,
                slidesToScroll: 1,
            }
        }]
});

//galleryDetail slider
$('.gallery-detail-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gallery-detail-slider-nav',
    dots: false
});
$('.gallery-detail-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.gallery-detail-slider-for',
    focusOnSelect: true,
    arrows: true,
    dots: true
});

//houses detail slider
$('.houses-detail-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.houses-detail-slider-nav',
    dots: false,
});
$('.houses-detail-slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.houses-detail-slider-for',
    focusOnSelect: true,
    arrows: false,
    dots: true
});

//page houses slider
$('.slider_houses').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    arrows: false,
});

// slider_reviews_mobile
$('.slick-reviews-js').slick({
    dots: true,
    arrows: false,
});


// slider_mobile_page_price
$('.slider_mobile_page_price').slick({
    dots: true,
    arrows: false,
});
//reviews pege FadeIn
$("#show-js").click(function () {
    $("#showMore-js").toggleClass ("dd__none");
});

$(".button_phone_dd").click(function () {
    $("#menu-dd-js").toggleClass ("menu_dd");
});