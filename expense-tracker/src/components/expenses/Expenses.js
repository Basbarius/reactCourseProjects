import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../ui/Card'
import './Expenses.css'

const Expenses = (props) => {
    const expenses = props.expenses
    const [enteredFilterYear, setEnteredFilterYear] = useState('');

    const onFilterHandler = (filterYear) => {
        setEnteredFilterYear(filterYear);
        console.log(enteredFilterYear);
    };

    return (
        <div>
            <ExpensesFilter onFilter={onFilterHandler}/>
            <Card className="expenses">
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
                <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
            </Card>
        </div>
    )
}

export default Expenses
