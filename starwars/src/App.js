import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character";

const App = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
    const [characterList, setCharacterList] = useState([]);

    // Fetch characters from the API in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.


    //api call
    useEffect(() => {
        axios.get("https://swapi.py4e.com/api/people/")
            .then(response => {
                setCharacterList(response.data.results);
            })
            .catch(console.log)
    }, []);
    console.log(characterList);

    //map over each character, create a character element passing in the characters data, then this data will be used later in the App function return
    const characters = characterList.map(character =>{
        return(
            <Character key={character.name} characterData={character}/>
        )
    });


    return (
        <div className="App">
            <h1 className="Header">Characters</h1>
            {characters}
        </div>
    );
}

export default App;
