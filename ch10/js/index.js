/**
 * 乐购商城首页js 
 * 2019-05-12 by 石公子
 */
// 当页面加载完毕
$(function() {
    /* 首页大图轮播 */
    $('#bannerInner').tyslide({
        boxh: 460, //盒子的高度
        w: 1000, //盒子的宽度
        h: 390, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 40, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 10, //控制按钮圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isShowNum: true //是否显示数字
    })

    /* 电子书轮播 */
    $('.ebooks-banner').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    })

    /* 电子书tab切换 */
    $('.ebooks-list').eq(1).hide();
    $('.ebooks-list').eq(2).hide();
    $('.ebooks-nav > li').mouseenter(function() {
        // 导航高亮颜色切换
        $(this).addClass('active').siblings('li').removeClass('active');
        // 获取索引
        var index = $(this).index();
        // 内容切换
        $('.ebooks-list').eq(index).show().siblings('.ebooks-list').hide();
    })

    /* 电子书手风琴 */
    $('.ebooks-rank-list > li').mouseenter(function() {
        // 所有兄弟： 详情隐藏 标题显示
        $(this).siblings().find('.desc').hide()
        $(this).siblings().find('.ebooks-title').show();

        // 自己： 详情显示 标题隐藏
        $(this).find('.desc').show();
        $(this).find('.ebooks-title').hide();
    })

    /* 服装轮播 */
    $('.clothes-banner').tyslide({
        boxh: 336, //盒子的高度
        w: 426, //盒子的宽度
        h: 336, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 4, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    })

    /* 服装tab切换 */
    $('.clothe .clothes-nav > li').mouseenter(function() {
        // 导航切换
        $(this).addClass('active').siblings('li').removeClass('active');
        // 获取索引
        var index = $(this).index();
        $('.clothes .clothes-content > .clothes-list').eq(index).show().siblings('.clothes-list').hide();
    })

    /* 户外运动tab切换 */
    $('.sports .clothes-nav li').mouseenter(function() {
        // 导航切换
        $(this).addClass('active').siblings('li').removeClass('active');
        // 获取索引
        var index = $(this).index();
        $('.sports .clothes-content > .clothes-list').eq(index).show().siblings('.clothes-list').hide();
    })

    /* 童装tab切换 */
    $('.children-clothes .clothes-nav li').mouseenter(function() {
            // 导航切换
            $(this).addClass('active').siblings('li').removeClass('active');
            // 获取索引
            var index = $(this).index();
            $('.children-clothes .clothes-content > .clothes-list').eq(index).show().siblings('.clothes-list').hide();
        })
        //推广商品切换
    $('.promotion .promotion-title ul li').mouseenter(function() {
            $(this).addClass('active').removeClass('active')
                //内容切换
            var index = $(this).index()
            $('.promotion .promotion-content .inner-box').animate({
                'top': -index * 640
            })
        })
        //二维码的切换
    $('.qr-code .ticket').hover(function() {
        //让二维码出来
        $('.qr-code div').stop(true).animate({
            left: '-100px'
        })
    }, function() {
        //让二维码收回
        $('.qr-code div').stop(true).animate({
            left: '0px'
        })
    })

    //顶部的搜索框
    $(document).scroll(function() {
            //获取顶部的距离
            var topDistance = $('html,body').scrollTop();
            if (topDistance > 500) {
                // 若果大于500 滑下来
                $('.top-search-box').slideDown();
            } else {
                // 否则收回去
                $('.top-search-box').slideUp();
            }
        })
        //楼层跳转
    $('.floor li').click(function() {
        //获取索引
        var index = $(this).index();
        //选中每一个板块到顶部的偏移
        var topOffset = $('.floorBox').eq(index).offset().top;
        //让滚动条滚动到这个位置
        $(' html,body').animate({
            scrollTop: topOffset - 50
        })
    })
})