import React from "react";
import NavBar from "./Navbar";
import Hero from "./hero";
import Cards from "./cards";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar/>
			<Hero/>
			<Cards/>
			<Footer/>
		</div>
	);
};


export default Home;