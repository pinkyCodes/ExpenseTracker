/* eslint-disable react/prop-types */
import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
    const year = date.getFullYear();
    const month = date.toLocaleString('en-GB', { month: 'long' });
    const day = date.toLocaleString('en-GB', { day: 'numeric' }); // '2-digit' also the same

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;
