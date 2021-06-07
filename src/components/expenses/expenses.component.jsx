import React from 'react'

import ExpenseComponent from './expense/expense.component'

export default function ExpensesComponent({expenses}) {

    return (
        <div className="column">
            <h2>Expenses</h2>
            {expenses.map(({number,name,category},index) => (
                <ExpenseComponent id={index} number={number} name={name} category={category}/>
            ))}
        </div>
    )
}
