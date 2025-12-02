// Button.js

import React from "react";
import '../assets/Button.css';

const Button = (props) => {
    return <button onClick={props.callApi}>
        Click to generate a joke.
    </button>;
}

// Export Button Component
export default Button;