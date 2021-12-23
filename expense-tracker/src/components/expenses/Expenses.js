import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import Card from '../ui/Card'
import './Expenses.css'

const Expenses = (props) => {
    const [enteredFilterYear, setEnteredFilterYear] = useState('2021');
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === enteredFilterYear);

    const onFilterChangeHandler = (filterYear) => {
        setEnteredFilterYear(filterYear);
    };

    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear={enteredFilterYear} onFilter={onFilterChangeHandler}/>
            {
                filteredExpenses.map(expense => 
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                )
            }
        </Card>
    )
}

export default Expenses
