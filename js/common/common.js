/**
 * Created by wyc on 2017/2/26.
 */
define(['jquery','jqueryCookie'],function($,undefined){

    //ajax请求loading
    $(document).ajaxStart(function(){
        $('.overlay ').show();
    }).ajaxStop(function(){
        $('.overlay ').hide()
    })
    $('.navs a').on('click',function(){
        $(this).next().slideToggle();
    })

    //左侧栏定位显示
    var pathname = window.location.pathname;
    //[href='地址'] ==> 通过属性选择器去显示左侧栏中
    $('.navs a').removeClass('active').filter('[href="'+pathname+'"]')
        .addClass('active').parents('ul').show();


    //退出功能:
    $('#logout').on('click',function(){
        //因为不用传参,所以直接可以使用
        $.post('/v6/logout',function(data){
            if(data.code==200){
                location.href='/html/home/login.html';
            }
        });
    });

    //获取本地cookie用户信息,同时做容错处理
    var userInfo =null;
    try{
        //这里因为上面define的时候没有接受jqueryCookie的返回值,但是jqueryCookie是基于jquery的所有可以直接使用
        //jquery里的方法,通过$.cookie();这里传入一个参数代表,获取值,因为这里的cookie从formdata中name属性得到的
        userInfo = JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo = {};
    }

    //然后展示到左侧导航
    $('.aside .profile h4 ').html(userInfo.tc_name?userInfo.tc_name:'dagenimeiminmaga');
    $('.aside .profile img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/images/default.png');



})