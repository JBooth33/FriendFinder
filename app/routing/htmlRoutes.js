var path = require('path');

//routing
module.exports = function (app) {
    //HTML GET requests
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
    
};

