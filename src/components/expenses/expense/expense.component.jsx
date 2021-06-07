import React from 'react'

import './expense.styles.css'

export default function ExpenseComponent ({ id, name, number, category }) {
    return (
        <div key={`Expense ${id}`} className="expense-container">
            <p>{`Name: ${name}`}</p>
            <p>{`Amount: ${number} $`}</p>
            <p>{`Category: ${category}`}</p>
        </div>
    )
}
