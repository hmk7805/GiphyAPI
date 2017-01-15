$(document).ready(function(){
	renderButtons();
	$('#addWord').click(newButton);
	$(document).on('click', '.wordBtn', displayGifs);
});
var srcStill = [];
var srcGif = [];
//preloaded buttons
var wordArr = ['cat', 'piglet', 'sheep', 'elephant', 'giraffe', 'hawk', 'bald eagle', 'german shepherd'];
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
			console.log(response);
			//store response in variables
			var rating = response.data[i].rating;
			//post to div
			var spanOpen = $('<span>')
			//spanOpen.addClass('imgandrate')	

			var pRating = $('<p>').text('Rated: ' + rating);
			console.log(rating);
			srcGif.push(response.data[i].images.original.url);
			console.log(srcGif);
			srcStill.push(response.data[i].images.original_still.url);
			console.log(srcStill)
			var gifElement = $('<img src = "' + srcStill[i] + '">');
			gifElement.attr('class', 'gif')
			gifElement.attr('data-state', 'still')
			gifElement.attr('data-index', i)
			$('#giphyView').append(newGiphy);
			$('.wordGif').append(pRating);
			$('.wordGif').append(gifElement);
		};
	});
};
$(document).on('click', '.gif', function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      console.log('Gif Click Received');
      var state = $(this).attr('data-state');
      var index = $(this).attr('data-index');
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === 'still') {
        $(this).attr('src', srcGif[index]);
        $(this).attr('data-state', 'animate');
      } else {
        $(this).attr('src', srcStill[index]);
        $(this).attr('data-state', 'still');
      }
    });
//render buttons function	
function renderButtons(){
	//clear buttonsView window
	$('#buttonsView').empty();
	//loop through destinations array
	for (var i = 0; i < wordArr.length; i++) {
		//create button 
		var create = $('<button>');
		create.attr('data-word', wordArr[i]);
		create.addClass('btn btn-primary wordBtn');
		create.text(wordArr[i]);
		//append to DOM
		$('#buttonsView').append(create);
		$('#word-input').val('');

	};
};

//new button addtion function
function newButton(){
		//store new word
		var word = $('#word-input').val().trim();
		if (word !== '') {
			//push word to array
			wordArr.push(word);
			//run function
			renderButtons();
			console.log(wordArr)
		}
		//return false allows the user to click 'enter' and stops the page from refreshing.
		return false;
}




