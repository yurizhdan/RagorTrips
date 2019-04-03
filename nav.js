$( document ).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.move-up').fadeIn()
        } else {
            $('.move-up').fadeOut()
        }
    })

    $('.move-up').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 800, 'easeInQuad')
    })

    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        scrollEasing: "easeInOutQuint",
        scrollSpeed: 2000
    });

})