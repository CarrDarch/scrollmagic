
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
    var tweenLocationFirst = new TweenMax.to('#location', 1.5, { left: '25%', ease: Back.easeOut }, 0.15);

    var tweenlOCATIONoPACITY = new TweenMax.staggerFromTo('#location', 2.5, { opacity: 0.4 }, { opacity: 0.8, ease: Back.easeOut }, 0.15);

    var firstScene = new ScrollMagic.Scene({
        triggerElement: '#container1',
        
    })
        .setTween(tweenLocationFirst)
        .addIndicators()
        .addTo(controller);

    var tweenBedrooms = new TweenMax.to('#bedrooms', 3.5, { right: '25%', ease: Back.easeOut }, 0.15);

    var tweenNumbers = new TweenMax.staggerFromTo('.number', 15, { opacity: 0 }, { opacity: 1, ease: Back.easeOut }, 0.15);

    var tweenPropertyShop = new TweenMax.to('.property-shop', 2, {opacity: 1}, 0.15);

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
    

    // var tweenBlockToRed = new TweenMax.to('#block', 1.5, {
    //     backgroundColor: 'red',
    // });

    // var tweenBlockToBlack = new TweenMax.to('#block', 1.5, {
    //     backgroundColor: 'black',
    // });

    // var firstScene = new ScrollMagic.Scene({
    //     triggerElement: '#container'
    // })
    //     .setTween(tweenBlockToRed)
    //     .setPin('#block')
    //     .addIndicators()
    //     .addTo(controller);

    // var secondScene = new ScrollMagic.Scene({
    //     triggerElement: '#container2'
    // })
    //     .setTween(tweenBlockToBlack)
    //     .addIndicators()
    //     .addTo(controller);

    
});