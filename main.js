
var products = [
	{
		name: "Big foot"
		description:
		price:"$500"
		imgUrl:
	},
	{
		name: "Dragon"
		description:
		price:"$600"
		imgUrl:
	},
	{
		name: "Unicorn"
		description:
		price:"$450"
		imgUrl:
	},
	{
		name: "Troll" 
		description:
		price:"$150"
		imgUrl:
	},
	{
		name: "Goblin" 
		description:
		price:"$200"
		imgUrl:
	},
	{
		name: "Centaur" 
		description:
		price:"$900"
		imgUrl:
	},
	{
		name: "Griffin"
		description:
		price:"$500"
		imgUrl:
	},
	{
		name: "Cthulhu"
		description:
		price:"$1,000"
		imgUrl:
	},
	{
		name: "Phoenix"
		description:
		price:"$1,500"
		imgUrl:
	}
];

var wrapper = document.getElementById('wrapper');

for ( var loopTracker = 0; loopTracker < products.length; loopTracker += 1) {
	productsHtml += '<div class= "">'
		+ '<img src= "">' + products[i].imgUrl + 
		+ products[i].name
		+ products[i].description
		+ products[i].price 
		+ '> </div>'
};


		


for (...){
  // create the outer div (with classes 'entry panel row'):
  var entry_panel_row = document.createElement('div');

  // add the class names:
  entry_panel_row.className = 'entry panel row';

  // instead of document.write, add the HTML to this new element...
  entry_panel_row.innerHTML += '<div class="large-4 ...</div>';

  // now append the element (as a whole) to wrapper
  wrapper.appendChild(entry_panel_row);
}


