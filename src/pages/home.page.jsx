import React from 'react'
import { useFormik } from "formik";

import ExpensesComponent from '../components/expenses/expenses.component'
import Selector from '../components/select/select.component'
import IncomesComponent from '../components/incomes/incomes.component'


import './home.styles.css'

const categories = [
    {
        category:'Other',
        id:1
    },
    {
        category:'Transport',
        id:2
    },
    {
        category:'Health',
        id:3
    },
    {
        category:'Education',
        id:4
    },
    {
        category:'Entertainment',
        id:5
    },
]

let expenses = []
let incomes = []

export default function HomePage() {


    const formik = useFormik ({
        initialValues: {
            number: 0,
            name: "",
            typeOf: "",
            category: ""
        },
        onSubmit:(values,actions) => {
            if (values.typeOf === "Expense") {
                expenses.push(values)
                actions.resetForm();
            } else {
                incomes.push(values)
                actions.resetForm();
            }
        },
    })

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit} className='form-container'>
                <label>Amount</label>
                <input
                    id="number"
                    type="number"
                    name="number"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                    required
                    className="stretch"
                />
                <label>Name</label>
                <input
                    id="name"
                    type="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    required
                    className="stretch"
                />
                <div className="radio-container" >
                    <input
                        id="typeOf"
                        name="typeOf"
                        value="Income"
                        type="radio"
                        onChange={formik.handleChange}
                        required/> Income
                    <input
                        id="typeOf"
                        name="typeOf"
                        value="Expense"
                        type="radio"
                        onChange={formik.handleChange}
                        required/> Expense
                </div>
                {(formik.values.typeOf === "Expense") ?
                    <select
                        name="category"
                        id="category"
                        onChange={formik.handleChange}
                        className="stretch"
                    >
                            {categories.map(({category},index) => (
                                <Selector id={index} category={category}/>
                            ))}
                    </select>: null}
                <button type="submit" onClick={formik.handleSubmit}>Add</button>
            </form>

            <div className="columns" expenses={expenses} incomes={incomes}>
                <ExpensesComponent expenses={expenses}/>
                <IncomesComponent incomes={incomes}/>
            </div>
        </div>
    )
}
