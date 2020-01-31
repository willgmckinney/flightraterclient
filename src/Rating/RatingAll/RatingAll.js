import React, { useState, useEffect } from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Row} from 'reactstrap';

const AllReviews = () => {
    const [allcards, setAllcards] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8000/user/allposts", {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
            })
        }).then(
            (res) => res.json()
        ).then((rating) => {
            setAllcards(rating);
        }).then(
            allCardMapper()
        )
    }, [])


    const allCardMapper = () => {
        return allcards.map((cardData, index) => {
        return(
            <Card className='cardStyle' style={{margin: '2.5em'}} key={index}>
                <CardBody>
                    <CardTitle>Airline: {cardData.airline}</CardTitle>
                    <CardSubtitle>Rating: {cardData.rating}</CardSubtitle>
                    <CardText>Date of Review: {cardData.date}</CardText>
                    <CardText>Description: {cardData.reason}</CardText>
                </CardBody>
            </Card>
        )
    })
    }

    return(
        <div>
        <h1>All Reviews Created</h1>
        <Row xs='4'>
        {allCardMapper()}
        </Row>
        </div>
    )
}

export default AllReviews;