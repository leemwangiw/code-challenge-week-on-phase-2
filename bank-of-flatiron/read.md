markdown
Copy code
# Bank of Flatiron

## Project Overview

Bank of Flatiron is a React application that displays a list of recent bank transactions. Users can add new transactions, filter transactions by description, and view all transactions in a table.

## Learning Goals

- Implement components, props, state, events, and data fetching in React.
- Practice ideation and planning for a web application.

## Requirements

- Fetch data from a local server running JSON DB server.
- Have a well-written README file.

## Project Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Step-by-Step Setup

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd bank-of-flatiron
Install dependencies:

bash
Copy code
npm install
Set up JSON server:

Create a db.json file in the project directory and add the following data:

json
Copy code
{
  "transactions": [
    {
      "id": 1,
      "date": "2023-01-01",
      "description": "Salary",
      "category": "Income",
      "amount": 1000
    },
    {
      "id": 2,
      "date": "2023-01-02",
      "description": "Groceries",
      "category": "Expense",
      "amount": -50
    }
  ]
}
Start the JSON server:

bash
Copy code
npx json-server --watch db.json --port 8001
Start the React application:

bash
Copy code
npm start
Open http://localhost:3000 in your browser.

Features
View Transactions: See a table of all transactions fetched from the JSON server.
Add Transaction: Fill out and submit the form to add a new transaction. The new transaction is added to the table and persisted to the backend.
Filter Transactions: Filter transactions by typing into the search bar. Only transactions with a description matching the search term are shown.
Components
App: Main component that manages state and renders other components.
TransactionsTable: Displays the list of transactions in a table.
TransactionForm: Form for adding new transactions.
SearchBar: Input field for filtering transactions by description.
Code Structure
The project structure is as follows:

csharp
Copy code
bank-of-flatiron/
├── public/
├── src/
│   ├── components/
│   │   ├── TransactionsTable.js
│   │   ├── TransactionForm.js
│   │   └── SearchBar.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
├── .gitignore
├── db.json
├── package.json
├── README.md
└── yarn.lock
Bonus Features
Sort Transactions: Sort transactions alphabetically by category or description.
Delete Transaction: Remove a transaction from the table.
Contributions
Contributions are welcome! Please fork the repository and create a pull request with your changes.