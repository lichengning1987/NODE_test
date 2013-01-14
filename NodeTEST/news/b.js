/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-7-25
 * Time: 下午3:24
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module) {
  require('jquery-1.7.2-min');
  exports.sayHello = function() {
    $('#hello').click(function(){
       alert("12123");
    })
  };

});