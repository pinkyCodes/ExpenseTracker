/* eslint-disable react/prop-types */
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(), // there're better options for ids
        };

        onAddExpense(expenseData); // lifting state up!
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
