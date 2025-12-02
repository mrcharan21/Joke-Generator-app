import React from "react";
 
import Button from "./Button";
import '../assets/joke.css';

const Joke = () => {
    const [Joke, setJoke] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const fetchApi = () => {
        setLoading(true);
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then((res) => res.json())
            .then((data) => {
            setJoke(data.setup + " " + data.punchline);
            setLoading(false);
            });
    }

    return (
        <div className="joke">
            <Button callApi={fetchApi} /> 
            <p>{loading ? "Loading..." : Joke}</p>    
        </div>
    );
};

export default Joke;