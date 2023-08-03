/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filteredItems = items.filter(item => item.date.getFullYear() === +filteredYear);

    /* derived/computed values -> when we set a state that's directly related to another state, we don't want to manage a separate spate*/
    /** we basically initiate a variable and dynamically compute its value*/
    // let filterInfoText = '2019, 2021, 2022';
    // if (filteredYear === '2019') {
    //     filterInfoText = '2020, 2021, 2022';
    // } else if (filteredYear === '2021') {
    //     filterInfoText = '2019, 2020, 2022';
    // } else {
    //     filterInfoText = '2019, 2020, 2021';
    // }

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    // if the logic gets too long in the return statement, we can evaluate it outside of it; it could be said this approach is more readable
    // moved to ExpensesList
    // let expensesContent = <p>You don&apos;t have any logged items for this year.</p>;
    // if (filteredItems.length !== 0) {
    //     expensesContent = filteredItems.map((expense) => <ExpenseItem key={expense.id} item={expense} />)
    // }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilterChange={filterChangeHandler} selected={filteredYear} />

                {/* with ternary operator */}
                {/* {filteredItems.length === 0 ? (
                    <p>You don&apos;t have any logged items for this year.</p>
                ) : (
                    filteredItems.map((expense) => <ExpenseItem key={expense.id} item={expense} />))
                } */}

                {/* with two separate && expressions */}
                {/* {filteredItems.length === 0 && <p>You don&apos;t have any logged items for this year.</p>}
                {filteredItems.length !== 0 && filteredItems.map((expense) => <ExpenseItem key={expense.id} item={expense} />)} */}

                {/* when logic is outside the return statement */}
                <ExpensesList items={filteredItems}/>
            </Card>
        </div>
    );
};

/* why do we need keys when mapping an array? -> 
if we don't, React adds the new element at the end and then walks through the items and updates their content to match the arr content, hence performance issues.
furthermore, if we're mapping a stateful component, this might lead to bugs cause any state changes in the particular component would be lost
with keys, React is able to uniquely identify each item and is therefore aware not only how long the array is but also where each item should be placed 
*/