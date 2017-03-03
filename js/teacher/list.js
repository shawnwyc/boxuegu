/**
 * Created by wyc on 2017/2/25.
 */
define(['jquery','common','nprogress','template'],function($,undefined,nprogress,template){

    nprogress.done();

    //渲染讲师列表
    $.get('/v6/teacher',function(data){
        if(data.code==200){
            $('#teacher-list-tbody').html(template('teacher-list-tpl',{list:data.result}));
        }
    })


    //通过事件为委托的方式给动态生成的a标签绑定点击事件
    //然后获取查看讲师详细列表
    $('#teacher-list-tbody').on('click','.teacher-view',function(){
        $.get('/v6/teacher/view',{
            tc_id:$(this).parent().attr('data-id')
        },function(data){
            if(data.code==200){
                $('#teacherModal').html( template('teacher-view-tpl',data.result))
            }
        })
    })
})