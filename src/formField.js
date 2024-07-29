import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

// Define the FormField functional component, taking `props` as a parameter
export default function FormField(props) {
    // Declare a state variable `state` with an initial value of an empty string
    // `setState` is a function used to update the value of `state`
    const [state, setState] = useState('');

    // Define a function `handleChange` that handles the change event of the input field
    const handleChange = (event) => {
        console.log(event); // Log the event object to the console for debugging
        setState(event.target.value); // Update the `state` variable with the new input value
        props.onChange(event.target.value); // Call the `onChange` prop function with the new input value
    }

    return (
        // Return a JSX element representing a form field with a label and an input element
        <div key={props.name}>
            {/* The label element displays the name of the form field and associates it with the input */}
            <label htmlFor={props.name.toLowerCase()}>{props.name}</label>
            {/* The input element for text input, with dynamic attributes for name and placeholder */}
            <input 
                type="text" 
                name={props.name.toLowerCase()} 
                placeholder={props.placeholder} 
                onChange={handleChange} // Set the `onChange` event handler to the `handleChange` function
            />
        </div>
    )
}
