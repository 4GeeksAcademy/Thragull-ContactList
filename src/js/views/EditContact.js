import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Context } from "../store/AppContext";

import "../../styles/editContact.css";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
    const [full_name, setFull_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    const editContact = () =>{
        let contact = {
            address : store.contact.address,
            agenda_slug: store.contact.agenda_slug,
            email: store.contact.email,
            full_name: store.contact.full_name,
            phone: store.contact.phone
        }
        if (full_name !== "") contact.full_name = full_name
        if (email !== "") contact.email = email
        if (phone !== "") contact.phone = phone
        if (address !== "") contact.address = address

            console.log(contact)
            setFull_name("");
            setEmail("");
            setPhone("");
            setAddress("");
            navigate("/agenda");
            actions.editContactById(params.theid, contact);
            actions.getAgenda();
    }

    const bringContact = () => {
        setFull_name(store.contact.full_name);
        setEmail(store.contact.email);
        setPhone(store.contact.phone);
        setAddress(store.contact.address);
    }

    useEffect (()=>{
        bringContact();
    }, []);

	return (
        <div id="editContact" className="contain">
            <h1 className="text-center p-0 my-4">Edit Contact</h1>
            <div id="editForm" className="mx-auto rounded-4 p-4">
                <div className="contain row">
                    <fieldset className="col-12">
                        <label htmlFor="formFull_name" className="form-label">Full Name</label>
                        <input id="formFull_name" className="form-control" type="text" placeholder="Name" value={full_name}
                                onChange={(element)=> {setFull_name(element.target.value)}} required />
                    </fieldset>
                </div>
                <div className="row">
                    <fieldset className="col-12">
                        <label htmlFor="formEmail" className="form-label">E-mail</label>
                        <input id="formEmail" className="form-control" type="email" placeholder="e-mail" value={email}
                                onChange={(element)=> {setEmail(element.target.value)}} required />
                    </fieldset>
                </div>
                <div className="row">
                    <fieldset className="col-12">
                        <label htmlFor="formPhone" className="form-label">Phone number</label>
                        <input id="formPhone" className="form-control" type="text" placeholder="Phone number" value={phone}
                                onChange={(element)=> {setPhone(element.target.value)}} required />
                    </fieldset>
                </div>
                <div className="row">
                    <fieldset className="col-12">
                        <label htmlFor="formAddress" className="form-label">Address</label>
                        <input id="formAddress" className="form-control" type="text" placeholder="Address" value={address}
                                onChange={(element)=> {setAddress(element.target.value)}} required />
                    </fieldset>
                </div>
                <div className="row pt-4 pe-3 justify-content-end">
                    <Link to="/agenda" className="btn btn-secondary me-2 col-5 col-md-3 col-lg-2" type="button">Return</Link>
                    <button onClick={editContact} className="btn btn-success col-5 col-md-3 col-lg-2" type="button">Edit Contact</button>
                </div>
            </div>
        </div>
    );
};