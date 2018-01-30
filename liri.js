require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var omdb = require('omdb');


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];
var input = process.argv[3];




function grabOMDB(movieName){
    //If a movie was not entered, default to the movie Mr. Nobody
   
   

    if (input == null){
        movieName = "Mr. Nobody";
    }

    var requestURL = "http://www.omdbapi.com/?t=" + movieName + "&tomatoes=true&y=&plot=short&apikey=trilogy";

    request(requestURL, function(error, response, data){

        //200 response means that the page was found and a response received
        if (!error && response.statusCode == 200){
                console.log(requestURL);
        }
        console.log("-------------------------------------------------------");
        console.log("Here's the movie's title: " + JSON.parse(data)["Title"]+ "\r\n");
        console.log("Here's the movie's release year: " + JSON.parse(data)["Year"]+ "\r\n");
        console.log("Here's the movie's rating: " + JSON.parse(data)["imdbRating"]+ "\r\n");
        console.log("The movie was produced in: " + JSON.parse(data)["Country"]+ "\r\n");
        console.log("The movie's language is: " + JSON.parse(data)["Language"]+ "\r\n");
        console.log("Here's the movie's plot: " + JSON.parse(data)["Plot"]+ "\r\n");
        console.log("The movie's actors are: " + JSON.parse(data)["Actors"]+ "\r\n");
        console.log("Here's the movie's Rotten Tomatoes Rating: " + JSON.parse(data)["tomatoRating"]+ "\r\n");
        console.log("Here's the movie's Rotten Tomatoes URL: " + JSON.parse(data)["tomatoURL"]+ "\r\n");
        appendFile("-------------------------------------------------------"+ "\r\n");
        appendFile("Here's the movie's title: " + JSON.parse(data)["Title"]+ "\r\n");
        appendFile("Here's the movie's release year: " + JSON.parse(data)["Year"]+ "\r\n");
        appendFile("Here's the movie's rating: " + JSON.parse(data)["imdbRating"]+ "\r\n");
        appendFile("The movie was produced in: " + JSON.parse(data)["Country"]+ "\r\n");
        appendFile("The movie's language is: " + JSON.parse(data)["Language"]+ "\r\n");
        appendFile("Here's the movie's plot: " + JSON.parse(data)["Plot"]+ "\r\n");
        appendFile("The movie's actors are: " + JSON.parse(data)["Actors"]+ "\r\n");
        appendFile("Here's the movie's Rotten Tomatoes Rating: " + JSON.parse(data)["tomatoRating"]+ "\r\n");
        appendFile("Here's the movie's Rotten Tomatoes URL: " + JSON.parse(data)["tomatoURL"]+ "\r\n");

    });
}




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

	grabOMDB(input);

};

