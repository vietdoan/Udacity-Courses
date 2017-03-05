var http = require("http");
var request = require('superagent');
var url = require('url');

http.createServer(function (req, res) {

    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log(query);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (query.id) {
        request
            .get('https://api.yelp.com/v3/businesses/' + query.id + '/reviews')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', 'Bearer kViP15Mt5VWhlvV-3sMAhNnFQAuzhiUIvsP6cWLwE_1MqYNjWAdyhXOmhhumoF7gKUGyJHmFA120xFWK8hOZl040x4MeC_r014PcTqpwAnk28Eh1HrgZ1pLxA2O1WHYx')
            .end(function (err, result) {
                if (err)
                    res.end();
                else
                    res = res.end(JSON.stringify(result.body));
            });
    }
    else {
        request
            .get('https://api.yelp.com/v3/businesses/search')
            .query(query)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', 'Bearer kViP15Mt5VWhlvV-3sMAhNnFQAuzhiUIvsP6cWLwE_1MqYNjWAdyhXOmhhumoF7gKUGyJHmFA120xFWK8hOZl040x4MeC_r014PcTqpwAnk28Eh1HrgZ1pLxA2O1WHYx')
            .end(function (err, result) {
                if (err)
                    res.end();
                else
                    res = res.end(JSON.stringify(result.body));
                
            });
    }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/'); 