import React, { useState } from "react";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
// import {BrowserRouter as Router}  from 'react-dom'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const toggle = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	return (
		<div className="App">
			{!isLoggedIn ? (
				<Home isLoggedIn={isLoggedIn} toggle={toggle} />
			) : (
				<Dashboard />
			)}
		</div>
	);
}

export default App;
