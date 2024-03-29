import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";

import { Home } from "./views/Home";
import {Login} from "./views/Login";
import {Agenda} from "./views/Agenda"
import {AddNewContact} from "./views/AddNewContact"
import {EditContact} from "./views/EditContact"
import {SingleContact} from "./views/SingleContact";
import { NotFound } from "./views/NotFound";
import injectContext from "./store/AppContext";

import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/agenda" element={<Agenda />} />
						<Route path="/add-new-contact" element={<AddNewContact />} />
						<Route path="/edit-contact/:theid" element={<EditContact />} />
						<Route path="/contact/:theid" element={<SingleContact />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
