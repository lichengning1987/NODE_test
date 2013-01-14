/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions:true, showStack:true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});

// Routes
//app.get('/', routes.index);

require('./routes').init(app);

app.get('/', routes.index);

app.get('/weekly',function(req,res){
    res.render('weekly',{
        title:123
    })
});
app.get('/weeklys',function(req,res){
    res.render('newsComment',{layout:true,title:'新闻点评'})
});
app.get('/weektest',function(req,res){
    res.render('weekTest',{layout:false,title:'保存日志'})
})


/*app.get('/newsComment',function(req,res){
    res.render('ness',{
        title:'nihaoma'
    })
});*/

app.get('/news', function (req, res) {
    console.log(req.query);
    res.header('Content-Type', 'text/html; charset=utf-8')
    var des = " 伯宁";
    res.render('news', {
        abc:"<span style='color:red'>伯宁</span>",
        arr:["伯宁", "元节", "伯阳"],
        abcd:123123,
        title:88888
    });
});
app.get('/port', function (req, res) {
    res.header('Content-Type', 'text/html;charset=utf-8')
    var arr = [];
    for (var i = 0; i < 100; i++) {
        arr.push({
            pictureUrl:Math.random(),
            originalPrice:Math.random(),
            shopName:Math.random()
        })
    }
    res.render('port', {layout:false, callback:req.query.callback,
        aaa:Math.random(),
        data:arr
    })
});

app.get('/pots1',function(req,res){
    res.header('Content-type','application/javascript;charset=utf-8')
    res.end('qianrenqianmian({"version":"v4.0","status":"ok","result":[{"alipay_pid":"","app_key":"","icons":"","image":"http://img01.taobaocdn.com/tps/i1/T1NA_MXjVXXXXKtnQ5_060234.jpg","link":"15796118722","nid":"15796118722","outer_id":"","product_price":"3880","sales":"1","seller_id":"835068241","seller_name":"汉舶手表专营店","site_id":"1","site_name":"天猫","title":"D&amp;G杜嘉班纳 DW0366 男士手表 全国联保","zk_ecat":"9","zk_rate":"3606","zk_rate2":"3606","zk_time":"5781542211077242624"},{"alipay_pid":"","app_key":"","icons":"","image":"i1/T1CsvMXaNbXXad0RHX_085931.jpg","link":"15860571267","nid":"15860571267","outer_id":"","product_price":"540","sales":"0","seller_id":"22117430","seller_name":"郭敏捷士","site_id":"0","site_name":"淘宝网","title":"24V 12Ah 电动车 电瓶车 电动自行车 电动单车 改装锂电池","zk_ecat":"","zk_rate":"","zk_rate2":"","zk_time":""},{"alipay_pid":"","app_key":"","icons":"","image":"i7/T1tS6MXdVhXXcINeg._082038.jpg","link":"19925464176","nid":"19925464176","outer_id":"","product_price":"4.9","sales":"4015","seller_id":"812265685","seller_name":"大饰场","site_id":"0","site_name":"淘宝网","title":"5023 韩国秋冬纯色夏季披肩棉麻百搭褶皱超大超长男女围巾","zk_ecat":"1","zk_rate":"9000","zk_rate2":"9000","zk_time":"5806453803070276472"},{"alipay_pid":"","app_key":"","icons":"","image":"i4/T1ZKjYXlBkXXbfWjM8_100933.jpg","link":"15525653437","nid":"15525653437","outer_id":"","product_price":"3180","sales":"16","seller_id":"835068241","seller_name":"汉舶手表专营店","site_id":"1","site_name":"天猫","title":"【快捷专享】D&amp;G杜嘉班纳 DW0192  男士手表 全国联保","zk_ecat":"9","zk_rate":"3774","zk_rate2":"3774","zk_time":"5781542211077242624"},{"alipay_pid":"","app_key":"","icons":"","image":"i4/T1hlvuXoFpXXXfIx.9_103653.jpg","link":"15041400343","nid":"15041400343","outer_id":"","product_price":"588","sales":"1","seller_id":"23437202","seller_name":"info903","site_id":"0","site_name":"淘宝网","title":"中顺 24V 10AH电动车锂电池 助力车 电瓶 银鱼 250W电机 送导轨","zk_ecat":"","zk_rate":"","zk_rate2":"","zk_time":""},{"alipay_pid":"","app_key":"","icons":"","image":"i1/T1qX2NXchdXXaZ9xg9_103546.jpg","link":"16976643718","nid":"16976643718","outer_id":"","product_price":"13.8","sales":"1496","seller_id":"812265685","seller_name":"大饰场","site_id":"0","site_name":"淘宝网","title":"3196 呛口小辣椒推荐 巴黎行复古图腾波西米亚围巾 披肩 9.9包邮","zk_ecat":"1","zk_rate":"7180","zk_rate2":"7180","zk_time":"5806454357121057784"},{"alipay_pid":"","app_key":"","icons":"","image":"i1/T1EcNBXgtvXXXU8yQT_012305.jpg","link":"17019088602","nid":"17019088602","outer_id":"","product_price":"2650","sales":"14","seller_id":"835068241","seller_name":"汉舶手表专营店","site_id":"1","site_name":"天猫","title":"【Calvin Klein】CK K9423101情侣手表 时装表 女士手表 全国联保","zk_ecat":"9","zk_rate":"9431","zk_rate2":"9431","zk_time":"5735919402024606976"},{"alipay_pid":"","app_key":"","icons":"","image":"i4/T1MwbjXcXfXXcVjIUV_020114.jpg","link":"13417796042","nid":"13417796042","outer_id":"","product_price":"388","sales":"1","seller_id":"47479034","seller_name":"hbmloveyou","site_id":"0","site_name":"淘宝网","title":"全新 6串 24V 10AH 电动车 防爆聚合物锂电池 带保护板送充电器","zk_ecat":"","zk_rate":"","zk_rate2":"","zk_time":""},{"alipay_pid":"","app_key":"","icons":"","image":"i5/T1RxPNXfBaXXc1PVPb_092703.jpg","link":"15815110800","nid":"15815110800","outer_id":"","product_price":"9.9","sales":"261","seller_id":"812265685","seller_name":"大饰场","site_id":"0","site_name":"淘宝网","title":"3153 韩国新款百塔可爱豹纹围巾 长丝巾纱巾 女披肩","zk_ecat":"","zk_rate":"","zk_rate2":"","zk_time":""},{"alipay_pid":"","app_key":"","icons":"","image":"i3/T10eNwXfXwXXXw553V_020904.jpg","link":"15421871645","nid":"15421871645","outer_id":"","product_price":"2650","sales":"11","seller_id":"835068241","seller_name":"汉舶手表专营店","site_id":"1","site_name":"天猫","title":"【Calvin Klein】CK K7621107男表 腕表 皮带男士手表 全国联保","zk_ecat":"9","zk_rate":"9431","zk_rate2":"9431","zk_time":"5735919402024606976"},{"alipay_pid":"","app_key":"","icons":"","image":"i4/T1NeYwXntbXXXKBNg9_073544.jpg","link":"12321733925","nid":"12321733925","outer_id":"","product_price":"650","sales":"0","seller_id":"47479034","seller_name":"hbmloveyou","site_id":"0","site_name":"淘宝网","title":"电动车7串24V20AH防爆聚合物锂电池 带保护板送充电器","zk_ecat":"","zk_rate":"","zk_rate2":"","zk_time":""},{"alipay_pid":"","app_key":"","icons":"","image":"i4/T1EMvIXgtqXXa2Jq3._111331.jpg","link":"19925392434","nid":"19925392434","outer_id":"","product_price":"9.9","sales":"2098","seller_id":"812265685","seller_name":"大饰场","site_id":"0","site_name":"淘宝网","title":"9.9包邮 秋冬保暖裤拉绒连裤袜加厚九分裤 踩脚裤 拉绒打底裤爆款","zk_ecat":"","zk_rate":"","zk_rate2":"","zk_time":""},{"alipay_pid":"","app_key":"","icons":"","image":"i3/T1NlfLXmBcXXcMjMZT_012044.jpg","link":"19029128545","nid":"19029128545","outer_id":"","product_price":"3800","sales":"204","seller_id":"883090317","seller_name":"永俊手表专营店","site_id":"1","site_name":"天猫","title":"【全国联保】阿玛尼AR2436新款高档男士手表对表 独家秋季新品","zk_ecat":"9	15","zk_rate":"3100	10000","zk_rate2":"3100	10000","zk_time":"5804990280080596608	0"},{"alipay_pid":"","app_key":"","icons":"","image":"i1/T1uk1pXhX_XXbo8sPa_090435.jpg","link":"14233268616","nid":"14233268616","outer_id":"","product_price":"668","sales":"3","seller_id":"22117430","seller_name":"郭敏捷士","site_id":"0","site_name":"淘宝网","title":"上海行晨 冲钻优惠 36V 37V 12Ah 电瓶车 力霸皇 电动车锂电池","zk_ecat":"","zk_rate":"","zk_rate2":"","zk_time":""},{"alipay_pid":"","app_key":"","icons":"","image":"i1/T1XGzQXnxqXXbC3JTa_090558.jpg","link":"20349040319","nid":"20349040319","outer_id":"","product_price":"12.8","sales":"1221","seller_id":"812265685","seller_name":"大饰场","site_id":"0","site_name":"淘宝网","title":"2012新款围巾批发 秋冬田园碎花超长围巾 披肩 女 饰品满包邮","zk_ecat":"","zk_rate":"","zk_rate2":"","zk_time":""},{"alipay_pid":"","app_key":"","icons":"","image":"i1/T13STCXfRaXXXwegcZ_032336.jpg","link":"15392146160","nid":"15392146160","outer_id":"","product_price":"4663","sales":"353","seller_id":"883090317","seller_name":"永俊手表专营店","site_id":"1","site_name":"天猫","title":"【全国联保】送礼首选！阿玛尼 AR5890男士手表 情侣对表 男款","zk_ecat":"9	15","zk_rate":"3000	10000","zk_rate2":"3000	10000","zk_time":"5804990280080596608	0"},{"alipay_pid":"","app_key":"","icons":"","image":"i4/T1Kt2eXlBqXXXe9pZ__105252.jpg","link":"13542872358","nid":"13542872358","outer_id":"","product_price":"700","sales":"1","seller_id":"57413949","seller_name":"深圳时尚电子","site_id":"0","site_name":"淘宝网","title":"36V电动车锂电池带充电器保护板带均衡36V11AH配充电器","zk_ecat":"","zk_rate":"","zk_rate2":"","zk_time":""},{"alipay_pid":"","app_key":"","icons":"","image":"i8/T1XbHJXgdoXXcDYww._112332.jpg","link":"19600288520","nid":"19600288520","outer_id":"","product_price":"1.2","sales":"1320","seller_id":"812265685","seller_name":"大饰场","site_id":"0","site_name":"淘宝网","title":"3110义乌小商品特价秒杀 男女可爱卡通图案船袜/短袜/袜子批发","zk_ecat":"","zk_rate":"","zk_rate2":"","zk_time":""},{"alipay_pid":"","app_key":"","icons":"","image":"i3/T1G4bDXb8eXXcjLEk8_101817.jpg","link":"19554168410","nid":"19554168410","outer_id":"","product_price":"2380","sales":"46","seller_id":"835068241","seller_name":"汉舶手表专营店","site_id":"1","site_name":"天猫","title":"D&amp;G杜嘉班纳 简约时尚女士手表 全国联保","zk_ecat":"9","zk_rate":"3778","zk_rate2":"3778","zk_time":"5781542211077242624"},{"alipay_pid":"","app_key":"","icons":"","image":"i4/T1nw_mXm8uXXbp7mc5_060033.jpg","link":"12447008771","nid":"12447008771","outer_id":"","product_price":"400","sales":"4","seller_id":"47479034","seller_name":"hbmloveyou","site_id":"0","site_name":"淘宝网","title":"电动车7串24V10AH防爆聚合物锂电池 带20A保护板送充电器","zk_ecat":"","zk_rate":"","zk_rate2":"","zk_time":""}]})')


})






app.get('/login-status1', function (req, res) {
    res.header('Content-Type', 'application/javascript;charset=utf-8')
    var obj = {
        stat:'ok',
        winners:[]
    };
    for (var i = 0; i < 100; i++) {
        obj.winners.push({
            userName:Math.random(),
            prizeName:Math.random()
        })
    }
   res.end(req.query._callback+"("+JSON.stringify(obj,undefined,'\t')+");");
});

app.get('/login-status2',function(req,res){
    //console.log(req.query);
    //console.log(req.body);
    res.header('Content-Type', 'application/javascript;charset=utf-8')
    var obj = {
        status:Math.random(),
        data:[]
    };
    for (var i = 0; i < 100; i++) {
        obj.data.push({
            pictureUrl:Math.random(),
            originalPrice:Math.random(),
            shopName:Math.random()
        })
    }
    res.end(req.query.callback+"("+JSON.stringify(obj,undefined,'\t')+");");
    //res.end(JSON.stringify(obj,undefined,'\t'));
   //res.end(JSON.stringify(req.body))
});

app.get('/status1',function(req,res){
    res.header('Content-Type','application/javascript;charset=utf-8');
    var obj={
        code:Math.random(),
        result:[]
    };
    for(var i=0;i<30;i++){
        obj.result.push({
           name:Math.random(),
           name1:Math.random(),
           shopname:Math.random()
        })
    }
    res.end(req.query.callback+"("+JSON.stringify(obj,undefined,'\t')+")")
})
app.get('/status2',function(req,res){
    res.header('Content-Type','application/javascript;charset=utf-8');
    var obj=[];
    console.log(req.body)
    for(var i=0;i<req.query.count;i++)
    {
        obj.push({
            nickName:Math.random(),
            grade:Math.random(),
            loupanName:Math.random()
        })
    }
    res.end(req.query.callback+"("+JSON.stringify(obj,undefined,'\t')+")")
})


app.post('/weeklysystem',function(req,res){
    //res.header('Content-Type', 'text/html; charset=utf-8')
   //console.log(req.query.callback);
   //console.log(req.body);
   // res.end(JSON.stringify(req.body));
   // res.end(req.body)
   // res.render('weeklysystem', {layout:false })
    //console.log(req.body);
    res.send(req.body);
})
app.post('/newsnav',function(req,res){
    res.header('Content-Type', 'text/html; charset=utf-8')
    res.send(req.body)
})



/*var $ = require("./mongous").mongous;
$("demodb.unicorns").save({name:'vals',sex:'w',weight:30});
$("demodb.unicorns").find({},function(r){
    console.log(r)
});*/

/*var DB = require('./helper/db');
app.get('/test',function(req,res){
        var collection = new DB.mongodb.Collection(DB.client, 'os');
        collection.find().toArray(function (err, docs) {
           res.end(JSON.stringify(docs));
        });
});*//*var DB = require('./helper/db');
 app.get('/test',function(req,res){
 var collection = new DB.mongodb.Collection(DB.client, 'os');
 collection.find().toArray(function (err, docs) {
 res.end(JSON.stringify(docs));
 });
 });*/


app.listen(80, function () {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
