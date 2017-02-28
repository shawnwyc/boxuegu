/**
 * Created by wyc on 2017/2/26.
 */
define(['jquery'],function($){

   /*
   *  1 先监听form表单的提交事件
   *  2 事件回调中return false 阻止默认的提交
   *  3 事件回调中通过ajax的方式 发送表单数据
   *  4 如果返回结果中code为200 证明登录成功 跳转到首页   * */
    $('#form-login').on('submit',function(){
        $.ajax({
            //请求数据的地址称为接口,
            //前端获取后端的数据 通过url地址
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success:function(data){
                if(data.code===200){
                    location.href='/';
                }

            }
        })
        return false;
    })



})