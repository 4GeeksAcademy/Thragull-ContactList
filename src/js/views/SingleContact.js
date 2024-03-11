import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Context } from "../store/AppContext";

import "../../styles/singleContact.css";

export const SingleContact = props => {
    
    const { store, actions } = useContext(Context);

    return(
        <>
            <div id="singleContact" className="container mt-5 rounded-5">
                <div className="d-flex py-4">
                    <img src={store.avatar[Math.floor(Math.random()*6)]} className="mx-auto" />
                </div>
                <div id="name" className="d-flex">
                    <h1 className="mx-auto">{store.contact.full_name}</h1>
                </div>
                <div id="data">
                    <p><strong><i className="fa-solid fa-phone me-2"></i> Phone Number: </strong><span>{store.contact.phone}</span></p>
                    <p><strong><i className="fa-solid fa-envelope me-2"></i>E-mail: </strong><span>{store.contact.email}</span></p>
                    <p><strong><i className="fa-solid fa-map-location-dot me-2"></i>E-mail: </strong><span>{store.contact.address}</span></p>
                </div>
            </div>
            <div className="container mt-3">
                <Link to="/agenda" className="btn btn-secondary ms-auto col-5 col-md-3 col-lg-2" type="button">Return</Link>
            </div>
        </>
    );
};