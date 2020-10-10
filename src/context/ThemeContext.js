import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
	const [state, changeState] = useState({
		isLightTheme: true,
		light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
		dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
	});

	const toggleTheme = () => {
		changeState({ ...state, isLightTheme: !state.isLightTheme });
	};
	return (
		<ThemeContext.Provider value={{ ...state, toggleTheme: toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
