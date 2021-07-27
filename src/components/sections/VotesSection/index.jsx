import React, { useState } from "react";

export default function VotesSection() {
	const positions = ["President", "Vice President", "PRO"];
	const [president, setPresident] = useState({});
	const [vicePresident, setVicePresident] = useState({});
	const [pro, setPro] = useState({});

	const handleInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		if (
			name === "President01" ||
			name === "President02" ||
			name === "President03"
		) {
			setPresident({ ...president, [name]: value });
		}
		if (
			name === "Vice President11" ||
			name === "Vice President12" ||
			name === "Vice President13"
		) {
			setVicePresident({ ...vicePresident, [name]: value });
		}
		if (name === "PRO21" || name === "PRO22" || name === "PRO23") {
			setPro({ ...pro, [name]: value });
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const formData = [
			{
				presidents: president,
				vicePresidents: vicePresident,
				pros: pro,
			},
		];

		console.log(formData);
	};

	return (
		<div className="votes">
			<form onSubmit={handleFormSubmit}>
				{positions.map((position, i) => (
					<div className="wrapper">
						<label>{position}:</label>

						<input
							type="text"
							name={position + i + 1}
							onChange={handleInputChange}
						/>
						<input
							type="text"
							name={position + i + 2}
							onChange={handleInputChange}
						/>
						<input
							type="text"
							name={position + i + 3}
							onChange={handleInputChange}
						/>
					</div>
				))}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
