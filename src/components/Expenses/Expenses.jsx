/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filteredItems = items.filter(item => item.date.getFullYear() === +filteredYear);

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilterChange={filterChangeHandler} selected={filteredYear} />
                <ExpensesList items={filteredItems}/>
            </Card>
        </div>
    );
};

export default Expenses;
