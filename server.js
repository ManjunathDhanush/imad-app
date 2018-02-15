var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-1':{
    title :"Article-1 Manjunath",
    heading:"article-1",
    date:"feb 15 2018",
    content:` <p>
                this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.
            </p>
            <p>
                this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.
            </p>
            <p>
                this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.
            </p>`
        },
     'article-2':{
        title:"Article-2 Manjunath",
        heading:"article-2",
        date:"feb 16 2018",
        content:` <p>
                    this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.
                </p>
                <p>
                    this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.
                </p>
                <p>
                    this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.
                </p>`
    },
     'article-3':{
        title:"Article-3 Manjunath",
        heading:"article-3",
        date:"feb 17 2018",
        content:` <p>
                    this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.
                </p>
                <p>
                    this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.
                </p>
                <p>
                    this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.this is the paragraph for my first article.
                </p>`
    }
};
function createtemplate(data){
        var title =data.title;
        var date = data.date;
        var heading = data.heading;
        var content =data.content;
        var htmltemplate =`
        <html>
        <head>
            <title>
                ${title}
            </title>
             <link href="/ui/style.css" rel="stylesheet" />
            <meta name="viewport" contents="width=device-width, initial-scalable=1" />
        </head>
        <body>
            <div class="container">
            <div>
                <a href="/">home</a>
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
            </div>
        </body>
        </html>
        `;
        return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function (req, res) {
    var articlename=req.params.articlename;
  res.send(createtemplate(articles[articlename]));
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
