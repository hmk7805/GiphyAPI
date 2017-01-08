$(document).ready(function(){
	
	appObj.renderButtons();
	$('.word').click(appObj.displayGifs());
	$('.word-input').click(appObj.newButton());

	var appObj = {
	//preloaded destinations
		destinationArr: ['Ireland', 'Scotland','Greece', 'Great Barrier Reef', 'Paris', 'Bora Bora', 'Florence', 'Tokyo', 'Cusco', 'London', 'Rome', 'New York City', 'Maui', 'Cape Town', 'Barcelona', 'Sydney', 'Rio de Janeiro', 'Yellowstone', 'Amsterdam', 'Hong Kong', 'Cairo', 'Washington D.C.', 'Grand Canyon'],
	//display function
		displayGifs: function(){
			//store word choice from click event
			//make ajax call to giphy api
			//make a div to hold response
			//store response in variables
			//post responseDiv in DOM
		},
	//render buttons function	
		renderButtons: function(){
			//clear buttonsView window
			//loop through destinations array
				//create button 
				//append to DOM
		},
	//new button addtion function
		newButton: function(){
			//store new word
			//push word to array
			renderButtons();
	//Allows the user to click 'enter' for input	
			return false;
		}
	}
	
})
