// JavaScript Document

import React from 'react';
import Button from '../buttons/Button';

const Preferences = props =>{
	return (
		<form style={styles.myForm}>
			<div style={styles.post} className="colorChoices">     
                <button type="button" style={styles.first}> Blue </button>
                <button type="button" style={styles.second}> Red </button>
                <button type="button" style={styles.third}> Pink </button> 
		</div>
		<div style={styles.post} className="colorChoices">   
                <button type="button" style={styles.fourth}> Green </button>
                <button type="button" style={styles.fifth}> Purple </button>
                <button type="button" style={styles.sixth}> Orange </button>
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
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: '0 4% 4% 4%',
	},
	labels:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	first:{
		backgroundColor: '#64C3FF',
		color: "transparent",
		width: '80px',
		height: '80px'
	},
	second:{
		backgroundColor: '#B22222',
		color: "transparent",
		width: '80px',
		height: '80px'
	},
	third:{
		backgroundColor: '#f47fbb',
		color: "transparent",
		width: '80px',
		height: '80px'
	},
	fourth:{
		backgroundColor: '#90c070',
		color: "transparent",
		width: '80px',
		height: '80px'
	},
	fifth:{
		backgroundColor: '#d896ff',
		color: "transparent",
		width: '80px',
		height: '80px'
	},
	sixth:{
		backgroundColor: '#FF5B21',
		color: "transparent",
		width: '80px',
		height: '80px'
}
}