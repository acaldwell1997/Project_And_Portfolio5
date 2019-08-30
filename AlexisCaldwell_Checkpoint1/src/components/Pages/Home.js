//importations of components to be used
import React, { Component } from 'react'
import Button from '../buttons/Button'
import CalorieForm from '../forms/CalorieForm';
import ExerciseForm from '../forms/ExerciseForm';
import Table from '../tables/Table';
import CTable from '../tables/cTable';
import ETable from '../tables/eTable';
import Info from '../info/Info';

class Home extends Component {
	//variables 
	state = {
		eList: [],
		cList: [],
		info: [],
	}
	
	
	componentDidMount() {
	//adds event listeners to buttons in the add calories and excercise forms 
	document.querySelector('#addMeal button').addEventListener('click', this.addCalories);
	document.querySelector('#addExercise button').addEventListener('click', this.addExercise);
		
		//gets information from local storage and sets it to the state
		let cList
		if(cList = JSON.parse(localStorage.getItem('cList'))){
			let cList = JSON.parse(localStorage.getItem('cList'))
			this.setState({cList})
		}
		else{
			console.log("Nothing to store!")
		}
		
		//gets information from local storage and sets it to the state
		let eList
		if(eList = JSON.parse(localStorage.getItem('eList'))){
			let eList = JSON.parse(localStorage.getItem('eList'))
			this.setState({eList})
		}
		else{
			console.log("Nothing to store!")
		}
	
		
		
		
		//gets information from local storage, manipulates it, and sets it to the state
		 let name = "Name: " + localStorage.getItem("name");
		let height = "Height: " +localStorage.getItem("height")+'"';
		let weight = "Weight: " + localStorage.getItem("weight")+'lbs';
		let s = localStorage.getItem("height") * localStorage.getItem("height");
		let d = localStorage.getItem("weight") / s;
		let a = d * 703;
		 
		let bmi = "BMI: " + a.toFixed(2)
		let info = [...this.state.info]
		info.push({name:name, weight:weight, height:height, bmi:bmi});
		 this.setState({info: [...this.state.info, {name:name, weight:weight, height:height, bmi:bmi}]});


 }
	addCalories = e =>{
		//gets the info from the user inputs on the form
		let tod = document.querySelector('select').value;
		let f = document.querySelector('#food').value;
		let c = document.querySelector('#calories').value;
		let s = document.querySelector('#servings').value;
		//multiplication for total of calories
		let p = c*s;
		//adds info to state and local storage 
		let cList = [...this.state.cList]
		cList.push({timeofday:tod, food:f, calories:c, servings:s, total:p});
		this.setState({cList: [...this.state.cList, {timeofday:tod, food:f, calories:c, servings:s, total:p}]});
		localStorage.setItem('cList', JSON.stringify(cList))
	}
	addExercise = e =>{
		//gets the info from the user inputs on the form
		let ex = document.querySelector('#exercise').value;
		let t = document.querySelector('#minutes').value;
		let b = document.querySelector('#burned').value;
		//multiplication for total of calories burned
		let p = t*b;
		//adds info to state and local storage
		let eList = [...this.state.eList]
		eList.push({exercise:ex, minutes:t, burned:b, total:p});
		this.setState({eList: [...this.state.eList, {exercise:ex, minutes:t, burned:b, total:p}]});
		localStorage.setItem('eList', JSON.stringify(eList))

	}
	
	render(){
		//almost like a for each loop, these go through each of the items in an array and adds to the page what each of the return values are (for example, CTable will return the html from the cTable file to be displayed on this page)
 let myListC = this.state.cList.map((element, i) =>{
 return <CTable key={i} val={element}/>
 })
 
  let myListE = this.state.eList.map((element, i) =>{
 return <ETable key={i} val={element}/>
 })
 
 let myInfo = this.state.info.map((element, i) =>{
 return <Info key={i} val={element}/>
 })

		return(
			<section className="containers">
			<section className="decor">
			<section className="calorieIn">
				<fieldset> 
					<legend> Calories In </legend>
					<table>	
						<thead>
							<tr> 
								<th> Time of Day </th>
								<th> Food </th>
								<th> Total Calories </th>
							</tr>
						</thead>

						{myListC}
				 	</table>
					<details> <summary> Add a Meal </summary> <CalorieForm /> </details>
				</fieldset>
			</section>
			<section className="calorieOut">
				<fieldset> 
					<legend> Calories Out </legend>
						<table> 
							<thead>
								<tr> 
									<th> Exercise </th>
									<th> Minutes </th>
									<th> Total Burned </th>
								</tr>
							</thead>

							{myListE}
						</table>
					<details> <summary> Add an Exercise </summary> <ExerciseForm /></details>
				</fieldset>
			</section>
			</section>
			<section className="info">
				<fieldset> 
					<legend> Your Info </legend>

						
						{myInfo}
						

				</fieldset>
			</section>
			</section>

		);
	}
}
//exports this page to be accessed
export default Home