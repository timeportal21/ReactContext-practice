import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
	const context = useContext(ThemeContext);
	return (
		<div>
			<button onClick={context.toggleTheme}>Toggle Theme</button>
		</div>
	);
};

export default ThemeToggle;
