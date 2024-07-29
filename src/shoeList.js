import React from 'react';
import Shoe from './shoe'; // Import the Shoe component

// Define the ShoeList functional component
export default function ShoeList(props) {
    return (
        // Map over the array of shoes passed via props and render a Shoe component for each shoe
        props.shoes.map((shoe) => (
            <Shoe 
                key={shoe.id} // Use the shoe's unique id as the key to help React identify elements
                shoe={shoe} // Pass the shoe object as a prop to the Shoe component
            />
        ))
    );
}
