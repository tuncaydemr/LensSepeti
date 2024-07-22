$(() => {
    $(".read-more").click(function() {

        $('#description3').slideToggle();
        $('#description3').css({
            display: 'block'
        });
    });

    $('img').mouseenter(function () {
        $(this).css({
            scale: '1.1',
            transition: '0.6s'
        });

        $('.logo').css({
            scale: '1'
        });
    });

    $('img').mouseleave(function () {
        $(this).css({
            scale: '1'
        });
    });

    $('#accordionExample20').click(() => {
        $('#collapseOne').removeClass('d-none');

        if ($('#arrowDown').hasClass('d-none')) {
            $('#arrowDown').removeClass('d-none');

            $('#arrowUp').addClass('d-none');
        } else {
            $('#arrowDown').addClass('d-none');

            $('#arrowUp').removeClass('d-none');
        }
    });


    $('.small-image').click(function() {
        let largeImage = $(this).data('large-image');
        $('.large-image').attr('src', largeImage);
    });


    $(".pagination li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });


    $('.reviews').click(function () {
        $(this).addClass("border-bottom-0").siblings().removeClass("border-bottom-0");
    });

    $('#information').css({
        background: '#EDEBE6',
        color: 'gray'
    });

    $('#information2').hide();
    
    $('#reviews').click(function () {
        $('#reviews2').show();
        $('#reviews').css({
            background: 'white'
        });

        $('#information2').hide();
        $('#information').css({
            background: '#EDEBE6',
            color: 'gray'
        });
    });

    $('#information').click(function () {
        $('#information2').show();
        $('#information').css({
            background: 'white'
        });

        $('#reviews2').hide();
        $('#reviews').css({
            background: '#EDEBE6',
            color: 'gray'
        });
    });


    $('.d-menu').hide();

    $('#contact-lenses').mouseenter(function () {
        $('#contact-lenses2').show();
        $('#eye-care2').hide();
        $('#solutions2').hide();
        $('#acuvue .dropend').removeClass('d-none');
        $('#contact-lenses2').mouseleave(function () {
            $(this).hide();
        });
    });

    $('#eye-care').mouseenter(function () {
        $('#eye-care2').show();
        $('#solutions2').hide();
        $('#contact-lenses2').hide();
        $('#dry-eye-treatments .dropend').removeClass('d-none');
        $('#eye-care2').mouseleave(function () {
            $(this).hide();
        });
    });

    $('#solutions').mouseenter(function () {
        $('#solutions2').show();
        $('#contact-lenses2').hide();
        $('#eye-care2').hide();
        $('#multi-purpose .dropend').removeClass('d-none');
        $('#solutions2').mouseleave(function () {
            $(this).hide();
        });
    });
    

    
    $('#contact-lenses2, #eye-care2, #solutions2').on('mouseenter', 'li', function () {
        $(this).find('a').first().addClass('border-end border-primary border-4')
    });
 
    $('#contact-lenses2, #eye-care2, #solutions2').on('mouseleave', 'li', function () {
        $(this).find('a').first().removeClass('border-end border-primary border-4')
    });



    $(document).on('mouseenter', '[id^=acuvue],[id^=air-optix],[id^=biofiniti],[id^=clariti],[id^=dailies],[id^=everclear],[id^=freshlook],[id^=daily-lenses],[id^=two-weekly],[id^=monthly-lenses],[id^=torics-for-astigmatism],[id^=dry-eye-treatments],[id^=eye-drops],[id^=eye-vitamins],[id^=hygiene-lid-care],[id^=eye-wash-sprays],[id^=multi-purpose],[id^=cleaners-salines],[id^=gas-permeable],[id^=travel-packs],[id^=hydrogen-peroxide]', function () {
        $(this).find('.dropend').removeClass('d-none');
    });
      
    $(document).on('mouseleave', '[id^=acuvue],[id^=air-optix],[id^=biofiniti],[id^=clariti],[id^=dailies],[id^=everclear],[id^=freshlook],[id^=daily-lenses],[id^=two-weekly],[id^=monthly-lenses],[id^=torics-for-astigmatism],[id^=dry-eye-treatments],[id^=eye-drops],[id^=eye-vitamins],[id^=hygiene-lid-care],[id^=eye-wash-sprays],[id^=multi-purpose],[id^=cleaners-salines],[id^=gas-permeable],[id^=travel-packs],[id^=hydrogen-peroxide]', function () {
        $(this).find('.dropend').addClass('d-none');
    });

    
});
