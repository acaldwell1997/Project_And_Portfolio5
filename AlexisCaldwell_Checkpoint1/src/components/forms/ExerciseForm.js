// JavaScript Document

import React from 'react';
import Button from '../buttons/Button';

const ExerciseForm = props =>{
	return (
		<form style={styles.myForm}>
		<p> Add an Exercise: </p> 
		<div style={styles.post} id="add">
		<div style={styles.labels}>
		<label> Exercise: </label>
			<input style={styles.input2} type="text" id="exercise" />
		</div>
		<div style={styles.labels}>
		<label> Calories Burned per Minute: </label> 
		 	<input style={styles.input} type="number" id="burned" />
		
		<label> Minutes Exercising: </label> 
		 	<input style={styles.input} type="number" id="minutes" />
		</div>
		<Button btnText="Add Exercise" />
		</div>
		</form>
	)
}
	
	
export default ExerciseForm;

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