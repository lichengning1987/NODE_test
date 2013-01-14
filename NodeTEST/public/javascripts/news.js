/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-9-11
 * Time: 下午4:02
 * To change this template use File | Settings | File Templates.
 */

KISSY.ready(function(S){

      var D= S.DOM,E= S.Event;
      var obcontent= S.get(".divContent");
    var txtcon= S.get("#txtContent");
    var txtname= S.get('#txtName');
    var obtn= S.get(".btn");
    var obform= S.get("#formstb");
        function LoadData(){
            S.io({
                type:'get',
                url:'http://192.168.1.76/showNews',
                dataType:'jsonp',
                success:function(data){
                    var len=data.length;
                    for(var i=0;i<len;i++)
                    {
                        //console.log(data[i].username);
                        obcontent.innerHTML +='<div class="ln_newMain"><span>'+data[i].username +':</span><div class="userContent">'+data[i].contents+'</div></div>';

                    }
                    //console.log(data[0].username)
                }
            })
        }

    function LoadPOST(){
        var urlss="/saveNews";
        S.io({
            type:'post',
            url:urlss,
            data:KISSY.unparam(S.io.serialize(obform)),
            success:function(data){

            }
        })
    }

    LoadData();
    E.on(obtn,'click',function(){

        setTimeout(fangun,40);
        LoadData();
    })
    E.on(obform,'submit',function(ev){

        LoadPOST();
        ev.preventDefault();
    })

    function fangun(){
           var  obdivContent= S.get('.divContent');
           var  divchild= S.query(".ln_newMain",obdivContent);
        var lenth=divchild.length-1;
       var anim1= S.Anim(divchild[0],{marginTop:"20px"},0.2, 'backIn',function(){
           D.css(divchild[0],"marginTop","0px");
           D.insertBefore(divchild[lenth],divchild[0])

       })
        anim1.run();

    }



})