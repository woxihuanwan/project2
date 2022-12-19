/**
 * 产品详情列表交互js
 */
$(function() {
    $('.ez-banner').tyslide({
            boxh: 460, //盒子的高度
            w: 1200, //盒子的宽度
            h: 455, //图片的高度
            isShow: true, //是否显示控制器
            isShowBtn: true, //是否显示左右按钮
            controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 21, //控制按钮宽度
            controlsH: 21, //控制按钮高度
            radius: 8, //控制按钮圆角度数
            controlsColor: "gray", //普通控制按钮的颜色
            controlsCurrentColor: "#ff6700", //当前控制按钮的颜色

        })
        // 轮播切换 1.默认2个轮播隐藏
    $('.ez-banner:gt(0)').hide();
    //tab绑定事件
    $('.ez-title ul li').on('mouseenter', function() {
        //导航切换效果
        $(this).addClass('active').siblings('li').removeClass('active');
        //获取索引
        var index = $(this).index();
        //显示对应内容
        $('.ez-banner').eq(index).show().siblings().hide()
    })


    // 换一批
    // // 上下
    // var index = 0; //先写
    // $('.change').click(function() {
    //     //定一个索引
    //     //自增
    //     index++;
    //     //边界判断
    //     index = index > 2 ? 0 : index;
    //     //动画效果 让inner-box运动
    //     $('.inner-box').animate({
    //         top: -index * 416
    //     })
    // })

    // 左右滑动的版本
    var index = 0; //先写
    $('.change').click(function() {
        //定一个索引
        //自增
        index++;
        //边界判断
        // index = index > 3 ? 0 : index;
        //动画效果 让inner-box运动
        $('.inner-box').animate({
            left: -index * 1200
        }, function() {
            if (index === 3) {
                index = 0;
                $('.inner-box').css('left', 0)
            }
        })
    })
})