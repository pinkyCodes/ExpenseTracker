/* eslint-disable react/prop-types */
import './ExpensesFilter.css';

const ExpensesFilter = ({ onFilterChange, selected }) => {

    const dropdownChangeHandler = (event) => {
        onFilterChange(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={dropdownChangeHandler} value={selected}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;

// some theory:
// two-way binding; controlled component -> all the logic is in the parent, in Expenses, and the parent passes that logic to the child via props
// the value as well as changes to the value are not handled in the component itself but in the parent component 
