/* eslint-disable react/prop-types */
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ items }) => {
    if (items.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>Found no expenses.</h2>
        )
    }

    return (
        <ul className='expenses-list'>
            {items.map((expense) => <ExpenseItem key={expense.id} item={expense} />)}
        </ul>
    );
};

export default ExpensesList;