import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/AppContext";

import "../../styles/addNewContact.css";

export const AddNewContact = () => {
	const { store, actions } = useContext(Context);

	return (
        <div id="addContact" className="contain">
            <h1 className="text-center p-0 my-4">Add New Contact</h1>
            <div id="form" className="mx-auto rounded-4 p-4">
                <div className="contain row">
                    <fieldset className="col-6">
                        <label for="formName" className="form-label">Name</label>
                        <input id="formName" className="form-control" type="text" placeholder="Name" required />
                    </fieldset>
                    <fieldset className="col-6">
                        <label for="formSurname" className="form-label">Surname</label>
                        <input id="formSurname" className="form-control" type="text" placeholder="Surname" required />
                    </fieldset>
                </div>
                <div className="row">
                    <fieldset className="col-12">
                        <label for="formEmail" className="form-label">E-mail</label>
                        <input id="formEmail" className="form-control" type="email" placeholder="e-mail" required />
                    </fieldset>
                </div>
                <div className="row">
                    <fieldset className="col-4 col-lg-2">
                        <label for="formIntCode" className="form-label">Int. Code</label>
                        <input id="formIntCode" className="form-control" type="text" placeholder="i.e. +34" required />
                    </fieldset>
                    <fieldset className="col-8 col-lg-10">
                        <label for="formPhone" className="form-label">Phone number</label>
                        <input id="formPhone" className="form-control" type="text" placeholder="Phone number" required />
                    </fieldset>
                </div>
                <div className="row">
                    <fieldset className="col-9">
                        <label for="formAddress" className="form-label">Address</label>
                        <input id="formAddress" className="form-control" type="text" placeholder="Address" required />
                    </fieldset>
                    <fieldset className="col-3">
                        <label for="formZip" className="form-label">Zip Code</label>
                        <input id="formZip" className="form-control" type="text" placeholder="Zip Code" required />
                    </fieldset>
                </div>
                <div className="row">
                    <fieldset className="col-6">
                        <label for="formCity" className="form-label">City</label>
                        <input id="formCity" className="form-control" type="text" placeholder="City" required />
                    </fieldset>
                    <fieldset className="col-6">
                        <label for="formCountry" className="form-label">Country</label>
                        <input id="formCountry" className="form-control" type="text" placeholder="Country" required />
                    </fieldset>
                </div>
                <div className="row pt-4 pe-3 justify-content-end">
                    <button className="btn btn-secondary me-2 col-5 col-md-3 col-lg-2" type="button">Return</button>
                    <button className="btn btn-success col-5 col-md-3 col-lg-2" type="button">Add contact</button>
                </div>
            </div>
        </div>
    );
};