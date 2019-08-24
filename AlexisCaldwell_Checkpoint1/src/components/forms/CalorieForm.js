import React from 'react';
import Button from '../buttons/Button';

const CalorieForm = props =>{
	return (
	<div id="addMeal">
		<form style={styles.myForm}>
		<p> Add a Meal: </p> 
		<div style={styles.post} id="add">
		<div style={styles.labels}>
		 <label> Time of Day: </label>        
		<select style={styles.input2}>
		  <option value="breakfast">Breakfast</option>
		  <option value="lunch">Lunch</option>
		  <option value="snack">Snack</option>
		  <option value="dinner">Dinner</option>
		</select>
		</div>
		<div style={styles.labels}>
		<label> Food Item: </label>
			<input style={styles.input2} type="text" id="food" placeholder="Food" />
		</div>
		<div style={styles.labels}>
		<label> Calories Per Serving: </label> 
		 	<input  style={styles.input} type="number" min="0" id="calories" placeholder="Calories" />

		<label> Servings: </label> 
		 	<input style={styles.input} type="number" min="0" id="servings" placeholder="Servings" />
		</div>
		<Button btnText="Add Meal" />
		</div>
		</form>
	 </div>
	)
}
	
	
export default CalorieForm;

const styles={
	myForm:{
		padding:'1%',
		width: '100%',
	},
	input:{
		borderRadius: '5px',
		fontSize: '1.25em',
		width: '35%',
	},
	input2:{
		borderRadius: '5px',
		fontSize: '1.25em',
		width: '71.25%',
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