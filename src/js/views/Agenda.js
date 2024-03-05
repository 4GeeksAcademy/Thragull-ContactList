import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/AppContext";

import "../../styles/agenda.css";

export const Agenda = () => {
	const { store, actions } = useContext(Context);

	return (
		<div id="agendaSite" className="container pb-5">
			<div className="row justify-content-end">
				<a href="/add-new-contact" className="btn btn-success mt-5 me-2 col-6 col-md-3 col-lg-2">Add new contact</a>
			</div>
			<ul id="agenda" className="list-group my-5 rounded-4">
				{store.agenda.map((item, index) => {
					return (
						<li
							id="item"
							key={index}
							className="list-group-item justify-content-between">
							{/* Conditional render example
							// Check to see if the background is orange, if so, display the message*/}
							<div className="row">
								<div className="col-3">
									<img src={store.avatar[Math.floor(Math.random()*2)]} className="rounded-circle object-fit-fill" />
								</div>
								<div className="col-7 col-lg-8">
									<p className="mb-1 fs-4 fw-bold">{item.full_name}</p>
									<p className="mb-0 text-secondary"><i className="fa-solid fa-map-location-dot me-2"></i>{item.address}</p>
									<p className="mb-0 text-secondary"><i className="fa-solid fa-phone me-2"></i>{item.phone}</p>
									<p className="mb-0 text-secondary"><i className="fa-solid fa-envelope me-2"></i>{item.email}</p>
								</div>
								<div className="col-2 col-lg-1 d-flex flex-column my-auto">
									<a><i className="fa-solid fa-pencil fs-4 mb-3"></i></a>
									<a><i className="fa-solid fa-trash-can fs-4 "></i></a>

								</div>
							</div>
						</li>
					);
				})}
			</ul>
			<div className="row justify-content-end mb-5">
				<a href="/" className="btn btn-secondary me-2 col-6 col-md-3 col-lg-2">Back Home</a>
			</div>
		</div>
	);
};
