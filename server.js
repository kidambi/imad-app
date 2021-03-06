var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
    title: 'Article One of Kidambi',
    heading: 'Article One',
    date: '8th August, 2017',
    content: ` <div>
            <p>
                This is Article One. This is Article One.This is Article One. This is Article One.This is Article One. This is Article One.This is Article One. This is Article One.This is Article One. This is Article One.
            </p>
        </div>
    `
};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Article-one', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'Article-one.html'));
});

app.get('/Article-two', function (req, res) {
    res.send('Article two is requested and would be made available here');
});

app.get('/Article-three', function (req, res) {
    res.send('Article three is requested and would be made available here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});