import React, {useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpeg"
import { Context } from "../store/AppContext";


export const Navbar = () => {
  const {store, actions} = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to="/" className="text-decoration-none">
          <img src={logo} id="logo" className="rounded-circle"/>
          <span className="navbar-brand mb-0 ms-2 h1 text-white">Thragull Agenda</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-end" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="text-decoration-none">
                <button className="nav-link text-white active" aria-current="page">Home</button>
              </Link>
            </li>
            {store.logged ? 
            <>
              <li className="nav-item">
                <Link to={"/agenda"} className="text-decoration-none">
                  <button className="nav-link text-white" aria-current="page" >Agenda</button>
                </Link>
              </li>
              <li className="nav-item">
                <p className="nav-link text-white" aria-current="page" >Welcome {store.userName}</p>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="text-decoration-none">
                  <button className="nav-link text-white" onClick={()=> actions.logout()}>Log Out</button>
                </Link>
              </li>
            </> 
            :
            <li className="nav-item">
              <Link to={"/login"} className="text-decoration-none">
                <button className="nav-link text-white">Login</button>
              </Link>
            </li>}
          </ul>
        </div>
      </div>
		</nav>
	);
};
