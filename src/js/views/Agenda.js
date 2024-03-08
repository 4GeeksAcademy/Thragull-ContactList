import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

import { Context } from "../store/AppContext";

import "../../styles/agenda.css";

export const Agenda = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);
    const [contactNameToDelete, setContactNameToDelete] = useState("");

    useEffect(() => {
        if (store.agenda.length > 0) {
            actions.getAgenda();
        }
    }, [store.agenda.length]);

    const editContact = (id) => {
        actions.getContactById(id)
            .then(() => {
                navigate("/edit-contact/" + id);
            })
            .catch((error) => {
                console.error("Error getting contact:", error);
            });
    };

    const handleDeleteContact = (id, name) => {
        setContactToDelete(id);
        setContactNameToDelete(name);
        setShowModal(true);
    };

    const confirmDeleteContact = () => {
        if (contactToDelete) {
            actions.deleteById(contactToDelete)
                .then(() => {
                    actions.getAgenda();
                    setShowModal(false);
                })
                .catch((error) => {
                    console.error("Error deleting contact:", error);
                });
        }
    };

    return (
        <div id="agendaSite" className="container pb-5">
            <div className="row justify-content-end">
                <Link to="/add-new-contact" className="btn btn-success mt-5 me-2 col-6 col-md-3 col-lg-2">Add new contact</Link>
            </div>
            <ul id="agenda" className="list-group my-5 rounded-4">
                {store.agenda.map((item, index) => {
                    return (
                        <li key={index} className="item list-group-item justify-content-between">
                            <div className="row">
                                <div className="col-4 col-lg-3">
                                    <img src={store.avatar[Math.floor(Math.random()*6)]} className="rounded-circle object-fit-fill" />
                                </div>
                                <div className="col-6 col-lg-8">
                                    <p className="mb-1 fs-4 fw-bold">{item.full_name}</p>
                                    <p className="mb-0 text-secondary"><i className="fa-solid fa-map-location-dot me-2"></i>{item.address}</p>
                                    <p className="mb-0 text-secondary"><i className="fa-solid fa-phone me-2"></i>{item.phone}</p>
                                    <p className="mb-0 text-secondary"><i className="fa-solid fa-envelope me-2"></i>{item.email}</p>
                                </div>
                                <div className="col-2 col-lg-1 d-flex flex-column my-auto">
                                    <a onClick={() => editContact(item.id)}><i className="fa-solid fa-pencil fs-4 mb-3"></i></a>
                                    <a onClick={() => handleDeleteContact(item.id, item.full_name)}><i className="fa-solid fa-trash-can fs-4"></i></a>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className="row justify-content-end mb-5">
                <Link to="/" className="btn btn-secondary me-2 col-6 col-md-3 col-lg-2">Back Home</Link>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the contact <strong>{contactNameToDelete}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                    <button className="btn btn-danger" onClick={confirmDeleteContact}>Delete</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
