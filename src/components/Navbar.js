import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const { isAuthenticated, toggleAuth } = useContext(AuthContext);

	const { bg, syntax } = isLightTheme ? light : dark;

	return (
		<nav style={{ background: bg, color: syntax }}>
			<h1>Context App</h1>
			<div onClick={toggleAuth}>
				{isAuthenticated ? "Logged In" : "logged Out"}
			</div>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Navbar;
