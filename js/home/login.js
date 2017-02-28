/**
 * Created by wyc on 2017/2/26.
 */
define(['jquery'],function($){

    //监听form-login
    $('#form-login').on('submit',function(){
        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success:function(data){
                location.herf='/'
            }
        })
        return false;
    })



})