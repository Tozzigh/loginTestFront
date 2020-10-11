const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			logged: false,
			user: {}
		},
		actions: {
			login: async logged => {
				let response = await fetch(
					"https://3000-ff47f39a-253f-4560-95ee-55cb7538c65f.ws-eu01.gitpod.io/login",
					{
						method: "POST",
						redirect: "follow",
						headers: new Headers({
							"Content-Type": "application/json"
						}),
						body: JSON.stringify({
							username: logged.username,
							password: logged.password
						})
					}
				);
				response = await response.json();
				if (response.access_token) {
					setStore({ logged: true, user: response.user });
				} else {
					alert("Bad username or password");
				}
			},
			logout: () => {
				setStore({ logged: false, user: {} });
			}
		}
	};
};

export default getState;
