/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-12-19
 * Time: 下午2:45
 * To change this template use File | Settings | File Templates.
 */
$(function(){

//将form转为AJAX提交
    function ajaxSubmit(frm, fn) {
        var dataPara = getFormJson(frm);
        $.ajax({
            url: frm.action,
            type: frm.method,
            data: dataPara,
            success: fn
        });
    }

//将form中的值转换为键值对。
    function getFormJson(frm) {
        var o = {};
        var a = $(frm).serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });

        return o;
    }
    $("#formstb").bind('submit',function(){
        ajaxSubmit(this, function(data){
            alert(this);
            alert(data);
        });
        return false;


    })



})