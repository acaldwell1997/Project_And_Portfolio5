import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {	
  return (
    <Router>
		<div className="container">
			<Header />
			<Main />
			<Footer /> 
		</div>
	</Router>
  ); 
}


export default App;
