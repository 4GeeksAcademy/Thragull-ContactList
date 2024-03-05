const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: [
				{
					address: "Rue 13 del Percebe",
        			agenda_slug: "Thragull",
        			email: "antcamal@gmail.com",
       				full_name: "Antonio Campos",
        			id: 26972672913,
        			phone: "+34666777555"
				},
				{
					address: "Rue 13 del Percebe",
        			agenda_slug: "Thragull",
        			email: "antcamal@gmail.com",
       				full_name: "Antonio Campos",
        			id: 26972672913,
        			phone: "+34666777555"
				}
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
			}
		}
	};
};

export default getState;
