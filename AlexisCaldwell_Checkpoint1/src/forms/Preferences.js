// JavaScript Document

import React from 'react';
import Button from '../buttons/Button';

const Preferences = props =>{
	return (
		<form style={styles.myForm}>
			<p> Choose Your Preference: </p> 
			<div style={styles.post} id="add">
				<label> Color Theme: </label>        
				<input type="radio" value="ff0000" /> Red
				<input type="radio" value="00ff00" /> Green
				<input type="radio" value="0000ff"/> Blue
				<Button btnText="Save" />
			</div>
		</form>
	)
}
	
	
export default Preferences;

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