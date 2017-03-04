var Yelp = require('yelp-api-v3');
var http = require("http");
var url = require('url');

var yelp = new Yelp({
    app_id: '7vpJnElmvwPVwJPXg_SyWA',
    app_secret: 'Vr7YHS9IyKLSTU6WZJ1Mqrg7qjvTKPFjtAq88xpzNeplWLK15eleMr0y6MVv8o2Q'
});


http.createServer(function (req, res) {

    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log(query);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    yelp.search(query)
        .then(function (data) {
            res.end(data);
        })
        .catch(function (err) {
            res.end(err);
        });
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');