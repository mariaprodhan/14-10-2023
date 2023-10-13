$('.banner-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows: false
});
new VenoBox({
    selector: ".my-video-links"
});
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})

$('.good').counterUp({
    delay: 10,
    time: 1000
});

$('.test').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false
});

