

var products = [
	{
		name: "Big foot"
		description:"Big Foot subs are for the hungriest of hungry people. These subs are packed with delicious meat."
		price:"$500"
		imgUrl:
	},
	{
		name: "Dragon"
		description:"Mythical Meats brand canned dragon meat is one of the best-tasting, and only dragon meat out there!"
		price:"$600"
		imgUrl:
	},
	{
		name: "Unicorn"
		description:"Mythical Meats brand canned unicorn meat packs magic, rainbows, and awesome in every bite."
		price:"$450"
		imgUrl:
	},
	{
		name: "Troll" 
		description:"Troll, it's not great... but it's mythical"
		price:"$150"
		imgUrl:
	},
	{
		name: "Goblin" 
		description:"Packaged goblin meat is great for a quick bite anytime!"
		price:"$200"
		imgUrl:
	},
	{
		name: "Centaur" 
		description:"Oven roasted faun legs, served with roasted red potatoes."
		price:"$900"
		imgUrl:
	},
	{
		name: "Griffin"
		description:"Grilled griffon steaks are seasoned with italian herbs and spices."
		price:"$500"
		imgUrl:
	},
	{
		name: "Cthulhu"
		description:"Oven roasted cthulhu, served with tangy marinara and ranch for dunking."
		price:"$1,000"
		imgUrl:
	},
	{
		name: "Phoenix"
		description:"Phoenix is served raw to allow for its natural internal flame to cook itself right before your eyes. Once you finish eating, a new phoenix rises from the ashes on your plate."
		price:"$1,500"
		imgUrl:
	}
];



var wrapper = document.getElementById('wrapper');

for ( var loopTracker = 0; loopTracker < products.length; loopTracker += 1) {
	wrapper.innerHTML += '<div class= "">'
		+ '<img src= "' + products[i].imgUrl + '">'
		+ products[i].name
		+ products[i].description
		+ products[i].price 
		+ '> </div>'
};


		


/*for (...){
  // create the outer div (with classes 'entry panel row'):
  var entry_panel_row = document.createElement('div');

  // add the class names:
  entry_panel_row.className = 'entry panel row';

  // instead of document.write, add the HTML to this new element...
  entry_panel_row.innerHTML += '<div class="large-4 ...</div>';

  // now append the element (as a whole) to wrapper
  wrapper.appendChild(entry_panel_row);
}


