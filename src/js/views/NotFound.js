import React, {useContext} from "react";

import { Context } from "../store/AppContext";

import "../../styles/notFound.css";

export const NotFound = () =>{
    const {store, actions}  = useContext(Context);

    return(
        <div id="bgNotFound" style={{ backgroundImage: `url(${store.notFound[Math.floor(Math.random() * 2)]})`}} >

        </div>
    )
}