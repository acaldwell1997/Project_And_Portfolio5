import React, { Component } from 'react'
import Button from '../buttons/Button'
import CalorieForm from '../forms/CalorieForm';
import ExerciseForm from '../forms/ExerciseForm';
import Table from '../tables/Table';
import { NavLink } from 'react-router-dom'



class Recipes extends Component {
	componentDidMount() {
		var recipeArt = document.querySelectorAll('.rec article');
		for (var i = 0; i < recipeArt.length; i++){
			recipeArt[i].addEventListener('click', this.displayApi);
		}
	 }

	displayApi(event){
        console.log(event);
		console.log(event.target);
	}
	searchApi(){
		//gets the searched item
		let q = document.getElementById('search').value;
		//puts it into the url
		let url = 'https://api.spoonacular.com/recipes/search?apiKey=8b2dde572e584b7da1830a29567ef455&query='+q+'&number=5';
		//fetches it from the api
		  fetch(url)
		  .then((resp) => resp.json()) // Transform the data into json
		  .then(function(data) { //uses that data to populate html
				let locations = '';
			  	document.querySelector(".rec").innerHTML = "";
			  	console.log(data);
				for(var i = 0; i < data.results.length; i++) {
					//add an article tag
					locations += '<article>';
					//adds the image 
					locations += '<a to="/RecipeDetails" onClick="displayApi"> <img src="'+data.baseUri + data.results[i].image+'" alt="'+data.results[i].title +'"/> </a>';
					//adds the title of the recipe 
					locations += '<a to="/RecipeDetails" onClick="displayApi"> <h3>' + data.results[i].title + '</h3> </a>';
					//close the article tag 
					locations += '</article>';
			}
			//the data will be inserted after the end of the button tag
			document.querySelector(".rec").insertAdjacentHTML('beforeend', locations);
		})
	}
	
		displaydApi(e){
		console.log(e);
		//gets the searched item
		let id = document.getElementById('search').value;
		//puts it into the url
		let url = 'https://api.spoonacular.com/recipes/'+id+'/information?apiKey=8b2dde572e584b7da1830a29567ef455';
		//fetches it from the api
		  fetch(url)
		  .then((resp) => resp.json()) // Transform the data into json
		  .then(function(data) { //uses that data to populate html
				let locations = '';
			  	console.log(data);
				for(var i = 0; i < data.results.length; i++) {
					//add an article tag
					locations += '<article>';
					//adds the image 
					locations += '<img src="'+data.baseUri + data.results[i].image+'" alt="'+data.results[i].title +'"/>';
					//adds the title of the recipe 
					locations += '<h3>' + data.results[i].title + '</h3>';
					//close the article tag 
					locations += '</article>';
			}
			//the data will be inserted before the end of the div.rec tag
			document.getElementsByClassName(".rec").insertAdjacentHTML('beforeend', locations);
		})
	}
	
	render(){

		
		return(
			<section className="containers"> 
			<section className="decor">
			<section className="sinfo2">
			<div className="label" style={styles.labels}>
				<input style={styles.input} type="text" placeholder="search" id="search" /> 
				<Button searchApi={this.searchApi} btnText="Search"/>
			</div>
			<div className="rec">

			</div>
			</section>
			</section>
			</section>

		);
	}
}

export default Recipes

const styles={
	
	input:{
		borderRadius: '5px',
		fontSize: '1.75em',
		width: '90%',
	},
	post:{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		margin: '0 4% 1% 4%',
	},
	labels:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	}
}