import React, { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import NewExpense from './components/newExpense/NewExpense'

const DUMMY_EXPENSES = [
  {id: 'e1',title: "Car Insurance", amount: 256.35, date: new Date(2021, 3, 13)},
  {id: 'e2',title: "Course Purchase", amount: 99, date: new Date(2021, 7, 15)},
  {id: 'e3',title: "AirBnb", amount: 1003.35, date: new Date(2021, 11, 28)},
  {id: 'e4',title: "Plane Ticket", amount: 2546.35, date: new Date(2021, 7, 15)},
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevState => {
      return[
        expense,
        ...prevState
      ]
    })
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
