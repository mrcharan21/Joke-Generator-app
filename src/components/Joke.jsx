
import React from "react";
 
import Button from "./Button";
import '../assets/joke.css';

const Joke = () => {
    const [Joke, setJoke] = React.useState("");

    const fetchApi = () => {
       // fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
       fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit
`)
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };

    return (
        <div className="joke">
            <Button callApi={fetchApi} /> 
            <p>{Joke}</p>    
        </div>
    );
}

export default Joke;