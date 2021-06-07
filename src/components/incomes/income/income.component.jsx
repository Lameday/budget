import React from 'react'

import './income.styles.css'

export default function IncomeComponent ({ id, name, number }) {
    return (
        <div key={`Income ${id}`} className="expense-container">
            <p>{`Name: ${name}`}</p>
            <p>{`Amount: ${number} $`}</p>
        </div>
    )
}
