const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    http = require('http'),
    app = express(),
    proxy = require("express-http-proxy"),
    api = require('./routes/api');

// Parsers
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist'), {
    etag: false,
    maxAge: '1h'
}));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    const url = req.originalUrl;
    if (url.indexOf('.php') === -1) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    } else {
        console.log('redirecting', url);
        // The client is using cache and thus old api endpoint
        if (url.indexOf('GetItems.php') !== -1) {
            const i = url.split('?itemid=');
            if (i.length > 1) {
                res.redirect(`/api/item/${i[1]}`);
            } else {
                res.redirect(`/api/item`);
            }
        } else if (url.indexOf('GetRecipe.php') !== -1) {
            const i = url.split('?spellId=');
            if (i.length > 1) {
                res.redirect(`/api/recipe/${i[1]}`);
            } else {
                res.redirect(`/api/recipe`);
            }
        } else if(url.indexOf('GetSpecies.php') !== -1) {
            const i = url.split('?speciesId=');
            if (i.length > 1) {
                res.redirect(`/api/pet/${i[1]}`);
            } else {
                res.redirect(`/api/pet`);
            }
        } else if (url.indexOf('.php') !== -1 || url.toLowerCase().indexOf('phpmyadmin') !== -1) {
            console.log(`What what for get @ ${ new Date().toString() }`);
            res.redirect('https://www.youtube.com/watch?v=fbGkxcY7YFU');
        }
    }
});

app.post('*', (req, res) => {
    console.log(`What what for post @ ${ new Date().toString() }. Contents was ${ JSON.stringify(req.body) }`);
    res.redirect('https://www.youtube.com/watch?v=fbGkxcY7YFU');
})

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
