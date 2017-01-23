/**
 * Created by ypj on 2017/1/16.
 */
$(function () {

    $('#demo .demo_bg').css({
        'width': $('#demo').css('width'),
        'height': $('#demo').css('height')
    })

    $('#demo .demo_bg').starfield()

    slider();


    // demo页面的轮播图
    function slider() {
        // 初始化变量
        $('#demo ul').append($('#demo ul li').eq(0).clone(true));
        var lis = $('#demo ul li');
        var ul = $('#demo ul');
        var pic = 0;
        var timer = null;

        // 右箭头移动
        $('#demo .arrow_right').on('click', function () {
            leftMove();
        })
        // 左箭头移动
        $('#demo .arrow_left').on('click', function () {
            rightMove();
        })
        // 自动播放
        timer = setInterval(function () {
            leftMove();
        }, 4000)

        // 移入鼠标停止轮播,移出开始自动轮播
        $('#demo .slider').on('mouseover', function () {
            clearInterval(timer);
        })

        $('#demo .slider').on('mouseout', function () {
            timer = setInterval(function () {
                leftMove();
            }, 4000)
        })


        // 轮播下一张的函数
        function leftMove() {
            if (pic == lis.length - 1) {
                ul.css('left', '0')
                pic = 0;
            }
            pic++;
            ul.stop(true, false).animate({left: (pic * -1000) + 'px'}, 500, 'linear');
        }

        // 轮播上一张的函数
        function rightMove() {
            if (pic == 0) {
                ul.css('left', (lis.length - 1) * -1000 + 'px')
                pic = 4;
            }
            pic--;
            ul.stop(true, false).animate({left: (pic * -1000) + 'px'}, 500, 'linear');
        }
    }

})