/* eslint-disable react/prop-types */
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card'

const Expenses = ({ expenses }) => {
    return (
        <Card className="expenses">
            {expenses.map((expense) =>
                <ExpenseItem key={expense.id} expense={expense} />
            )}
        </Card>
    )
}

export default Expenses;
