import React, { Component } from 'react'
import Button from '../buttons/Button'

class Recipes extends Component {


	
	render(){

		
		return(
			<section className="containers"> 
			<section className="decor">
			<section className="sinfo">
				<input style={styles.input} type="text" placeholder="search" id="search" /> 
				<Button searchApi={this.searchApi} btnText="Search"/>
			</section>
			</section>
			</section>

		);
	}
}

export default Recipes

const styles={
	
	input:{
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