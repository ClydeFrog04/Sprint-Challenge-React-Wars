// Write your Character component here
//base code and example of how to build this was found here: https://reactstrap.github.io/components/carousel/
//additional state control and logic is my own
import React, {useState} from 'react';


export default function Character(props) {

    return (
        <div className="character">
            <h2>{props.characterData.name}</h2>
        </div>
    );
};