import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import TransactionDetail from "../TransactionDetail/TransactionDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

export default function App() {
	let [isLoading, setIsLoading] = useState(false);
	let [transactions, setTransactions] = useState([]);
	let [transfers, setTransfers] = useState([]);
	let [error, setError] = useState(undefined);
	let [filterInputValue, setFilterInputValue] = useState("");
	let [newTransactionForm, setNewTransactionForm] = useState({});
	let [isCreating, setIsCreating] = useState(false);

	return (
		<div className="app">
			<BrowserRouter>
				<Navbar filterInputValue={filterInputValue} setFilterInputValue={setFilterInputValue} />
				<main>
					<Routes>
						<Route
							path="/"
							element={
								<Home
									isLoading={isLoading}
									transfers={transfers}
									transactions={transactions}
									filterInputValue={filterInputValue}
									newTransactionForm={newTransactionForm}
									setNewTransactionForm={setNewTransactionForm}
									isCreating={isCreating}
									setIsCreating={setIsCreating}
									error={error}
									setIsLoading={setIsLoading}
									setTransactions={setTransactions}
									setTransfers={setTransfers}
									setError={setError}
								/>
							}
						/>
						<Route path="/transactions/:transactionId" element={TransactionDetail}></Route>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}
