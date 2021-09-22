const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static(path.join(__dirname,"static")))

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.render('pages/home.ejs');
});

app.get('/blog', function(req, res) {
    res.render('pages/blog.ejs', {root: __dirname })
});

app.get('/music', function(req, res) {
    res.render('pages/music.ejs', {root: __dirname })
});

app.get('/computer', function(req, res) {
    res.render('pages/computer.ejs', {root: __dirname })
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})