import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
export const Home = () => {
	const { store, actions } = useContext(Context);
	const [logged, setLogged] = useState({ username: "", password: "" });
	return (
		<div className="text-center mt-5 row w-50">
			<label htmlFor="username" className="col-4">
				Username:
			</label>
			<input
				id="username"
				type="text"
				className="col-6"
				onChange={e => setLogged({ ...logged, username: e.target.value })}
			/>
			<label htmlFor="password" className="col-4">
				Password:
			</label>
			<input
				id="password"
				type="password"
				className="col-6"
				onChange={e => setLogged({ ...logged, password: e.target.value })}
			/>
			{store.logged ? (
				<>
					<button className="btn-danger mx-5 col-2" onClick={() => actions.logout()}>
						Log out
					</button>
					<h2 className="col-4">Logged in as:</h2>
					<h3>{store.user.username}</h3>
				</>
			) : (
				<>
					<button
						className="btn-success mx-5 col-2"
						onClick={() => {
							logged.username != "" && logged.password != "" ? actions.login(logged) : "";
						}}>
						Log in
					</button>
					<h1 className="col-4">Not logged</h1>
				</>
			)}
		</div>
	);
};
