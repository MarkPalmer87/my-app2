import React from 'react'; // Import React to use JSX and other React features

// Define the Shoe functional component
export default function Shoe(props) {
    // Destructure the shoe object from props
    const shoe = props.shoe;

    // Return JSX that represents the UI for a single shoe
    return (
        <div key={shoe.id}> {/* Unique identifier for each shoe (useful in lists) */}
            <h3>{shoe.name}</h3> {/* Display the shoe's name */}
            <p>{shoe.desc}</p> {/* Display the shoe's description */}
            <p>${shoe.price.toFixed(2)}</p> {/* Display the shoe's price formatted to two decimal places */}
        </div>
    );
}
