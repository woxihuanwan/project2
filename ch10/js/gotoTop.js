// 返回顶部功能函数封装
//img图片地址必传
$(function() {
    //把函数挂在window上暴露出去
    window.gotoTop = function(options) {
        //准备结构
        var $gotoTopHtml = $(`<div class="backToTop">
        <img src="${options.imgUrl}" alt=""></div>`);

        //写样式定位
        $gotoTopHtml.css({
            width: '30px',
            height: '50px',
            position: 'fixed',
            bottom: '100px',
            marginLeft: '50%',
            left: '610px',
            display: 'none',
        })

        // 返回顶部
        $(document).scroll(function() {
                // 获取距离顶部的位置
                var topDistance = $('html,+body').scrollTop();
                if (topDistance > 500) {
                    $('.backToTop').fadeIn();
                } else {
                    $('.backToTop').fadeOut();
                }
            })
            //返回顶部
        $('body').on('click', '.backToTop', function() {
                $('html,body').animate({
                    scrollTop: 0
                }, 300)
            })
            //追加到页面的尾部
        $('body').append($gotoTopHtml);

    }
})