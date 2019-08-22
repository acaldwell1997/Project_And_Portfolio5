import React, { Component } from 'react'
import Button from '../buttons/Button'
import CalorieForm from '../forms/CalorieForm';
import ExerciseForm from '../forms/ExerciseForm';
import Table from '../tables/Table';


class Recipes extends Component {
	
	render(){
		return(
			<section className="container">
			<section className="decor">
			<section className="sinfo">
				<input type="text" placeholder="search" id="search" /> <Button />
			</section>
			</section>
			</section>

		);
	}
}

export default Recipes