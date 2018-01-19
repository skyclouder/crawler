var cheerio = require('cheerio')
var charset = require('superagent-charset')
var superagent = require('superagent')
charset(superagent);
var async = require('async')
var express = require('express')
var eventproxy = require('eventproxy')
var ep = eventproxy()
var app = express()

var Durl ='http://www.dytt8.net'
var Rurl = 'http://www.jiuye.org/new/sys/fore.php?op=listRecruit'
var Jurl = "http://www.jianshu.com"
var data =""
app.get('/',function(req, res, next){
	getdata()
function getdata(){
    superagent
        .post(Rurl)

        .set('Accept','application/json, text/javascript, */*; q=0.01')
        .type('text/html; charset=utf-8')
        // .type('application/json')
        .send("2")
        .end(function(err, res) {
            if (err) {
                console.log(err);
            } else {
               data =  res.text
            }
           
        })
        
     res.send(unescape(data.replace(/\\u/g,'%u')));
}


})

app.listen(3000, function (req, res) {
    console.log('app is running at port 3000');
});



