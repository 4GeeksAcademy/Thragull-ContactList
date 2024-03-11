import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

import { Context } from "../store/AppContext";

import stop from "../../img/stop.png"

import "../../styles/agenda.css";

export const Agenda = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [showModalSingle, setShowModalSingle] = useState(false);
    const [showModalFull, setShowModalFull] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);
    const [contactNameToDelete, setContactNameToDelete] = useState("");
    const [emptyAgenda, setEmptyAgenda] = useState(true)

    useEffect(() => {
        if (store.agenda.length > 0) {
            actions.getAgenda();
            setEmptyAgenda(false);
        }
        else setEmptyAgenda(true);
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
        setShowModalSingle(true);
    };

    const handleDeleteAgenda = () => {
        setShowModalFull(true);
    };

    const confirmDeleteContact = () => {
        if (contactToDelete) {
            actions.deleteById(contactToDelete)
                .then(() => {
                    actions.getAgenda();
                    setShowModalSingle(false);
                })
                .catch((error) => {
                    console.error("Error deleting contact:", error);
                });
        }
    };

    const selectContact = (id) => {
        actions.getContactById(id)
            .then(() => {
                navigate("/contact/" + id);
            })
            .catch((error) => {
                console.error("Error getting contact:", error);
            });
    }

    const confirmDeleteAgenda = () => {
        actions.deleteFullAgenda()
            .then(() => {
                actions.getAgenda();
                setShowModalFull(false);
            })
            .catch((error) => {
                console.error("Error deleting contact:", error);
            });
    };

    return (
        <div id="agendaSite" className="container pb-5">
                
            <div className="row justify-content-end">
                <button onClick={handleDeleteAgenda} className="btn btn-danger mt-5 me-2 col-6 col-md-3 col-lg-2">Delete Agenda</button>
                <Link to="/add-new-contact" className="btn btn-success mt-5 me-2 col-6 col-md-3 col-lg-2">Add new contact</Link>
            </div>
            {emptyAgenda && (<div className="alert alert-info my-5">This agenda is currently empty. Add your first contact by pressing the green button</div>)}
            {!emptyAgenda && (<ul id="agenda" className="list-group my-5 rounded-4">
                {store.agenda.map((item, index) => {
                    return (
                        <li key={index} className="item list-group-item justify-content-between">
                            <div className="row">
                                <div className="col-4 col-lg-3">
                                    <img src={store.avatar[Math.floor(Math.random()*6)]} className="rounded-circle object-fit-fill" />
                                </div>
                                <div className="col-6 col-lg-8">
                                    <p onClick={() => selectContact(item.id)} className="mb-1 fs-4 fw-bold">{item.full_name}</p>
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
            </ul>)}
            <div className="row justify-content-end mb-5">
                <Link to="/" className="btn btn-secondary me-2 col-6 col-md-3 col-lg-2">Back Home</Link>
            </div>
            <Modal show={showModalSingle} onHide={() => setShowModalSingle(false)}>
                <Modal.Header className="bg-danger" closeButton>
                    <Modal.Title><img className="stop" src={stop}/> Warning <img className="stop" src={stop}/> </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-light">
                    You are about to delete the following contact: <strong>{contactNameToDelete}</strong><br/>
                    Are you sure you want to proceed?
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setShowModalSingle(false)}>Cancel</button>
                    <button className="btn btn-danger" onClick={confirmDeleteContact}>Delete</button>
                </Modal.Footer>
            </Modal>
            <Modal show={showModalFull} onHide={() => setShowModalFull(false)}>
                <Modal.Header className="bg-danger" closeButton>
                    <Modal.Title><img className="stop" src={stop}/> Warning <img className="stop" src={stop}/> </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-light">
                    You are about to delete <strong>ALL</strong> your contacts.<br/>
                    Are you sure you want to proceed?
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setShowModalFull(false)}>Cancel</button>
                    <button className="btn btn-danger" onClick={confirmDeleteAgenda}>Delete</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
