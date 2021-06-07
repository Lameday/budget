import React from 'react'

import IncomeComponent from './income/income.component'

export default function IncomesComponent({ incomes }) {

    return (
        <div className="column">
            <h2>Incomes</h2>
            {incomes.map(({number,name},index) => (
                <IncomeComponent id={index} number={number} name={name}/>
            ))}
        </div>
    )
}
