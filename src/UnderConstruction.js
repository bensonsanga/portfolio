import React from 'react';
import logo from './logo.svg';

const UnderConstruction = () =>{
	return(
		<div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <p>
	            This website is under construction. Thank you for your patience
	          </p>
	          <a
	            className="App-link"
	            href="https://www.behance.net/bensonsang34cd"
	            target="_blank" 
	            rel="noopener noreferrer"
	          >
	            Learn more
	          </a>
	        </header>
	      </div>
		);
}

export default UnderConstruction;