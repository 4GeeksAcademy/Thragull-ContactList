import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/AppContext";

import "../../styles/login.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const doLogin = () => {
        if (user !== "" && password !== "") {
            actions.login(user)
            actions.getAgenda()
            setUser("");
            setPassword("");
            navigate("/")
        }
    }

	return(
        <div id="bg-login" className="">
            <div id="login" className="rounded-4">
                <div id="user" className="mb-3 row">
                    <label  htmlFor="username" className="d-none d-lg-block ps-5 col-lg-2 col-form-label">Username</label>
                    <div className="px-5 ps-lg-0 col-lg-9 ms-lg-auto">
                        <input type="text" className="form-control" id="username" required value={user} 
                               onChange={(element)=> {setUser(element.target.value)}} 
                               placeholder="Username"/>
                    </div>
                </div>
                <div id="pass" className="mb-3 row">
                    <label  htmlFor="password" className="d-none d-lg-block ps-5 col-lg-2 col-form-label">Password</label>
                    <div className="px-5 ps-lg-0 col-lg-9 ms-lg-auto">
                        <input type="password" className="form-control" id="password"
                        onChange={(element)=> {setPassword(element.target.value)}} 
                        placeholder="Password"/>
                    </div>
                </div>
                <div className="row justify-content-end me-5 mt-4 text-decoration-none">
                    <button className="btn btn-primary col-6 col-md-4 col-lg-3" 
                                        onClick={doLogin}>Log in</button>
                </div>
            </div>
        </div>
    );
};