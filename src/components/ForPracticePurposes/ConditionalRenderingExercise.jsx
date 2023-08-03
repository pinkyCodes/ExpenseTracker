import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [isDeleteClicked, setIsDeleteClicked] = React.useState(false);

    const deleteClickHandler = () => {
        setIsDeleteClicked(!isDeleteClicked);
    };

    let warning =
        <div id="alert">
            <h2>Are you sure?</h2>
            <p>These changes can&apos;t be reverted!</p>
            <button onClick={deleteClickHandler}>Proceed</button>
        </div>;


    return (
        <div>
            {isDeleteClicked && warning}
            <button onClick={deleteClickHandler}>Delete</button>
        </div>
    );
}