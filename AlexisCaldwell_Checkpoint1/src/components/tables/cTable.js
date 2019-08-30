import React from 'react';
// JavaScript Document

const cTable = props => {
 return(

	 

	 		<tbody>
				<tr>	
					<td> {props.val.timeofday} </td> 
	 				<td> {props.val.food} </td> 
	 				<td> {props.val.total} </td>
	 			</tr>
			</tbody>

 )
 }

	
export default cTable;