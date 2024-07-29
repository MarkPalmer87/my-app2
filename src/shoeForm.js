import React, { useState } from 'react';
import './App.css';
import FormField from './formField'; // Import the FormField component

// Define the ShoeForm functional component
export default function ShoeForm(props) {
    // Declare a state variable `shoe` with an initial object containing default values
    // `setShoe` is a function used to update the state
    const [shoe, setShoe] = useState({
        id: new Date().getTime(), // Generate a unique ID based on the current timestamp
        name: '', // Initialize the shoe's name as an empty string
        desc: '', // Initialize the shoe's description as an empty string
        price: 0, // Initialize the shoe's price as 0
    });

    // Define a function `handleAdd` that calls the `addShoe` function from props with the current `shoe` object
    const handleAdd = () => {
        props.addShoe(shoe); // Pass the `shoe` object to the parent component through the `addShoe` prop
    };

    console.log(shoe); // Log the `shoe` object to the console for debugging

    return (
        // Return a JSX element representing the form for adding a shoe
        <div>
            <form>
                {/* FormField for the shoe's name */}
                <FormField 
                    name="Shoe Name" 
                    placeholder="Name" 
                    onChange={(val) => setShoe({
                        ...shoe, // Spread the existing properties of `shoe`
                        name: val, // Update the `name` property with the new value
                    })} 
                />
                {/* FormField for the shoe's description */}
                <FormField 
                    name="Shoe Description" 
                    placeholder="Description" 
                    onChange={(val) => setShoe({
                        ...shoe, // Spread the existing properties of `shoe`
                        desc: val, // Update the `desc` property with the new value
                    })} 
                />
                {/* FormField for the shoe's price */}
                <FormField 
                    name="Shoe Price" 
                    placeholder="Price" 
                    onChange={(val) => setShoe({
                        ...shoe, // Spread the existing properties of `shoe`
                        price: parseInt(val), // Update the `price` property with the new value, converting it to an integer
                    })} 
                />
                {/* Button to trigger the `handleAdd` function when clicked */}
                <button type='button' onClick={handleAdd}>Add</button>
            </form>
        </div>
    )
}
