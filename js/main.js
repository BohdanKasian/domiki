//main page slider
$('.mane-page-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    variableWidth: true,
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
    dots: false
});

//houses detail slider
$('.houses-detail-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.houses-detail-slider-nav',
    dots: false
});
$('.houses-detail-slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.houses-detail-slider-for',
    focusOnSelect: true,
    arrows: false,
    dots: false
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

//reviews pege FadeIn
$("#show-js").click(function () {
    $("#showMore-js").toggleClass ("dd__none");
});