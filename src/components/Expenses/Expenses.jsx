/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020');

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

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilterChange={filterChangeHandler} selected={filteredYear} />
                {expenses.map((expense) =>
                    <ExpenseItem key={expense.id} item={expense} />
                )}
            </Card>
        </div>
    );
};

export default Expenses;
