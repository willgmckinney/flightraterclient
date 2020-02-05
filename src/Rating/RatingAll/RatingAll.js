import React, { useState, useEffect } from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Container} from 'reactstrap';
import APIURL from '../../helpers/environment';
import './RatingAll.css';

const AllReviews = () => {
    const [allcards, setAllcards] = useState([]);


    useEffect(() => {
        fetch(`${APIURL}/user/allposts`, {
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
            <div class="cloud">
            <img src={require('../../Assets/Cloud.png')} alt="cloud" style={{width: '30em', height: '15em'}}/>
            <div class="text-block">
                <h4>Airline: {cardData.airline}</h4>
                <h5>Rating: {cardData.rating}</h5>
                <p>Date of Review: {cardData.date}</p>
                <p>Description: {cardData.reason}</p>
            </div>
            </div>
        )
    })
    }

    // <Card className='cardStyle' style={{margin: '.8em'}} key={index}>
    //             <CardBody>
    //                 <CardTitle>Airline: {cardData.airline}</CardTitle>
    //                 <CardSubtitle>Rating: {cardData.rating}</CardSubtitle>
    //                 <CardText>Date of Review: {cardData.date}</CardText>
    //                 <CardText>Description: {cardData.reason}</CardText>
    //             </CardBody>
    //         </Card>

    return(
        <div>
        <h1>All Reviews Created</h1>
        <Container>
        {allCardMapper()}
        </Container>
        </div>
    )
}

export default AllReviews;