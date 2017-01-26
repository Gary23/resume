/**
 * Created by ypj on 2017/1/26.
 */
$('#fullpage').fullpage({
    afterLoad: function (anchorLink, index) {
        $('.section').removeClass('current');

        $('#top').removeClass('current');

        setTimeout(function () {
            $('.section').eq(index - 1).addClass('current');
        }, 100);

        if (index == 1) {
            $('#top').removeClass('secondcurrent');
            $('#top').removeClass('thirdcurrent');
            $('#top').addClass('firstcurrent');
        }
        if (index == 2) {
            $('#top').removeClass('firstcurrent');
            $('#top').removeClass('thirdcurrent');
            $('#top').addClass('secondcurrent');
        }
        if (index == 3) {
            $('#top').removeClass('firstcurrent');
            $('#top').removeClass('secondcurrent');
            $('#top').addClass('thirdcurrent');
        }
    },
    navigation: true,
    navigationPosition: 'right',
    navigationColor: '#000'
});