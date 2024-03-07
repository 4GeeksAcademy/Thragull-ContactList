import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/AppContext";

import "../../styles/addNewContact.css";

export const AddNewContact = () => {
	const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [intCode, setIntCode] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const createContact = () =>{
        if (name !== "" && surname !== "" && email !=="" &&
            intCode !== "" && phone !== "" && address !== "" &&
            zipCode !== "" && city !== "" && country !== ""){

            let contact = {
                address : `${address}, ${zipCode} ${city} (${country})`,
                agenda_slug: store.userName,
                email: email,
                full_name: `${name} ${surname}`,
                phone: `+${intCode} ${phone}`
            }
            setName("");
            setSurname("");
            setEmail("");
            setIntCode("");
            setPhone("");
            setAddress("");
            setZipCode("");
            setCity("");
            setCountry("");
            navigate("/agenda");
            actions.addContact(contact);
            actions.getAgenda();
        }
        else
        {
            setShowAlert(true);
        }
    }


	return (
        <div id="addContact" className="contain">
            <h1 className="text-center p-0 my-4">Add New Contact</h1>
            <div id="form" className="mx-auto rounded-4 p-4">
                {showAlert && (<div className="alert alert-danger" role="alert">
                                 All fields must be filled
                                </div>)}
                <div className="contain row">
                    <fieldset className="col-6">
                        <label htmlFor="formName" className="form-label">Name</label>
                        <input id="formName" className="form-control" type="text" placeholder="Name" value={name}
                                onChange={(element)=> {setName(element.target.value)}} required />
                    </fieldset>
                    <fieldset className="col-6">
                        <label htmlFor="formSurname" className="form-label">Surname</label>
                        <input id="formSurname" className="form-control" type="text" placeholder="Surname" value={surname}
                                onChange={(element)=> {setSurname(element.target.value)}} required />
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
                    <fieldset className="col-4 col-lg-2">
                        <label htmlFor="formIntCode" className="form-label">Int. Code</label>
                        <input id="formIntCode" className="form-control" type="text" placeholder="i.e. +34" value={intCode}
                                onChange={(element)=> {setIntCode(element.target.value)}} required />
                    </fieldset>
                    <fieldset className="col-8 col-lg-10">
                        <label htmlFor="formPhone" className="form-label">Phone number</label>
                        <input id="formPhone" className="form-control" type="text" placeholder="Phone number" value={phone}
                                onChange={(element)=> {setPhone(element.target.value)}} required />
                    </fieldset>
                </div>
                <div className="row">
                    <fieldset className="col-8 col-lg-9">
                        <label htmlFor="formAddress" className="form-label">Address</label>
                        <input id="formAddress" className="form-control" type="text" placeholder="Address" value={address}
                                onChange={(element)=> {setAddress(element.target.value)}} required />
                    </fieldset>
                    <fieldset className="col-4 col-lg-3">
                        <label htmlFor="formZip" className="form-label">Zip Code</label>
                        <input id="formZip" className="form-control" type="text" placeholder="Zip Code" value={zipCode}
                                onChange={(element)=> {setZipCode(element.target.value)}} required />
                    </fieldset>
                </div>
                <div className="row">
                    <fieldset className="col-6">
                        <label htmlFor="formCity" className="form-label">City</label>
                        <input id="formCity" className="form-control" type="text" placeholder="City" value={city}
                                onChange={(element)=> {setCity(element.target.value)}} required />
                    </fieldset>
                    <fieldset className="col-6">
                        <label htmlFor="formCountry" className="form-label">Country</label>
                        <input id="formCountry" className="form-control" type="text" placeholder="Country" value={country}
                                onChange={(element)=> {setCountry(element.target.value)}} required />
                    </fieldset>
                </div>
                <div className="row pt-4 pe-3 justify-content-end">
                    <Link to="/agenda" className="btn btn-secondary me-2 col-5 col-md-3 col-lg-2" type="button">Return</Link>
                    <button onClick={createContact} className="btn btn-success col-5 col-md-3 col-lg-2" type="button">Add contact</button>
                </div>
            </div>
        </div>
    );
};