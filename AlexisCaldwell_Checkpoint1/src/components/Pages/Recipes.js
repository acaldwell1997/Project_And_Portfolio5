import React, { Component } from 'react'
import Button from '../buttons/Button'
import CalorieForm from '../forms/CalorieForm';
import ExerciseForm from '../forms/ExerciseForm';
import Table from '../tables/Table';
import { NavLink } from 'react-router-dom'


class Recipes extends Component {
	componentDidMount() {
		document.querySelector('button').addEventListener('click', this.searchApi.bind(this));
		console.log(this);
		function afterSearch(){
			let articleClick = document.querySelectorAll('article');
			for (let i = 0; i < articleClick.length; i++){
			   articleClick[i].addEventListener('click', this.displayApi);
			}
		}
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
					
					let url2 = 'https://api.spoonacular.com/recipes/'+data.results[i].id+'/information?apiKey=8b2dde572e584b7da1830a29567ef455';
					let j = i + 1;
					//add an article tag
					locations += '<details> <summary> <article id="'+i+'">';
					//adds the image 
					locations += '<img src="'+data.baseUri + data.results[i].image+'" alt="'+data.results[i].title +'"/>';
					//adds the title of the recipe 
					locations += '<h3>' + data.results[i].title + '</h3>';
					//close the article tag 
					locations += '</article> </summary>';
					fetch(url2)
					  .then((resp) => resp.json()) // Transform the data into json
					  .then(function(data2) {
						console.log(data2);
						let locations2 = ''
						locations2 += '<h4>' + data2.aggregateLikes + ' Likes </h4>'
						locations2 += '<div class="artContain">'
						locations2 += '<div>'
						locations2 += '<h5> Ingredients </h5>'
						locations2 += '<ul class="ingredients">';
						for(let k = 0; k < data2.extendedIngredients.length; k++){
							locations2 += '<li>' + data2.extendedIngredients[k].original + '</li>';
						}
						
						locations2 += '</div> <div>'
						locations2 += '<h5> Instructions </h5>'
						locations2 += '</ul>';
						try{
						locations2 += '<ol class="instructions">';
						for(let k = 0; k < data2.analyzedInstructions[0].steps.length; k++){
							locations2 += '<li>' + data2.analyzedInstructions[0].steps[k].step + '</li>';
						}
						locations2 += '</ol>';
							locations2 += '</div>'
							locations2+= '</div>'
						}
						catch(e){
							console.log(e);
						}
						document.querySelector('details:nth-child('+j+')').insertAdjacentHTML('beforeend', locations2);
						
					})
					locations += '</details>';
			}
			//the data will be inserted after the end of the button tag
			document.querySelector(".rec").insertAdjacentHTML('beforeend', locations);


		})
	}
	
	
	
	displayApi(event){
		    
        let target = event.target;
        let num = target.id;
		console.log(num);
		let q = document.getElementById('search').value;
		//puts it into the url
		let url = 'https://api.spoonacular.com/recipes/search?apiKey=8b2dde572e584b7da1830a29567ef455&query='+q+'&number=5';
		fetch(url)
			  .then((resp) => resp.json()) // Transform the data into json
			  .then(function(data) { //uses that data to populate html
					let locations = '';
					document.querySelector(".rec").innerHTML = "";
					console.log(data.results[num].title);
			})
		}
	
	render(){

		
		return(
			<section className="containers"> 
			<section className="decor">
			<section className="sinfo2">
			<div className="label" style={styles.labels}>
				<input style={styles.input} type="text" placeholder="search" id="search" /> 
				<Button /*searchApi={this.searchApi}*/ btnText="Search"/>
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