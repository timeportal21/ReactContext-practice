import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const BookList = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const { bg, syntax, ui } = isLightTheme ? light : dark;

	return (
		<div className="book-list" style={{ color: syntax, background: bg }}>
			<ul>
				<li style={{ background: ui }}>The way of kings</li>
				<li style={{ background: ui }}>the name of the wind</li>
				<li style={{ background: ui }}>the final empire</li>
			</ul>
		</div>
	);
};

export default BookList;
