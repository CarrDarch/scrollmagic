
$(document).ready(function() {

    var duration = 1000;

    $('#block5,#block4,#block3,#block2,#block1').each(function (i) {
        $(this).delay(i * (duration / 2)).animate({
            height: '300px'
        }, duration, function() {
            $('.welcome-text').delay(duration * 2).fadeIn();
        }).queue(function() {
            $('.header-coming-soon').delay(duration * 3).fadeIn();
        });
        
    });

    var controller = new ScrollMagic.Controller();

    // var tweenLocationFirst = new TweenMax.staggerFromTo('#location', 1.5, { left: '-40%' }, {left: '35%', ease: Back.easeOut}, 0.15);

    $('#location').hide();
    var tweenLocationFirst = new TweenMax.to('#location', 1.5, {
        display: 'block',
        left: '25%', 
        ease: Back.easeOut 
    }, 0.15);

    var tweenLocation = new TweenMax.staggerFromTo('#location', 2.5, { opacity: 0.4 }, { opacity: 0.8, ease: Back.easeOut }, 0.15);

    var firstScene = new ScrollMagic.Scene({
        triggerElement: '#container1',
        
    })
        .setTween(tweenLocationFirst)
        .addIndicators()
        .addTo(controller);

    var tweenBedrooms = new TweenMax.to('#bedrooms', 3.5, { right: '25%', ease: Back.easeOut }, 0.15);

    var tweenNumbers = new TweenMax.staggerFromTo('.number', 15, { opacity: 0 }, { opacity: 1, ease: Back.easeOut }, 0.15);

    var tweenPropertyShop = new TweenMax.to('#property-shop1', 2, {opacity: 1}, 0.15);

    var secondScene = new ScrollMagic.Scene({
        triggerElement: '#container2',

    })
        .setTween(tweenBedrooms)
        .addIndicators()
        .addTo(controller);

    var numbersScene = new ScrollMagic.Scene({
        triggerElement: '#container2',

    })
        .setTween(tweenNumbers)
        .addIndicators()
        .addTo(controller);

    var propertyShopScene = new ScrollMagic.Scene({
        triggerElement: '#container2'
    })
        .setTween(tweenPropertyShop)
        .addIndicators()
        .addTo(controller);

    var galleryTween = new TweenMax.to('.trapezium', 1, { className: "+=end"});

    var galleryScene = new ScrollMagic.Scene({
        triggerElement: '#container3',
        duration: 500,
        
    })
        .setTween(galleryTween)
        .addIndicators()
        .addTo(controller);

    var tweenPropertyShop2 = TweenMax.fromTo('#property-shop2', 1, {opacity: 0, right: '-100px'}, {opacity: 1, right: '50px', top: '40px'}, 1.5);

    var propertyShop2Scene = new ScrollMagic.Scene({
        triggerElement: '#container4'
    })
        .setTween(tweenPropertyShop2)
        .addIndicators()
        .addTo(controller);

    var tweenLocationInfo = TweenMax.staggerFromTo('#location-info', 4, {marginTop: '250px'}, {marginTop: 0, ease: Back.easeOut}, 3.5);

    var locationScene = new ScrollMagic.Scene({
        triggerElement: '#container4',
    })
        .setTween(tweenLocationInfo)
        .addIndicators()
        .addTo(controller);


    var tweenPropertyShop3 = TweenMax.fromTo('#property-shop3', 1, { opacity: 0, left: '-100px' }, { opacity: 1, left: '50px', bottom: '40px' }, 1.5);

    var propertyShop3Scene = new ScrollMagic.Scene({
        triggerElement: '#container5',
    })
        .setTween(tweenPropertyShop3)
        .addIndicators()
        .addTo(controller);

    var tweenAreaInfo = TweenMax.fromTo('#area-info', 2.5, { opacity: 0, marginTop: '200px' }, { opacity: 1, marginTop: 0, ease: Back.easeOut }, 0.15);

    var areaScene = new ScrollMagic.Scene({
        triggerElement: '#container5',
    })
        .setTween(tweenAreaInfo)
        .addIndicators()
        .addTo(controller);

    var amenitiesTween = new TweenMax.to('.amenities-wrapper', 1, { className: "+=end" });

    var amenitiesScene = new ScrollMagic.Scene({
        triggerElement: '#container6',
        duration: 500,

    })
        .setTween(amenitiesTween)
        .addIndicators()
        .addTo(controller);

    var transportTween = new TweenMax.to('.transport-info', 3, { className: '+=fadeInUp' });
    var transportTitleTween = new TweenMax.staggerFromTo('#transport-title', 2, {marginLeft: '-400px'}, {marginLeft: '-40px'}, 0.15);
    //var transportInfoTween = new TweenMax.staggerFromTo('#transport-info', 2, { marginBottom: '-100px' }, { marginLeft: 0 }, 0.15);

    var transportTitleScene = new ScrollMagic.Scene({
        triggerElement: '#container6',
        duration: 600,

    })
        .setTween(transportTitleTween)
        .addIndicators()
        .addTo(controller);

    var transportInfoScene = new ScrollMagic.Scene({
        triggerElement: '#transporttrigger',

    })
        .setTween(transportTween)
        .addIndicators()
        .addTo(controller);

    
});