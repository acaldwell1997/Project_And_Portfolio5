import React, { Component } from 'react'
import Button from '../buttons/Button'
import Preferences from '../forms/Preferences';
import Update from '../forms/Update';
import ExerciseForm from '../forms/ExerciseForm';
import Table from '../tables/Table';
import API from '../functions/api';




class Settings extends Component {
		 componentDidMount() {
	let coloredButton = document.querySelectorAll('.colorChoices button');
    for (let i = 0; i < coloredButton.length; i++){
        coloredButton[i].addEventListener('click', this.colorChanged);
    }
	window.addEventListener('load', this.handleLoadS);
	document.querySelector('.sinfo button').addEventListener('click', this.info);
 }
	
	 handleLoadS() {
 		document.querySelector('#nameUpdate').value = localStorage.getItem("name");
		document.querySelector('#heightUpdate').value = localStorage.getItem("height");
		document.querySelector('#weightUpdate').value = localStorage.getItem("weight");
 }
	
	colorChanged(event){
		    
        let target = event.target;
        let bgColor = target.style.backgroundColor;
		document.querySelector('header').style.backgroundColor = bgColor;
		localStorage.setItem("color", document.querySelector('header').style.backgroundColor);
	}
	
	info(){
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
			<section className="sdel">
				<fieldset> 
					<legend> Clear Your Favorites </legend>
			<p> Are you sure you want to delete your saved recipes? You will be unable to recover this. </p>
					<Button btnText="Delete" />
				</fieldset>
			</section>
			</section>
			</section>

		);
	}
}

export default Settings