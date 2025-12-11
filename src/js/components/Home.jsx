import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card"

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Card />
		</>
	);
};

export default Home;