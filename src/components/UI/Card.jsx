/* eslint-disable react/prop-types */
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className; //important!

    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card