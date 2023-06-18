import React from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" steps= "0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"/>
                </div>

            </div>
            <div className="new_expense__actions"></div>
                <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;