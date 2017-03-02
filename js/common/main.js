
/**
 * Created by wyc on 2017/2/25.
 */


requirejs.config({
    baseUrl:'/',
    //第三方库的路径配置
    paths:{
        jquery: '/lib/jquery/jquery.min',
        bootstrap: '/lib/bootstrap/js/bootstrap.min',
        jqueryCookie:'/lib/jquery-cookie/jquery.cookie',
        nprogress:'/lib/nprogress/nprogress',

    //自己写的路径配置
        common:'/js/common/common',
        courseAddStep1:'/js/course/add_step1',
        courseAddStep2:'/js/course/add_step2',
        courseAddStep3:'/js/course/add_step3',
        courseAdd:'/js/course/add1',
        courseCategory:'/js/course/category',
        courseCategoryAdd:'/js/course/category_add',
        courseList:'/js/course/list',
        topic:'/js/course/topic',
        login:'/js/home/login',
        repass:'/js/home/repass',
        setting:'/js/home/setting',
        teacherAdd:'/js/teacher/add',
        teacherList:'/js/teacher/list',
        userList:'/js/user/list',
        userProfile:'/js/user/profile',
        index:'js/index'
    },
    //自己写的路径配置

    shim:{
        bootstrap:{
            deps:['jquery']

            }
        }
})

// 优先以最快的速度开启页面进度条，其他的js加载延后。
require(['nprogress'], function (nprogress) {
    nprogress.start()
});

require(['jquery', 'bootstrap', 'common']);

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

                case'/html/course/add.html':
                    require(['courseAdd']);
                    break;
                case'/html/course/add_step1.html':
                    require(['courseAddStep1']);
                    break;
                case'/html/course/add_step2.html':
                    require(['courseAddStep2']);
                    break;
                case'/html/course/add_step3.html':
                    require(['courseAddStep3']);
                    break;
                case'/html/course/category.html':
                    require(['courseCategory']);
                    break;
                case'/html/course/category_add.html':
                    require(['courseCategoryAdd']);
                    break;
                case'/html/course/list.html':
                    require(['courseList']);
                    break;
                case'/html/course/topic.html':
                    require(['courseTopic']);
                    break;
                case'/html/home/login.html':
                    require(['login']);
                    break;
                case'/html/home/repass.html':
                    require(['repass']);
                    break;
                case'/html/home/setting.html':
                    require(['setting']);
                    break;
                case'/html/teacher/add.html':
                    require(['teacherAdd']);
                    break;
                case'/html/teacher/list.html':
                    require(['teacherList']);
                    break;
                case'/html/user/list.html':
                    require(['userList']);
                    break;
                case'/html/user/profile.html':
                    require(['userProfile']);
                    break;
                case'/':
                    require(['index']);
                    break;

            }

    })

})(window)