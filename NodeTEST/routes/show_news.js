/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-9-11
 * Time: 下午2:16
 * To change this template use File | Settings | File Templates.
 */
var DB=require('../helper/db');

exports.shownews=function(req,res){
    res.header('Content-Type', 'application/javascript;charset=utf-8');
    var collection = new DB.mongodb.Collection(DB.client,'newsInfo');
    collection.find().toArray(function (err, docs) {
       res.end(req.query.callback+"("+JSON.stringify(docs,undefined,'\t')+");")
    });
}