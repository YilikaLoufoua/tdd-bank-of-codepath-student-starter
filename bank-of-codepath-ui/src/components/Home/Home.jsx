import * as React from "react";
import AddTransaction from "../AddTransaction/AddTransaction";
import BankActivity from "../BankActivity/BankActivity";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../constants";
import axios from "axios";
import "./Home.css";

export default function Home({
	isLoading,
	setIsLoading,
	transactions,
	setTransactions,
	filterInputValue,
	setTransfers,
	newTransactionForm,
	setNewTransactionForm,
	isCreating,
	setIsCreating,
	error,
	setError,
}) {
	const [filteredTransactions, setFilteredTransactions] = useState();

	useEffect(() => {
		setIsLoading(true);
	}, []);

	useEffect(() => {
		async function getData() {
			try {
				let { data } = await axios.get(API_BASE_URL + "/bank/transactions");
				setTransactions(data.transactions);
			} catch (error) {
				setError(error);
			}
			try {
				let { data } = await axios.get(API_BASE_URL + "/bank/transfers");
				setTransfers(data.transfers);
			} catch (error) {
				setError(error);
			}
			setIsLoading(false);
		}
		getData();
	}, []);

	useEffect(() => {
		if (filterInputValue) {
			let filteredTransactions = transactions.filter((transaction) =>
				transaction.description.includes(filterInputValue)
			);
			setFilteredTransactions(filteredTransactions);
			console.log("filteredTransactions: ", filteredTransactions);
		}
	}, [filterInputValue]);

	const handleOnSubmitNewTransaction = () => {
		return;
	};
	if (error) {
		return <h2>{error.message}</h2>;
	}

	if (isLoading) {
		return (
			<div className="home">
				<AddTransaction
					isCreating={isCreating}
					setIsCreating={setIsCreating}
					form={newTransactionForm}
					setForm={setNewTransactionForm}
					handleOnSubmit={handleOnSubmitNewTransaction}
				/>
				<h1>Loading...</h1>;
			</div>
		);
	}

	return (
		<div className="home">
			<AddTransaction />
			<BankActivity transactions={filteredTransactions} />
		</div>
	);
}
