import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/AppContext";

import "../../styles/agenda.css";

export const Agenda = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Link to={"/add-new-contact"}>
				<button className="btn btn-success mt-5">Add new contact</button>
			</Link>
			<ul id="agenda" className="list-group my-5 rounded-4">
				{store.agenda.map((item, index) => {
					return (
						<li
							id="item"
							key={index}
							className="list-group-item justify-content-between">
							{/* Conditional render example
							// Check to see if the background is orange, if so, display the message*/}
							<p>{item.full_name}</p>
							<p className="mb-0">{item.address}</p>
							<p className="mb-0">{item.phone}</p>
							<p className="mb-0">{item.email}</p>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
