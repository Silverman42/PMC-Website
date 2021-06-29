(function ($) {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });


    const serviceType = $('#serviceType');
    const currentYear = new Date().getFullYear()
    $('#copyDate').text(currentYear);
    const dataBase= [
        'trading',
        'betting',
        'telecomms'
    ]
    var state = 1
    const changeContent = ()=>{
        serviceType.text(dataBase[state - 1])
        if(state === dataBase.length){
            return state = 1
        }
        state += 1
    }
    const rotateContent = () => setTimeout(()=>{
        changeContent()
        console.log(state)
        rotateContent()
    },2000)

    rotateContent()

})(jQuery)