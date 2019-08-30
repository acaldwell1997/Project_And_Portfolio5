import React from 'react';
// JavaScript Document

const eTable = props => {
 return(

	 

	 		<tbody>
				<tr>	
					<td> {props.val.exercise} </td> 
	 				<td> {props.val.minutes} </td> 
	 				<td> {props.val.total} </td>
	 			</tr>
			</tbody>

 )
 }

	
export default eTable;