/**
 * Created by wyc on 2017/2/26.
 */
define(['jquery','jqueryCookie'],function($,undefined){
    $('.navs a').on('click',function(){
        $(this).next().slideToggle();
    })

    //�������λ��ʾ
    var pathname = window.location.pathname;
    //[href='��ַ'] ==> ͨ������ѡ����ȥ��ʾ�������
    $('.navs a').removeClass('active').filter('[href="'+pathname+'"]')
        .addClass('active').parents('ul').show();


    //�˳�����:
    $('#logout').on('click',function(){
        //��Ϊ���ô���,����ֱ�ӿ���ʹ��
        $.post('/v6/logout',function(data){
            if(data.code==200){
                location.href='/html/home/login.html';
            }
        });
    });

    //��ȡ����cookie�û���Ϣ,ͬʱ���ݴ���
    var userInfo =null;
    try{
        //������Ϊ����define��ʱ��û�н���jqueryCookie�ķ���ֵ,����jqueryCookie�ǻ���jquery�����п���ֱ��ʹ��
        //jquery��ķ���,ͨ��$.cookie();���ﴫ��һ����������,��ȡֵ,��Ϊ�����cookie��formdata��name���Եõ���
        userInfo = JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo = {};
    }

    //Ȼ��չʾ����ർ��
    $('.aside .profile h4 ').html(userInfo.tc_name?userInfo.tc_name:'dagenimeiminmaga');
    $('.aside .profile img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/images/default.png');



})