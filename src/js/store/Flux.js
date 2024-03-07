import { json } from "react-router";
import avatar1 from "../../img/Avatar1.png"
import avatar2 from "../../img/Avatar2.png"
import avatar3 from "../../img/Avatar3.png"
import avatar4 from "../../img/Avatar4.png"
import avatar5 from "../../img/Avatar5.png"
import avatar6 from "../../img/Avatar6.png"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userName:""
			,
			logged: false
			,
			allAgendas:[]
			,
			agenda: []
			,
			avatar:[
				avatar1,
				avatar2,
				avatar3,
				avatar4,
				avatar5,
				avatar6
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getAllAgendas: () =>{
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda")
				.then((response)=> response.json())
				.then((data) => {setStore({allAgendas: data})})
				.catch((err) => err)
			}
			,
			getAgenda: () => {
				const store = getStore()

				fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${store.userName}`)
				.then((response)=> response.json())
				.then((data) => {setStore({agenda: data})})
				.catch((err) => err)
			}
			,
			addContact: (contact) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact`, {
					method: "POST",
					body: JSON.stringify(contact),
					headers: {
						"Content-Type" : "application/json"
					}
				}
				)
				.then((response)=> response.json())
				.then((data) => {console.log(data)})
				.catch((err) => err)
			}
			,
			deleteById: (id) => {
				return fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then((response) => response.json())
				.catch((err) => err);
			}
			,
			login: (user) =>{
				// funcion para el Log In
				setStore({
					userName: user,
					logged: true
				});
			},
			logout: () => {
				setStore({
					userName:"",
					logged: false
				});
			},
			mostrar: () =>{
				const store= getStore();
				console.log(store.userName);
				console.log(store.logged);
				console.log(store.allAgendas);
				console.log(store.agenda);
			}
		}
	};
};

export default getState;
