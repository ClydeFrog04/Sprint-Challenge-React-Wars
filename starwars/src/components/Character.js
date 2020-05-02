// Write your Character component here
//base code and example of how to build this was found here: https://reactstrap.github.io/components/carousel/
//additional state control and logic is my own
import React, {useEffect, useState} from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText
} from "reactstrap";
import axios from "axios";


export default function Character(props) {
    //set state
    const [characterHomeworld, setCharacterHomeworld] = useState("");//this will be a planet returned from an api call from the url at: props.characterData.homeworld
    let [characterFilm, setCharacterFilm] = useState("");//this will be an array of films from an api call from the url at: props.characterData.films

    //make api calls here
    useEffect(() => {
        axios.get(props.characterData.homeworld)
            .then(response => {
                setCharacterHomeworld(response.data.name);
            })
            .catch(console.log)
    }, []);


    //can't use useEffect in a call back :[ so I guess an old fashioned for loop it is
    // props.characterData.films.map(film =>{
    //     useEffect(() => {
    //         axios.get(film)
    //             .then(response => {
    //                 const temp = characterFilms;
    //                 temp.push(response.data.title);
    //                 setCharacterFilms(temp);
    //             })
    //             .catch(console.log)
    //     }, []);
    // });
    //they can't be used in loops either DX
    // for (const film in props.characterData.films) {
    //     useEffect(() => {
    //         axios.get(film)
    //             .then(response => {
    //                 const temp = characterFilms;
    //                 temp.push(response.data.title);
    //                 setCharacterFilms(temp);
    //             })
    //             .catch(console.log)
    //     }, []);
    // }
    //scrapping the idea to show all the movies a character was in. Gonna just show a random film from the list back from the api. This way there is a little variety
    //each time the site is run


    //get charfilm
    const randIndex = Math.floor(Math.random() * props.characterData.films.length);
    useEffect(() => {
        axios.get(props.characterData.films[randIndex])
            .then(response => {
                setCharacterFilm(response.data.title);
            })
            .catch(console.log)
    }, []);


    return (
        <div className="character">
            <Card body inverse color="info">
                <CardBody>
                    <CardTitle>{props.characterData.name}</CardTitle>
                    <CardSubtitle>Here is some of what we have on {props.characterData.name}!</CardSubtitle>
                    <CardText>{props.characterData.name} is from the planet {characterHomeworld}.</CardText>
                    <CardText>{props.characterData.name} made an appearance in {characterFilm}.</CardText>
                </CardBody>
            </Card>
        </div>
    );
};