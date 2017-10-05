var keys = require("./keys.js");
var Twitter = require('twitter');
var request = require('request');
var Spotify = require('node-spotify-api')



//TWITTER
var client = new Twitter(keys.twitterKeys);
   
  var params = {screen_name: 'milenagarces14'};

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    
    if (!error) {
        var input = process.argv[2];
        for (var i = 0; i < tweets.length; i++) {
            var date = tweets[i].created_at;
            var showTweets = tweets[i].text;
        // console.log(date, showTweets);
        // I was able to get a list of tweets but when I run the myTweets function is only displaying 1 tweet
            
        }
    }
    var myTweets = function () {
        if(input === "my-tweets"){
            console.log(date, showTweets)
        } else{
            console.log ("Sorry, wrong command!")
        }
    }
    myTweets();

});


//SPOTIFY

var spotify = new Spotify(keys.spotifyKeys);
var input2 = process.argv[2];
var song = process.argv[3];
  spotify.get({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    // } else{
        
    //     for (var i = 0; i < data.length; i++) {
    //         var artist = data[i];
    //         console.log(data[i].artist)
            
    //     }
    // }
    }
  console.log(JSON.stringify(data, null, 2)); 
  });