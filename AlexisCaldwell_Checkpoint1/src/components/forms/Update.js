// JavaScript Document

import React from 'react';
import Button from '../buttons/Button';

const Preferences = props =>{
	return (
		<form style={styles.myForm}>
			<div style={styles.post} id="update">
				<div style={styles.labels}>
				<label> Name: </label>        
				<input style={styles.input2} type="text" id="nameUpdate" placeholder="Name"/>
				</div>
				<div style={styles.labels}>
				<label> Height: </label>        
				<input style={styles.input2} type="number" id="heightUpdate" min="0" placeholder="Height in Inches"/>
				</div>
				<div style={styles.labels}>
				<label> Weight: </label>        
				<input style={styles.input2} type="number" id="weightUpdate" min="0" placeholder="Weight in Pounds" />
				</div>
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