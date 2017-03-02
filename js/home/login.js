/**
 * Created by wyc on 2017/2/26.
 */
define(['jquery','jqueryCookie','nprogress'],function($,undefined,nprogress){

    /*
    *  展示用户的历史登录头像
    *  1 获取userInfo这个cookie值
    *  2 把cookie字符串转换为对象
    *  3 设置登录页的img-src为对象中的tc_avater,如果没有给一个默认的对象地址
    * */

    var userInfo = null;
    try{
        userInfo=JSON.parse($.cookie('userInfo'))
    }catch(e){
        userInfo={}
    }
    $('.login .avatar img').attr('src', userInfo.tc_avatar? userInfo.tc_avatar: '/images/default.png');
   /*
   *  1 先监听form表单的提交事件
   *  2 事件回调中return false 阻止默认的提交
   *  3 事件回调中通过ajax的方式 发送表单数据
   *  4 如果返回结果中code为200 证明登录成功 跳转到首页
   *
   *  * */
    $('#form-login').on('submit',function(){
        $.ajax({
            //请求数据的地址称为接口,
            //前端获取后端的数据 通过url地址
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success:function(data){
                if(data.code===200){
                    //如果登录成功,使用cookie的方式保存用户信息
                    //注意
                    //这里通过ajax返回来的是一个data是一个对象,并且result也是一个对象,
                    //而cookie是存储字符串,JSON.stringify转为字符串
                    $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                    location.href='/';
                }

            }
        })
        return false;
    })

    // 该页所有的js加载完毕，进度条结束。
    nprogress.done();

})