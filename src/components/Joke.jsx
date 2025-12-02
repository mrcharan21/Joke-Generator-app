// Joke.js

import React from "react";
 
import Button from "./Button";
import '../assets/joke.css';

const Joke = () => {
    const [Joke, setJoke] = React.useState("");
    const [loading, setLoading] = React.useState(false); // Add loading state

    const fetchApi = () => {
        setLoading(true); // Set loading to true before fetching
        fetch("https://official-joke-api.appspot.com/jokes/programming/random")
            .then((res) => res.json())
            .then((data) => {
            setJoke(data[0].setup + " " + data[0].punchline);
            setLoading(false); // Set loading to false after fetching
            });
    };

    return (
        <div className="joke">
            <Button callApi={fetchApi} /> 
            {loading ? <p>Loading...</p> : <p>{Joke}</p>} {/* Show loading text */}
        </div>
    );
}

export default Joke;