/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ item }) => {
    const [title, setTitle] = useState(item.title); // this is basically arr destructuring; also, using const is fine bc we change the value with the set func, not with the = operator

    const clickHandler = () => {
        setTitle('Updated');
        // console.log(title); // this still shows the old value because useState schedules a re-render but first the rest of the code must be executed
    };

    return (
        <Card className='expense-item'>

            <ExpenseDate date={item.date} />

            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${item.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
};

export default ExpenseItem;
