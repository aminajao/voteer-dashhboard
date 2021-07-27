import React, { useState } from "react";

export default function Home({ isLoggedIn, toggle }) {
	const [formData, setFormData] = useState([]);

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = () => {
		if (
			formData.email === "aminajao96@gmail.com" &&
			formData.password === "11111111"
		) {
			toggle();
			// localStorage.setItem("authenticated", true);
		}
	};

	return (
		<div className="home container">
			<form onSubmit={handleFormSubmit}>
				<h1>Admin Login</h1>

				<div className="input-container">
					<label htmlFor="">Email</label>
					<input
						type="text"
						placeholder="Input your email address"
						name="email"
						onInput={handleInputChange}
					/>
				</div>

				<div className="input-container">
					<label htmlFor="">Password</label>
					<input
						type="password"
						placeholder="********"
						name="password"
						onInput={handleInputChange}
					/>
				</div>

				<button type="submit">Login</button>
			</form>
		</div>
	);
}

// const Form = styl
