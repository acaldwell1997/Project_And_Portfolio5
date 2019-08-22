import React, { Component } from 'react'
import Button from '../buttons/Button'
import Preferences from '../forms/Preferences';
import ExerciseForm from '../forms/ExerciseForm';
import Table from '../tables/Table';
import API from '../functions/api';


class Settings extends Component {
	
	render(){
		return(
			<section className="container">
			<section className="decor">
			<section className="sinfo">
				<fieldset> 
					<legend> Update Your Info </legend>

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
					<Button btnText="Delete" />
				</fieldset>
			</section>
			</section>
			</section>

		);
	}
}

export default Settings