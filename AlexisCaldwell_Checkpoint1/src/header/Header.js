import React from 'react';
import Nav from '../nav/Nav';
const Header = props => {
	return(
		<header style={styles.header}>
			<h1 style={styles.h1}> HealthNutz </h1> 
			<Nav />
		</header>
	)
}
export default Header;
const styles={
	header:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '.5% 5% .5% 5%',
		alignItems: 'center',
		width: '90%',
	},
	h1:{
		color: '#515151',
		fontWeight: 'normal',
	}
}