/* eslint-disable react/prop-types */
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(), // there're better options for ids
        };

        onAddExpense(expenseData); // lifting state up!
        setIsEditing(false);
    };

    const startEditingHandler = () => setIsEditing(true);

    const stopEditingHandler = () => setIsEditing(false);

    return (
        <div className="new-expense">
            {isEditing ? (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
            ) : (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
        </div>
    );
};

export default NewExpense;
