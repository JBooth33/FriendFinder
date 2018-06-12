//bring in friends data
var friendsData = require('../data/friends.js');


var path = require('path');

//initialize total difference variable
var totalDifference = 0;

//routing
module.exports = function (app) {

    //GET request from friends API
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });

    //POST request to friends API
    app.post('/api/friends', function (req, res) {

        var newFriend = {
            name: req.body.name,
            image: req.body.photo,
            scores: []
        };
        var scoresArray = [];

        for (var i = 0; i < req.body.scores.length; i++) {
            scoresArray.push(parseInt(req.body.scores[i]))
        }
        newFriend.scores = scoresArray;

        var compareScoresArray = [];
        for(var i = 0; i < friendsData.length; i++) {
            var currentComparison = 0;
            for(var j = 0; j < newFriend.scores.length; j++) {
                currentComparison += Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);
            }

            compareScoresArray.push(currentComparison);
        }

        var bestMatchPosition = 0;
        for(var i = 1; i < compareScoresArray.length; i++) {

            if(compareScoresArray[i] <= compareScoresArray[bestMatchPosition]) {
                bestMatchPosition = i;
            }
        }

        var bestFriendMatch = friendsData[bestMatchPosition];

        res.json(bestFriendMatch);

        friendsData.push(newFriend);
    });
};

