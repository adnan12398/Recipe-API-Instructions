var search;
var rID;



// function searchRecipe(){
// 	const settings = {
// 		"async": true,
// 		"crossDomain": true,
// 		"url": 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query='+search,
// 		"method": "GET",
// 		"headers": {
// 			"X-RapidAPI-Key": "020a1e0fa1mshf7a710d6a5d276bp1c379cjsnfe02e9854d05",
// 			"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
// 		}
// 	};
	
// 	$.ajax(settings).done(function (response) {
// 		let id = response.results[0].id;
// 		rID = id;

// 		console.log(rID);
// 		searchInstructions();
// 	});
// }

// function searchInstructions(){
// 	const settings = {
// 		"async": true,
// 		"crossDomain": true,
// 		"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+"607224"+"/information",
// 		"method": "GET",
// 		"headers": {
// 			"X-RapidAPI-Key": "020a1e0fa1mshf7a710d6a5d276bp1c379cjsnfe02e9854d05",
// 			"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
// 		}
// 	};
	
// 	$.ajax(settings).done(function (response) {
// 		console.log(response.analyzedInstructions[0].steps);
// 	});
// }

// function start(){
	
// 	searchRecipe();

// }

// start();


var searchInput = $("#btnInput");

searchInput.on("click", function(){
	let input = $("#searchBar").val();

	console.log(input);

	const settings = {
				"async": true,
				"crossDomain": true,
				"url": 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query='+input,
				"method": "GET",
				"headers": {
					"X-RapidAPI-Key": "020a1e0fa1mshf7a710d6a5d276bp1c379cjsnfe02e9854d05",
					"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
				}
			};
			
			$.ajax(settings).done(function (response) {
				// let id = response.results[0].id;

				console.log(response);
			
				let recipeResults = response.results;

				console.log(recipeResults.length);

				

				for(let i = 0; i < 10; i++){

					let recipeDiv = $("div");
					// let recipeElement = $("<h1>");
					let recipeImageElement = $("<img>");
				

					let recipeTitle = recipeResults[i].title;
					recipeImageElement.attr("src", recipeResults[i].image);

					recipeDiv.append(recipeImageElement);

					recipeDiv.append(recipeTitle);

					$("#results").append(recipeDiv);



				}
			});
	
	
	
})
