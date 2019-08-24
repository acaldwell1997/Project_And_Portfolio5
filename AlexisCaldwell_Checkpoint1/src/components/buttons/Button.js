import React from 'react';
const Button = props =>{
	return (
		<button className="postBtn" type="button" style={styles.Button} onClick={props.searchApi} >
			{props.btnText}
		</button>
	)
}
export default Button;
const styles={
Button: {
padding: '1%',
color: '#313131',
backgroundColor: '#ebebeb',
margin: '5%',
fontSize: '1em',
cursor: 'pointer',
borderRadius: '5px',
border: '1px solid #515151',
display: 'inline',
	width: '30%',
}
}