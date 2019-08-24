import React, { Component } from 'react'
import Button from '../buttons/Button'
import CalorieForm from '../forms/CalorieForm';
import ExerciseForm from '../forms/ExerciseForm';
import Table from '../tables/Table';


class Home extends Component {
	componentDidMount() {

	window.addEventListener('load', this.handleLoadS);
	document.querySelector('#addMeal button').addEventListener('click', this.addCalories);
	document.querySelector('#addExercise button').addEventListener('click', this.addExercise);

 }
	addCalories(){
		let tod = document.querySelector('select').value;
		let f = document.querySelector('#food').value;
		let c = document.querySelector('#calories').value;
		let s = document.querySelector('#servings').value;
		let p = c*s;
		let cList = []
		cList.push({timeofday:tod, food:f, calories:c, servings:s, total:p});
		localStorage.setItem('cList', JSON.stringify(cList))
	}
	addExercise(){
			
		let e = document.querySelector('#exercise').value;
		let t = document.querySelector('#minutes').value;
		let b = document.querySelector('#burned').value;
		let p = t*b;
		let eList = []
		eList.push({exercise:e, minutes:t, burned:b, total:p});
		localStorage.setItem('eList', JSON.stringify(eList))
	}
	 handleLoadS() {
 		document.querySelector('.info div ul li:nth-child(1)').innerHTML = "Name: " + localStorage.getItem("name");
		document.querySelector('.info div ul li:nth-child(3)').innerHTML = "Height: " +localStorage.getItem("height")+'"';
		document.querySelector('.info div ul li:nth-child(2)').innerHTML = "Weight: " + localStorage.getItem("weight")+'lbs';
		let s = localStorage.getItem("height") * localStorage.getItem("height");
		let d = localStorage.getItem("weight") / s;
		let a = d * 703;
		 
		document.querySelector('.info div ul li:nth-child(4)').innerHTML = "BMI: " + a.toFixed(2);
 }
	
	render(){
		return(
			<section className="containers">
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