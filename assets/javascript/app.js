//preloaded destinations
var destArr = ['Ireland', 'Scotland','Greece', 'Great Barrier Reef', 'Paris', 'Bora Bora', 'Florence', 'Tokyo', 'Cusco', 'London', 'Rome', 'New York City', 'Maui', 'Cape Town', 'Barcelona', 'Sydney', 'Rio de Janeiro', 'Yellowstone', 'Amsterdam', 'Hong Kong', 'Cairo', 'Washington D.C.', 'Grand Canyon'];
//display function
function displayGifs(){
		//store word choice from click event
		var word = $('.wordBtn').attr('data-word');
		//api query
		var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + word + '&limit=10&api_key=dc6zaTOxFJmzC'
		//make ajax call to giphy api
		$.ajax({
			url: queryURL,
			method: 'GET'
		}).done(function(response){
			//make a div to hold response
			var newGiphy = $('<div class = "wordGif">');
			//store response in variables
			var rating = response.rating;
			//post to div
			var pOne = $('<p>').text('Rated: ' + rating);

			var srcGif = response.source;

			var pTwo = $('<img src = "' + srcGif + '">');
			
			$('#giphyView').append(newGiphy);
			$('.wordGif').append(pOne);
			$('.wordGif').append(pTwo);
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
		return false;
}
$('#addWord').click(newButton());
$('.wordBtn').click(displayGifs());
renderButtons();


