import React from "react";
import warning from "../../img/warning.png";
import logo from "../../img/logo.jpeg";
import "../../styles/home.css";

export const Home = () => (
	<div id="homeBoard" className="text-center my-5 p-5 container rounded-5">
		<div className="container">
			<img src={logo} className="rounded-circle"/>
			<h1>Welcome to Thragull Agenda</h1>
			<p>Feel free to have a look around</p>
		</div>
		<div className="alert alert-warning  container">
			<div className="d-flex justify-content-center">
				<img id="warning" className="" src={warning} />
				<h1 className="align-middle">Warning</h1>
				<img id="warning" className="" src={warning} />
			</div>
			<div className="container">
			This web app has been created solely for practice purposes.<br/> 
			The API that controls all data is 100% public and does not guarantee the privacy of any data you insert.<br/>
			For your own safety and security, please do not use any sensitive data that may be stolen and used against you or any third party.<br/><br/>
			Thank you.
			</div>
		</div>
	</div>
);
