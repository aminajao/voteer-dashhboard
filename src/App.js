import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
// import {BrowserRouter as Router}  from 'react-dom'

function App() {
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		const authenticated = localStorage.getItem("authenticated") === "true";
		setAuthenticated(authenticated);
	}, []);

	const toggle = () => {
		setAuthenticated(!authenticated);
		localStorage.removeItem("authenticated");
	};

	return (
		<div className="App">
			{!authenticated ? (
				<Home authenticated={authenticated} toggle={toggle} />
			) : (
				<Dashboard toggle={toggle} />
			)}
		</div>
	);
}

export default App;
