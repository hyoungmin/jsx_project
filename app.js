var express = require('express');

var app = express();
var port = 3000;

//--- jsx 세팅 시작
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
var options = { beautify: true };
app.engine('jsx', require('express-react-views').createEngine(options));
//--- jsx 세팅 끝

app.get('/', require('./routes').index);

app.listen(port, () => {
  console.log('port connected');
});
