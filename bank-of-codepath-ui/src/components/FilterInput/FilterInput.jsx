import * as React from "react";
import "./FilterInput.css";

export default function FilterInput({ filterInputValue, handleOnChange }) {
	console.log("filterInputValue: ", filterInputValue);
	return (
		<div className="filter-input">
			<i className="material-icons">search</i>
			<input
				type="text"
				placeholder="Search transactions"
				onChange={handleOnChange}
				value={filterInputValue}
			/>
		</div>
	);
}
