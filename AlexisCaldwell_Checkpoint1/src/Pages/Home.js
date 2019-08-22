import React, { Component } from 'react'
import Button from '../buttons/Button'
import CalorieForm from '../forms/CalorieForm';
import ExerciseForm from '../forms/ExerciseForm';
import Table from '../tables/Table';


class Home extends Component {
	
	render(){
		return(
			<section className="container">
			<section className="decor">
			<section className="calorieIn">
				<fieldset> 
					<legend> Calories In </legend>
					<CalorieForm />
				</fieldset>
			</section>
			<section className="calorieOut">
				<fieldset> 
					<legend> Calories Out </legend>
					<ExerciseForm />
				</fieldset>
			</section>
			</section>
			<section className="info">
				<fieldset> 
					<legend> Your Info </legend>
					<div>
						<ul>
							<li> Name </li>
							<li> Weight </li>
							<li> Height </li>
							<li> BMI </li>
						</ul>
						
						<Table /> 
					</div>
				</fieldset>
			</section>
			</section>

		);
	}
}

export default Home