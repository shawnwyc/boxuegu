
/**
 * Created by wyc on 2017/2/25.
 */


requirejs.config({
    baseUrl:'/',
    //第三方库的路径配置
    paths:{
        jquery: '/lib/jquery/jquery.min',
        bootstrap: '/lib/bootstrap/js/bootstrap.min',
        userList:'/js/user/list',
        userProfile:'/js/user/profile',
        common:'/js/common/common',
        login:'/js/home/login',
        jqueryCookie:'/lib/jquery-cookie/jquery.cookie'
    },
    //自己写的路径配置

    shim:{
        bootstrap:{
            deps:['jquery']

            }
        }
})


require(['jquery','bootstrap','common']);

//这里获取的页面pathname,然后对应加载js
(function(window){

    //获取路径
    var pathname = window.location.pathname;

    //登录状态
    /*
    *  1 登录页
    *  1.1 没有SESSID 不用管
    *  1.2 有 SESSID,跳转到首页
    *
    *  2 其它页
    *  2.1 没有SESSID 跳转到登录页
    *  2.2 有SESSID 不用管
    * */
    //注意这里的jqueryCookie内置了define,但是没有返回值,所以可以依赖于jquery或者配置exports一个返回值
    require(['jquery','jqueryCookie'],function($,undefined){
        var seeID  = $.cookie('PHPSESSID');
        if(pathname==='/html/home/login.html'&&seeID){
            location.href='/'
        }else if(pathname!=='/html/home/login.html'&&!seeID){
            location.href='/html/home/login.html';

        }
            //因为function是一个回调函数,异步执行,等待前面的模块加载完才执行
            //如果没有发生页面跳转,就加载对应的js
            switch(pathname){
                case'/html/user/list.html':
                    require(['userList']);
                    break;
                case'/html/user/profile.html':
                    require(['userProfile']);
                    break;
                case'/html/home/login.html':
                    require(['login']);
                    break;
                case'/html/course/add.html':
                    require(['courseAdd']);
                    break;

            }

    })

})(window)