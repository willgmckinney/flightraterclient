import React from 'react';
import {Card, Container, Row, Button, CardBody, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

const RatingCards = (props) => {
    
    const deleteReview = (cardData) => {
        fetch(`http://localhost:8000/rating/delete/${cardData.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then(() => props.Refresh())
    }

    const cardMapper = () => {
        return props.cardData.map((cardData, index) => {
        return(
            <Card className='cardStyle' style={{margin: '2.5em'}} key={index}>
                <CardBody>
                    <CardTitle>Airline: {cardData.airline}</CardTitle>
                    <CardSubtitle><StarRatingComponent name="rate3" starCount={5} value={cardData.rating}/></CardSubtitle>
                    <CardText>Date of Review: {cardData.date}</CardText>
                    <CardText>Description: {cardData.reason}</CardText>
                    <Row>
                    <Button style={{width: '40%', margin: '0 .5em 0 1.2em'}} onClick={() => {props.updateReview(cardData); props.updateOn()}}>Update</Button>
                    <br/>
                    <Button style={{width: '40%', margin: '0 .5em'}} onClick={() => {deleteReview(cardData)}}>Delete</Button>
                    </Row>
                </CardBody>
            </Card>
        )
    })
    }

    return(
        <Container>
            <Row xs='4'>
                {cardMapper()}
            </Row>
        </Container>
    )
}

export default RatingCards;