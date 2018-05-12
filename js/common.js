$(function() {

	// Custom JS

    //--- Header shadow

    $(function(){
        $(window).scroll(function() {
            if ($(window).width() >= 50) {
                if ($(this).scrollTop() >= 50) {
                    $('.navbar').addClass('shadow');
                }
                else {
                    $('.navbar').removeClass('shadow');
                }
            }
            else {
                $('.navbar').removeClass('shadow');
            }
        });
    });

    //--- Language switch position

    if($(window).width() < 1025) {
        $('.language-switch').insertAfter('.navbar-nav');
    } else {
        $('.language-switch').insertAfter('.navbar-collapse');
    }

    $(window).resize(function() {
        if($(window).width() < 1025) {
            $('.language-switch').insertAfter('.navbar-nav');
        } else {
            $('.language-switch').insertAfter('.navbar-collapse');
        }
    });

    //--- Hamburger active
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('#navbarNavDropdown').slideToggle(200);
    });

    //---Slider-main-gallery

    //custom function showing current slide
    var $status = $('.main-page .current');
    var $all = $('.main-page .all');
    var $slickElement = $('.slider-main-gallery');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i);
        $all.text('/' + slick.slideCount);

    });
    $('.slider-main-gallery').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        dots: false,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a>'+i+'</a>';
        }
    });

    //---Slider-upcoming

    //custom function showing current slide
    var $status = $('.upcoming .current');
    var $all = $('.upcoming .all');
    var $slickElement = $('.slider-upcoming');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i);
        $all.text('/' + slick.slideCount);

    });
    $('.slider-upcoming').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        dots: false,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a>'+i+'</a>';
        }
    });


    //---Slider-previous

    //custom function showing current slide
    var $status = $('.previous .current');
    var $all = $('.previous .all');
    var $slickElement = $('.slider-previous');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i);
        $all.text('/' + slick.slideCount);

    });
    $('.slider-previous').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        dots: false,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a>'+i+'</a>';
        }
    });


    //------Modal-window-1

    $('main .item a').click( function(event){
        event.preventDefault();
        $(this).closest('.item').find('.overlay_item').fadeIn(400,
            function(){
                $(this).closest('.item').find('.modal_item')
                    .css('display', 'flex')
                    .css("margin-top", "200px")
                    .animate({opacity: 1, top: '0'}, 200);
                //---Slider-gallery

                //custom function showing current slide
                var $status_2 = $('.artwork .current');
                var $all_2 = $('.artwork .all');
                var $slickElement = $('.slider-gallery');

                $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

                    var i = (currentSlide ? currentSlide : 0) + 1;
                    $status_2.text(i);
                    $all_2.text('/' + slick.slideCount);
                });

                $(this).closest('.item').find('.slider-gallery').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    fade: true,
                    cssEase: 'linear',
                    dots: false,
                    adaptiveHeight: true,
                    customPaging : function(slider, i) {
                        var thumb = $(slider.$slides[i]).data();
                        return '<a>'+i+'</a>';
                    }
                });
            });
    });
    $('.overlay_item').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.modal_item')).length) $(this).closest('.item').find('.modal_item').animate({opacity: 0, top: '15%'}, 200,
            function(){
                $(this).css('display', 'none');
                $(this).closest('.item').find('.overlay_item').fadeOut(400);
                $(this).closest('.item').find('.slider-gallery').slick('unslick');

            }
        );
        if ($target.hasClass('close')) $(this).closest('.item').find('.modal_item').animate({opacity: 0, top: '15%'}, 200,
            function(){
                $(this).css('display', 'none');
                $('.overlay_item').fadeOut(400);
                $(this).closest('.item').find('.slider-gallery').slick('unslick');
            }
        );
    });


});
