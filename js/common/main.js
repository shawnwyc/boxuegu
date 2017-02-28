
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
        homeLogin:'/js/home/login',
        common:'/js/common/common',
        login:'/js/common/login',
        jqueryCookie:'/lib/jquery-cookie/jquery.cookie'
    },
    //自己写的路径配置

    shim:{
        boostrap:{
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
    *  1.2 有 SESSID,跳转到登录页
    *
    *  2 其它页
    *  2.1 没有SESSID 跳转到登录页
    *  2.2 有SESSID 不用管
    * */
    switch(pathname){
        case'/html/user/list.html':
        require(['userList']);
        break;
        case'/html/user/profile.html':
        require(['userProfile']);
        break;
        case'/html/home/login.html':
        require(['homeLogin']);
        break;
        case'/html/course/add.html':
        require(['courseAdd']);
        break;

    }
})(window)