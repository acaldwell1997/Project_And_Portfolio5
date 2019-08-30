// JavaScript Document

import React from 'react';
import Button from '../buttons/Button';

const Table = props =>{
	return (

			<tbody>
				<tr>
					<td> {props.val.weight} </td> 
	 				<td> {props.val.loss} </td> 
	 				<td> {props.val.percent} </td>
				</tr>
			</tbody>
	)
}
	
	
export default Table;
