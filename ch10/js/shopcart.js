// 购物车js文件
$(function() {
    // 1.点击表头的全选框
    // 2.表格中的状态需要一致
    // 3.结算中的全选状态一致

    //定义三个变量
    var $theadInput = $('table thead input[type=checkbox]') //头部选择框
    var $bodyInput = $('table tbody input[type=checkbox]') //中间选择框
    var $allPriceInput = $('.totalPrice input[type=checkbox]') //结算选择框

    $theadInput.change(function() {
            //获取选中状态
            var state = $(this).prop('checked')
                //让表格中的选择框状态保持一致
            $bodyInput.prop('checked', state);
            $allPriceInput.prop('checked', state);
            //调用计算总价函数
            calcTotalPrice();
        })
        //  2.结算的选择框也有同样的功能
    $allPriceInput.change(function() {
        //获取选中状态
        var state = $(this).prop('checked')
            //让表格中的选择框状态保持一致
        $bodyInput.prop('checked', state);
        $theadInput.prop('checked', state);
        //调用计算总价函数
        calcTotalPrice();
    })

    //表单的选中状态 反过来也全选
    $('table tbody input[type=checkbox]').change(function() {
        var flag = true;

        //循环表格中的表框选中状态
        $bodyInput.each(function(i, input) {
                if (!$(input).prop('checked')) {
                    flag = false
                }
            })
            //把状态用来改变数据
        $theadInput.prop('checked', flag)
        $allPriceInput.prop('checked', flag)
            //调用计算总价函数
        calcTotalPrice();
    })

    //数量的加减功能
    //加
    $('.add').on('click', function() {
        //下一个节点
        var $nextInput = $(this).next();
        //获取输入框的值
        var oldVal = parseInt($nextInput.val());
        //自增
        oldVal++;
        //重新赋值给输入框
        $nextInput.val(oldVal)

        // 小计
        subTotalPrice(oldVal, $(this));
        //调用计算总价函数
        calcTotalPrice();
    })

    //减
    $('.reduce').on('click', function() {
        //上一个节点
        var $prevInput = $(this).prev();
        //获取输入框的值
        var oldVal = parseInt($prevInput.val());
        //自减
        oldVal--;
        oldVal = oldVal < 1 ? 1 : oldVal //如果小于一就等于一，大于一等于本身
            //重新赋值给输入框
        $prevInput.val(oldVal)
            // 小计
        subTotalPrice(oldVal, $(this));
        //调用计算总价函数
        calcTotalPrice();
    })

    //抽取一个小计的函数
    function subTotalPrice(oldVal, dom) {
        // 小计
        var subtotal = oldVal * parseFloat(dom.closest('tr').find('.price').text());
        dom.closest('tr').find('.subprice').text(subtotal.toFixed(2)) //把小计的值放入dom相应位置,保留2位数
    }

    //删除
    $('.del').click(function() {
            $(this).closest('tr').remove();
            calcGoodsCount(); //调用商品总数量
        })
        //计算总价的函数
    function calcTotalPrice() {
        //定义一个数量
        var count = 0
            //定义变量 保持总价价格
        var totalPrice = 0
            //循环表格中的所有选择框 如果是选中状态 那么计算总价
        $('table tbody input[type=checkbox]').each(function(i, input) {
                //
                if ($(input).prop('checked')) {
                    //自增
                    count++;

                    //累加价格
                    totalPrice += parseFloat($(input).closest('tr').find('.subprice').text())
                }
            })
            //把总价渲染到对应位置
        $('.total').text(totalPrice.toFixed(2))
            //把数量渲染到对象位置
        $('.count').text(count)
    }
    //全部商品
    function calcGoodsCount() {
        $('.goodsCount').text($('table tbody tr').length)
    }
    calcTotalPrice(); //一进入界面 就自定调用一次
    //删除选中商品
    $('.deleteChecked').on('click', function() {
        //循环单选框 如果选中 干掉自己(删除的是一行)
        $bodyInput.each(function(i, input) {
                if ($(this).prop('checked')) {
                    $(this).closest('tr').remove()
                }
            })
            //计算总价
        calcTotalPrice();
        //计算商品数量
        calcGoodsCount();
    })
})