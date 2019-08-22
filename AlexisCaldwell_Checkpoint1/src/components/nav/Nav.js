
// JavaScript Document
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component{
	render(){
		return(
		<nav style={styles.nav}> 
			<NavLink style={styles.navA} to="/Home"> Home </NavLink>
			<NavLink style={styles.navA} to="/Recipes"> Recipes </NavLink>
			<NavLink style={styles.navA} to="/Settings"> Settings </NavLink>
			</nav>
		)
	}
}


export default Nav;

const styles={
	nav:{
		display: 'flex',
		flexDirection: 'row',
	},
	navA:{
	margin: '5%',
		textDecoration: 'none',
		color: '#515151',
		
}
}