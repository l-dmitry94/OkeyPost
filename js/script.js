//Карусель табов
$(function () {
    $('.profit__tabs').owlCarousel({
        loop: false,
        nav: true,
        items: 6,
        dots: false,
        margin: 8,
        navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"]
    })
})


//Выбор таба
$(function () {
    $('.profit__tabs .tab').each(function () {
        $(this).on('click', function () {
            $('.profit__tabs .tab').removeClass('active');
            $(this).addClass('active');
        })
    })
})


// Карусель продуктов
$(function () {
    $('.profit__products').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: false,
        navText: ["<div class='product-prev'><img src='img/jacket.png'></div><img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'><div class='product-next'><img src='img/jacket.png'></div>"]
    })
})