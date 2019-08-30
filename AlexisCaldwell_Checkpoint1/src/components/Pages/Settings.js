import React, { Component } from 'react'
import Button from '../buttons/Button'
import Preferences from '../forms/Preferences';
import Update from '../forms/Update';
import ExerciseForm from '../forms/ExerciseForm';
import Table from '../tables/Table';
import API from '../functions/api';




class Settings extends Component {
		 componentDidMount() {
			 //adds event listeners to colored buttons
	let coloredButton = document.querySelectorAll('.colorChoices button');
    for (let i = 0; i < coloredButton.length; i++){
        coloredButton[i].addEventListener('click', this.colorChanged);
    }
			 //on load event listener
	window.addEventListener('load', this.handleLoadS);
			 //adds event listener to button to update info
	document.querySelector('.sinfo button').addEventListener('click', this.info);
 }
	
	 handleLoadS() {
		 //put a value in the text fields for the update info
 		document.querySelector('#nameUpdate').value = localStorage.getItem("name");
		document.querySelector('#heightUpdate').value = localStorage.getItem("height");
		document.querySelector('#weightUpdate').value = localStorage.getItem("weight");
 }
	
	colorChanged(event){
		    //gets the selected color and update the header background color to the selected color
        let target = event.target;
        let bgColor = target.style.backgroundColor;
		document.querySelector('header').style.backgroundColor = bgColor;
		localStorage.setItem("color", document.querySelector('header').style.backgroundColor);
	}
	
	info(){
		//adds new info to the localhost if a value was inputted
		if(document.querySelector('#nameUpdate').value != ""){
		localStorage.setItem("name", document.querySelector('#nameUpdate').value);
		}
		if(document.querySelector('#heightUpdate').value != ""){
		localStorage.setItem("height", document.querySelector('#heightUpdate').value);
		}
		if(document.querySelector('#weightUpdate').value != ""){
		localStorage.setItem("weight", document.querySelector('#weightUpdate').value);
		}
	}
	render(){
		return(
			<section className="containers">
			<section className="decor">
			<section className="sinfo">
				<fieldset> 
					<legend> Update Your Info </legend>
					<Update /> 
				</fieldset>
			</section>
			<section className="spref">
				<fieldset> 
					<legend> Change Your Preferences </legend>
					<Preferences />
				</fieldset>
			</section>
			</section>
			</section>

		);
	}
}

export default Settings