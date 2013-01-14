/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-7-25
 * Time: 下午3:25
 * To change this template use File | Settings | File Templates.
 */

 define(function(require, exports, module) {
        require('a.js')
        /*document.getElementById("hello").onclick=function(){
            require.async('b.js',function(e){
                e.sayHello();
              });
        }*/
       var dbs=require('b.js');
     dbs.sayHello();
 });
