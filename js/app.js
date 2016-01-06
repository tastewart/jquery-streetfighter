$(document).ready(function () {
    /*  Default status - Still img displays, all others are hidden */
    $('.ryu-action').hide();
    $('.ryu-still').show();


    /* Upon mouse hover - display Ready img */
    $('.ryu').mouseenter(function () {
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    });

    $('.ryu').mouseleave(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    });

    $('.ryu').mousedown(function () {
        playHadouken();
        $('.ryu-action').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate({
                'left': '900px'
            },
            500,
            function () {
                $(this).stop();
                $(this).hide();
                $(this).css('left', '600px');
            }
        )
    });

    $('.ryu').mouseup(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    });

    $(document).keydown(function (key) {
        if (key.keyCode == 88) {
            playCool();
            $('.ryu-action').hide();
            $('.ryu-cool').show();
        }
    });

    $(document).keyup(function (key) {
        if (key.keyCode == 88) {
            $('.ryu-action').hide();
            $('.ryu-still').show();
            $('#cool')[0].pause();
        }
    });





}); /* Close Document Ready  */

/* Play Sound */

var hadoukenSound = false;

function playHadouken() {
    hadoukenSound = !hadoukenSound;
    if (hadoukenSound) {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
}

var coolSound = false;

function playCool() {
    coolSound = !coolSound;
    if (coolSound) {
        $('#cool')[0].play();
    }
}
