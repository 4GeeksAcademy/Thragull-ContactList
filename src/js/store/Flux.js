import avatar1 from "../../img/Avatar1.png"
import avatar2 from "../../img/Avatar2.png"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userName:""
			,
			logged: false
			,
			agenda: []
			,
			avatar:[
				avatar1,
				avatar2
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
			login: (user) =>{
				// funcion para el Log In
				setStore({
					userName: user,
					logged: true
				});
				console.log("login ejecutado");
			},
			logout: () => {
				setStore({
					userName:"",
					logged: false
				});
				console.log("logout ejecutado")
			}
		}
	};
};

export default getState;
