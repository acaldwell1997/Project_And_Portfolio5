// JavaScript Document

import React from 'react';
import Button from '../buttons/Button';

const ExerciseForm = props =>{
	return (
		<table>
			<tr>
				<th> Weight </th>
				<th> Weight Loss </th>
				<th> Weight Loss Percentage </th>
			</tr>
			<tr>
				<td> 150lbs </td>
				<td> 0lbs </td>
				<td> 0% </td>
			</tr>
			<tr>
				<td> 145lbs </td>
				<td> 5lbs </td>
				<td> 3.38983% </td>
			</tr>
			<tr>
				<td> 135lbs </td>
				<td> 10lbs </td>
				<td> 7.14286% </td>
			</tr>
		</table>
	)
}
	
	
export default ExerciseForm;

const styles={
myForm:{
padding:'1%',
backgroundColor: '#ffffff',
color: 'rgb(163, 173, 194)',
display: 'flex',
	flexDirection: 'column',
	boxShadow: '0 0 5px 1px #dddddd',
},
	input:{
border: 'none',
borderRadius: '5px',
fontSize: '1.25em',
		height: '3em',
	},
	post:{
	display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: '0 0 1% 4%',
		alignItems: 'center',
}
}