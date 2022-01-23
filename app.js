function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '100%' ,
        triggerElement:'.half-one',
        triggerHook:0
    })
    .setPin('.half-one')
    // .addIndicators()
    .addTo(controller);
    
}

splitScroll();