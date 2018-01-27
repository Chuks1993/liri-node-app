require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];
var input = process.argv[3];









if (command === "my-tweets") {
	var params = {screen_name: input };
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    
    for (var i = 0; i < tweets.length; i++) {
    	console.log(tweets[i].text);
    }
  }
});
} else if (command === "spotify-this-song") {
	spotify.search({ type: 'track', query: input }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.tracks.items[0].name); 

for (var i = 0; i < data.tracks.items.length; i++) {
    	console.log(data.tracks.items[i].name);
    }
});
} else if (command === "movie-this") {

};