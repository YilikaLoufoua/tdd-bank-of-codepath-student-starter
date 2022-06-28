import * as React from "react";
import "./AddTransaction.css";
import { useState } from "react";

export default function AddTransaction({
	isCreating,
	setIsCreating,
	form,
	setForm,
	handleOnSubmit,
}) {
	const handleOnFormFieldChange = (event) => {
		let newForm = {};
		return;
	};
	return (
		<div className="add-transaction">
			<h2>Add Transaction</h2>

			<AddTransactionForm
				handleOnFormFieldChange={handleOnFormFieldChange}
				handleOnSubmit={handleOnSubmit}
			/>
		</div>
	);
}

export function AddTransactionForm({ handleOnFormFieldChange, handleOnSubmit }) {
	const [description, setDescription] = useState();
	const [category, setCategory] = useState();
	const [amount, setAmount] = useState();

	return (
		<div className="form">
			<div className="fields">
				<div className="field">
					<label>Description</label>
					<input name="description" type="text" onChange={handleOnFormFieldChange} />
				</div>
				<div className="field" type="text" onChange={handleOnFormFieldChange}>
					<label>Category</label>
					<input />
				</div>
				<div className="field half-flex" type="number" onChange={handleOnFormFieldChange}>
					<label>Amount (cents)</label>
					<input />
				</div>

				<button className="btn add-transaction" type="submit" onSubmit={handleOnSubmit}>
					Add
				</button>
			</div>
		</div>
	);
}
