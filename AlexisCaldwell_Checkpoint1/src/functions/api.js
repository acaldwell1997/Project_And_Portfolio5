// JavaScript Document


//adds event listener 
//document.getElementb('searchbtn').addEventListener("click", searchApi);

//function to add searched items
function searchApi(){
	//gets the searched item
	let q = document.getElementById('search').value;
	//puts it into the url
	let url = 'https://api.spoonacular.com/recipes/search?apiKey=8b2dde572e584b7da1830a29567ef455&query='+q+'&number=5';
	//fetches it from the api
	  fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) { //uses that data to populate html
    let locations = '';
        for(var i = 0; i < data.results.length; i++) {
            //add an article tag
            locations += '<article>';
			//adds the title of the recipe 
            locations += '<h3>' + data.results[i].title + '</h3>';
            //close the article tag
            locations += '</article>';
        }
        //the data will be inserted after the end of the button tag
        document.querySelector("button").insertAdjacentHTML('afterend', locations);
    })
}