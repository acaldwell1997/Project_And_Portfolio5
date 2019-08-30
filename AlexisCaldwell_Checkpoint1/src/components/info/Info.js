import React from 'react';
// JavaScript Document

const Info = props => {
 return(
<ul>
							<li> {props.val.name} </li>
							<li> {props.val.weight} </li>
							<li> {props.val.height} </li>
							<li> {props.val.bmi} </li>
	 </ul>
	 
 )
 }

	
export default Info;