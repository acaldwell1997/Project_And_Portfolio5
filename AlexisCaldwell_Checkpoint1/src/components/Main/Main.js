import React, { Component } from 'react';
import{ Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Recipes from '../Pages/Recipes';
import RecipeDetails from '../Pages/RecipeDetails';
import Settings from '../Pages/Settings';

class Main extends Component{
	 componentDidMount() {
    window.addEventListener('load', this.handleLoad);
 }

 handleLoad() {
 let bannerColor = localStorage.getItem("color");
		document.querySelector('header').style.backgroundColor = bannerColor;
 }

	render(){
		return(
			<section className="content main-content">
				<Route exact path='/' component={Home} />
				<Route exact path='/Home' component={Home} /> 
				<Route exact path='/Recipes' component={Recipes} /> 
				<Route exact path='/RecipeDetails' component={RecipeDetails} /> 
				<Route exact path='/Settings' component={Settings} /> 
			</section>
		);
	}
}

export default Main;