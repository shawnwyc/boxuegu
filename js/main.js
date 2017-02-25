
/**
 * Created by wyc on 2017/2/25.
 */


requirejs.config({
    baseUrl:'/',
    //第三方库的路径配置
    paths:{
        jquery: '/lib/jquery/jquery.min',
        bootstrap: '/lib/bootstrap/js/bootstrap.min',
        userList:'js/user/list',
        userProfile:'js/user/profile'
    },
    //自己写的路径配置

    shim:{
        boostrap:{
            deps:['jquery']

            }
        }
})


require(['jquery','bootstrap']);

//这里获取的页面pathname,然后对应加载js
(function(window){
    var pathname = window.location.pathname;
    switch(pathname){
        case'/html/user/list.html':
        require(['userList']);
        break;
        case'/html/user/profile.html':
        require(['userProfile']);
        break;

    }
})(window)