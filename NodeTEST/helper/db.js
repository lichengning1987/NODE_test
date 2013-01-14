/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-9-4
 * Time: 下午2:59
 * To change this template use File | Settings | File Templates.
 */
var mongodb = require('mongodb');
var server = new mongodb.Server("127.0.0.1", 27017, {});
var fed = new mongodb.Db('longxing', server, {});

exports.mongodb = mongodb;

exports.dbServer = fed;
exports.client = undefined;

exports.open = function () {
    fed.open(function (error, client) {
        exports.client = !error ? client : undefined;
    });
};

fed.on('close', function () {
    console.log('Database connection is disconnected!\t' + new Date().toLocaleTimeString());
});

exports.open();
