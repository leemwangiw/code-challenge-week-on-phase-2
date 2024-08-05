import React, { useState, useEffect } from "react";
import "./App.css";
import TransactionsTable from "./components/TransactionsTable";
import TransactionForm from "./components/TransactionForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
