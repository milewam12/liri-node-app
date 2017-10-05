var keys = require("./keys.js");
var Twitter = require('twitter');
var request = require('request');
var Spotify = require('node-spotify-api')

var input = process.argv;

//TWITTER
var client = new Twitter(keys.twitterKeys);
   
  var params = {screen_name: 'milenagarces14'};

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    
    if (!error) {
       
        for (var i = 0; i < tweets.length; i++) {
            var date = tweets[i].created_at;
            var showTweets = tweets[i].text;
        // console.log(date, showTweets);
        // I was able to get a list of tweets but when I run the myTweets function is only displaying 1 tweet
            
        }
    }
    var myTweets = function () {
        if(input[2] === "my-tweets"){
            console.log(date, showTweets)
        // } else{
        //     console.log ("Sorry, wrong command!")
        // }
    }
}
    myTweets();

});


//SPOTIFY

var spotify = new Spotify(keys.spotifyKeys);
var song = input[3]
  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    if(!err){
     
        var music = function () {
            if(input[2]=== "spotify-this-song"){
                console.log(JSON.stringify(data, null, 2));
                // for (var i = 0; i < data.length; i++) {
                //     var element = data.name[i];
                //     console.log(element)
                //     console.log("----------")
                
                
            } else {
                console.log ("Sorry, wrong command!")
            
        }
    }
}
music();
         // for (var i = 0; i < data.artist.length; i++) {

        //     console.log("Name" + data.artist[i].name)

    
//   console.log(JSON.stringify(data, null, 2)); 
  });

  //MOVIE THIS//
  

  
var movieThis = function () {
    request('http://www.omdbapi.com/?t=titanic&y=&plot=short&apikey=40e9cece', function (error, response, body) {// console.log

        if(!error && response.statusCode === 200) {
            console.log (body)

            // var data = JSON.parse(body);

            // console.log("Title: " + data.Title);
            // console.log("Year: " + data.Year);
            // console.log("Rated: " + data.Rated);
            // console.log("Country: " + data.Country);
            // console.log("Actors: " + data.Actors);
            // console.log("Language: " + data.Language);
            // console.log("Plot: " + data.Plot);
        }
    })

    
}
     movieThis(); 
      
      
