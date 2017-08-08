var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = 
{
    title:'Article One|Tanveer Ahmad',
    heading:'article one',
    date:'8 Aug 2017',
    content:`
     <p>
        This is my first web app. I am working on it...It gives a very good experience. Making our oun web apps is really amazing and gives a lot of pleasure.This is my first web app. I am working on it...It gives a very good experience. Making our oun web apps is really amazing and gives a lot of pleasure.
    </p>
     <p>
        This is my first web app. I am working on it...It gives a very good experience. Making our oun web apps is really amazing and gives a lot of pleasure.This is my first web app. I am working on it...It gives a very good experience. Making our oun web apps is really amazing and gives a lot of pleasure.
    </p>
    `
};


function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
     <html>
        <head>
            <title>
                   ${title}
            </title>
            <meta name="viewport" content="width-device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
    
        
        <body class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </body>
        
    </html>`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleone));
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
