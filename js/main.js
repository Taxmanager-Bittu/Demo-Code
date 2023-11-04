// Mobile Click Drop Down
$('.dropnav > a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
});


// toggle 
$(".nav-toggle").click(function() {
    $(this).toggleClass("on");
    $("nav").slideToggle();
});


// Sticy nav bar 
if ($(window).scrollTop() >= 300) {
    $('header').addClass('fixed-header');
} else {
    $('header').removeClass('fixed-header');

};


// Scroll Top
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scroll_To_Top').fadeIn();
    } else {
        $('.scroll_To_Top').fadeOut();
    }
});
$('.scroll_To_Top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 10);
    return false;
});

// Slider 
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheelControl: true,
    slidesPerView: 1,
    freeMode: true,
    freeModeSticky: true
});

// Product Slider Water Marks
setTimeout(function() {
    $('.warter-mark').addClass('loaded')
}, 500);

const circElements = document.querySelectorAll('.circ');
circElements.forEach(element => {
    const circleType = new CircleType(element);
    circleType.radius(2);
});