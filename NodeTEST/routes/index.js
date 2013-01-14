
/*
 * GET home page.
 */

/*
exports.index = function(req, res){

    //app.post('/save-log',require('./save_log').savelog);
  require('./save_log').savelog;
  res.render('index', { title: 'Express111' })
};*/
exports.init=function(app){
    app.get('/', require('./ajax').index);
    app.post('/save-log',require('./save_log').savelog);
    app.post('/saveNews',require('./new_save').newssave);
    app.get('/showNews',require('./show_news').shownews);
}
