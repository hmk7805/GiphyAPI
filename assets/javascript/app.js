$(document).ready(function(){
	renderButtons();
	$('#addWord').click(newButton);
	$(document).on('click', '.wordBtn', displayGifs);
});
//preloaded destinations
var destArr = ['Ireland', 'Scotland','Greece', 'Great Barrier Reef', 'Paris', 'Bora Bora', 'Florence', 'Tokyo', 'Cusco', 'London', 'Rome', 'New York City', 'Maui', 'Cape Town', 'Barcelona', 'Sydney', 'Rio de Janeiro', 'Yellowstone', 'Amsterdam', 'Hong Kong', 'Cairo', 'Washington D.C.', 'Grand Canyon'];
//display function
function displayGifs(){
	$('#giphyView').empty();
	//store word choice from click event
	var word = $(this).attr('data-word');
	console.log(word);
	//api query
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + word + '&limit=10&api_key=dc6zaTOxFJmzC'
	//make ajax call to giphy api
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response){
		//make a div to hold response
		console.log('response data length ' + response.data.length)
		console.log(response);
		var newGiphy = $('<div class = "wordGif">');
		for (var i = 0; i < response.data.length; i++){	
			//store response in variables
			var rating = response.data[i].rating;
			//post to div
			var pOne = $('<p>').text('Rated: ' + rating);
			console.log(rating);
			var srcGif = response.data[i].embed_url;
			console.log(srcGif);
			var pTwo = $('<iframe src = "' + srcGif + '">');
			$('#giphyView').append(newGiphy);
			$('.wordGif').append(pOne);
			$('.wordGif').append(pTwo);
		};
	});
};
//render buttons function	
function renderButtons(){
	//clear buttonsView window
	$('#buttonsView').empty();
	//loop through destinations array
	for (var i = 0; i < destArr.length; i++) {
		//create button 
		var create = $('<button>');
		create.attr('data-word', destArr[i]);
		create.addClass('wordBtn');
		create.text(destArr[i]);
		//append to DOM
		$('#buttonsView').append(create);
	};
};

//new button addtion function
function newButton(){
		//store new word
		var word = $('#word-input').val().trim();
		//push word to array
		destArr.push(word);
		//run function
		renderButtons();
		//Allows the user to click 'enter' for input
		console.log(destArr)	
		return false;
}




