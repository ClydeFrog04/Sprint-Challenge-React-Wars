// Write your Character component here
//base code and example of how to build this was found here: https://reactstrap.github.io/components/carousel/
//additional state control and logic is my own
import React, {useState} from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText
} from "reactstrap";


export default function Character(props) {

    //todo: for my card style, reactstrap docs say I can just do <Card body inverse color="info"> to style a card with a blue background. This does
    //not work. https://reactstrap.github.io/components/card/
    return (
        <div className="character">
            <h2>{props.characterData.name}</h2>
            <Card body inverse color="info">
                <CardBody>
                    <CardTitle>{props.characterData.name}</CardTitle>
                    <CardSubtitle>This is placeholder text for the character. More api calls needed to add more</CardSubtitle>
                    <CardText>This is also some placeholder bs about {props.characterData.name}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};