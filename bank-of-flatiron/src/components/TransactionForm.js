import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send POST request to the JSON server
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newTransaction) => {
        addTransaction(newTransaction);
        setFormData({ date: "", description: "", category: "", amount: "" });
      })
      .catch((error) => console.error("Error adding transaction:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="date"
        value={formData.date}
        onChange={handleChange}
        placeholder="Date"
        required
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
