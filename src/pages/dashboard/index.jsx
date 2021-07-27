import React from "react";
import VotesSection from "../../components/sections/VotesSection";

export default function Dashboard({ toggle, loginData }) {
	return (
		<div className="dashboard">
			<nav>
				<h2>Welcome</h2>

				<button onClick={toggle}>Log out</button>
			</nav>

			<VotesSection loginData={loginData} />
		</div>
	);
}
