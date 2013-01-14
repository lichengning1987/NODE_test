/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-9-11
 * Time: 上午11:40
 * To change this template use File | Settings | File Templates.
 */
var DB = require('../helper/db');
exports.newssave=function(req,res){
    res.header('Content-Type', 'application/javascript;charset=utf-8');
    var data = Object.create(null),body=req.body;
    data['username']=body['username'];
    data['contents']=body['contents'];
    var collection = new DB.mongodb.Collection(DB.client,'newsInfo');
    collection.insert(data);
    //res.redirect('/weeklys');
   //res.end();
    //res.render('savelog',{ title: 'Express111' });
   collection.find().toArray(function (err, docs) {
       // data.documents = docs;
        //res.end(JSON.stringify(data, undefined, '\t'));
        res.end(JSON.stringify(docs))
    });
     // res.end(JSON.stringify({'status':true}, undefined, '    '));



}