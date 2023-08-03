/* eslint-disable react/prop-types */
import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = ({ onSaveExpenseData }) => {
    // multiple states
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(''); //string bc the event.target.value is always a string!!!
    const [enteredDate, setEnteredDate] = useState('');

    // single state object
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // the code below is NOT good practice!  
        // setUserInput({
        //     ...userInput, // keeping the other two properties when depending on previous state
        //     enteredTitle: event.target.value,
        // });

        // React schedules state updates, they're not performed instantly; theoretically, if we schedule a lot of state updates at the 
        // same time, we could be depending on an outdated state snapshot
        // this version is better since React will guarantee that we depend on the latest state snapshot
        // NB! if your state update depends on previous state, use the function syntax
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    // shared handler func - alternative to the separate handler funcs
    // const inputHandler = (id, value) => {
    //     if (id === 'title') {
    //         setEnteredTitle(value);
    //     } else if (id === 'amount') {
    //         setEnteredAmount(value);
    //     } else {
    //         setEnteredDate(value);
    //     }
    // };

    const submitHandler = (event) => {
        event.preventDefault();
        // call this on the event obj to prevent the form's default behaviour - to reload the page when submitted
        // this happens bc the client sends a request to the server (in our case the dev server) whenever a form is submitted
        // with the preventDefault() method nothing is sent anywhere and we handle the behaviour manually, as we wish

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        onSaveExpenseData(expenseData); // lifting state up!

        // clear the input upon submission
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>

            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle} // two way binding -> force the input's value to match the state variable...
                        onChange={titleChangeHandler} // ... and update the state variable on any edits!
                    />

                    {/* for the shared handler fun */}
                    {/* <input type='text' onChange={(event) => inputHandler('title', event.target.value)} /> */}
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    );
};

export default ExpenseForm;


// extra info on forms -> https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable
// useDeferredValue() -> for optimization 