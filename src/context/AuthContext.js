import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const [auth, setAuth] = useState({
		isAuthenticated: false,
	});
	const toggleAuth = () => {
		setAuth({ ...auth, isAuthenticated: !auth.isAuthenticated });
	};
	return (
		<AuthContext.Provider value={{ ...auth, toggleAuth: toggleAuth }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
