import React, {useState} from 'react';
import {Form, Input, Label, Button, Container, Row, Col} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import APIURL from '../../helpers/environment';

const RatingCreate = (props) => {
    const [airline, setAirline] =useState('');
    const [date, setDate] =useState('');
    const [rating, setRating] =useState('');
    const [reason, setReason] =useState('');

    
    const submitForm = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/rating/create`, {
            method: 'POST',
            body: JSON.stringify({airline: airline, date: date, rating: rating, reason: reason}),
            headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
            })
        }).then(res => res.json())
        .then((Data) => {
            console.log(Data);
            setAirline('');
            setDate('');
            setRating('');
            setReason('');
            props.Refresh();
        })
    }

    
    return(
        <Container>
               <Form onSubmit={submitForm}>
                    <h1>Rate Your Experience</h1>
                    <br/>
                    <Row>
                    <Label>Airline</Label>
                    <Input onChange={e => setAirline(e.target.value)} value={airline}/>
                    </Row>
                    <Row>
                        <Label>Rating</Label>
                    </Row>
                    <Row>
                        <StarRatingComponent name="rate1" starCount={5} value={rating} onStarClick={e => setRating(e)}/>
                    </Row>
                    <Row>
                    <Label>Date</Label>
                    <Input type="date" onChange={e => setDate(e.target.value)} value={date}/>
                    </Row>
                    <Row>
                    <Label>Reason</Label>
                    <Input onChange={e => setReason(e.target.value)} value={reason}/>
                    </Row>
                    <br/>
                    <Button type="submit">Rate It!</Button>
                </Form>
        </Container>
    )
}

export default RatingCreate;