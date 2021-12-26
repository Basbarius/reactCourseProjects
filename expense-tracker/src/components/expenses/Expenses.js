import React, { useState } from 'react'

import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import Card from '../ui/Card'
import './Expenses.css'

const Expenses = (props) => {
    const [enteredFilterYear, setEnteredFilterYear] = useState('2021');
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === enteredFilterYear);

    const onFilterChangeHandler = (filterYear) => {
        setEnteredFilterYear(filterYear);
    };

    return (
        <li>
            <Card className="expenses">
                <ExpenseFilter selectedYear={enteredFilterYear} onFilter={onFilterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </li>
    )
}

export default Expenses
