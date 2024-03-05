import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/AppContext";

import "../../styles/login.css";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return(
        <div id="bg-login" className="">
            <div id="login" className="rounded-4">
                <div id="user" className="mb-3 row">
                    <label  for="username" className="d-none d-lg-block ps-5 col-lg-2 col-form-label">Username</label>
                    <div className="px-5 ps-lg-0 col-lg-9 ms-lg-auto">
                        <input type="text" className="form-control" id="username" placeholder="Username"/>
                    </div>
                </div>
                <div id="pass" className="mb-3 row">
                    <label  for="password" className="d-none d-lg-block ps-5 col-lg-2 col-form-label">Password</label>
                    <div className="px-5 ps-lg-0 col-lg-9 ms-lg-auto">
                        <input type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                </div>
            </div>
        </div>
    );
};