/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-9-5
 * Time: 下午1:22
 * To change this template use File | Settings | File Templates.
 */
var DB = require('../helper/db');
exports.savelog=function(req,res){
    var data = Object.create(null),body=req.body;
    data['username']=body['username'];
    data['title']=body['title'];
    data['contents']=body['contents']
    var collection = new DB.mongodb.Collection(DB.client,'LogInfo');
    collection.insert(data);
    //res.render('savelog',{ title: 'Express111' });
    collection.find().toArray(function (err, docs) {
        data.documents = docs;
        res.end(JSON.stringify(data, undefined, '\t'));
    });
}

