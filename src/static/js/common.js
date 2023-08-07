AOS.init({disable: 'mobile'});

$(window).on('scroll', function() {
    var $this = $(this),
        $hero = $('.hero'),
        $header = $('.header');
    if($('.hero').length > 0){
        if ($this.scrollTop() > $hero.height() - 100) {
            $header.addClass('before-scroll-nav');
        }else{
            $header.removeClass('before-scroll-nav');
        }
        if ($this.scrollTop() > $hero.height() + 50) {
            $header.addClass('scroll-nav');
        }
        else{
            $header.removeClass('scroll-nav');
        }
    }
});

if($('.hero').length > 0){}else{
    $('.header').addClass('page-nav');
}
$('.header-btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header').toggleClass('active');
    $('body').toggleClass('scroll');
});

var count;
$(".tab-item__list input").change(function() {
    count = 0;
    var table_abc = $(".tab-item__list input");
    for (var i = 0; i < table_abc.length ; ++i) {
        if ($(table_abc[i]).prop('checked')) {
            var plusTen = $(table_abc[i]).val() * 10;
            count += parseInt(plusTen, 10);
        }
    }
    var countLast = count/ 10;
    console.log();
    if(countLast < 35){
        $('.progress-item__line span').css('width', countLast+'%')

    }else{
        $('.progress-item__line span').css('width', '35%')
    }

});
$('.btn-blue').on('click', function () {
    $('.form-tab__item.active').removeClass('active').next().addClass('active');
    $('.btn-gray').removeClass('disabled').next().text('Send a request').attr('type', 'submit');
    $('.progress-item__line').addClass('check');
});
$('.btn-gray').on('click', function () {
    $('.form-tab__item.active').removeClass('active').prev().addClass('active');
    $(this).addClass('disabled').next().text('Next').attr('type', 'button');
    $('.progress-item__line').removeClass('check');
});
// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='contact']").validate({
        // Specify validation rules
        rules: {
            ContactName: "required",
            informed: "required",
            protected: "required",
            email: {
                required: true,
                email: true
            }
        },
        // Specify validation error messages
        messages: {
            informed: "Please Check",
            protected: "Please Check",
            ContactName: "Please enter your Name",
            email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});