

var products = [
	{
		name: "Big foot",
		description:"Big Foot subs are for the hungriest of hungry people. These subs are packed with delicious meat.",
		price:"$500",
		imgUrl: "imgs/big_foot_meat.jpg"
	},
	{
		name: "Dragon",
		description:"Mythical Meats brand canned dragon meat is one of the best-tasting, and only dragon meat out there!",
		price:"$600",
		imgUrl: "imgs/dragon_meat.jpg"
	},
	{
		name: "Unicorn",
		description:"Mythical Meats brand canned unicorn meat packs magic, rainbows, and awesome in every bite.",
		price:"$450",
		imgUrl: "imgs/unicorn_meat.jpg"
	},
	{
		name: "Goblin",
		description:"Packaged goblin meat is great for a quick bite anytime!",
		price:"$200",
		imgUrl: "imgs/goblin_meat.jpg"
	},
	{
		name: "Faun",
		description:"Oven roasted faun legs, served with roasted red potatoes.",
		price:"$900",
		imgUrl: "imgs/faun_legs.jpg"
	},
	{
		name: "Griffin",
		description:"Grilled griffon steaks are seasoned with italian herbs and spices.",
		price:"$500",
		imgUrl: "imgs/griffon_meat.jpg"
	},
	{
		name: "Cthulhu",
		description:"Oven roasted cthulhu, served with tangy marinara and ranch for dunking.",
		price:"$1,000",
		imgUrl: "imgs/cthulhu_meat.jpg"
	},
	{
		name: "Phoenix",
		description:"Phoenix is served raw to allow for its natural internal flame to cook itself right before your eyes. Once you finish eating, a new phoenix rises from the ashes on your plate.",
		price:"$1,500",
		imgUrl: "imgs/phoenix_meat.jpg"
	}
];



var wrapper = document.getElementById('productListing');

for ( var i = 0; i < products.length; i += 1) {
	wrapper.innerHTML += '<div class= "eachProduct">'
		+ '<img src= "' + products[i].imgUrl + '">'
		+ products[i].name
		+ products[i].description
		+ products[i].price 
		+  '</div>'
};


		






