import React, {useState} from 'react';
import {Button, Form, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import APIURL from '../../helpers/environment';


const FlightTransferModal = (props) => {
    const [Airline] = useState(props.flightModalData.airline);
    const [departureAirport] = useState(props.flightModalData.departureAirport);
    const [departureScheduledTime] = useState(props.flightModalData.departureScheduledTime);
    const [arrivalAirport] = useState(props.flightModalData.arrivalAirport);
    const [flightiataNumber] = useState(props.flightModalData.flightiataNumber);
    const [editRating, setEditRating] = useState('');
    const [editReason, setEditReason] = useState('');


    
        const RatingCreate = (e) => {
            e.preventDefault();
            fetch(`${APIURL}/rating/create`, {
                method: 'POST',
                body: JSON.stringify({airline: Airline, date: departureScheduledTime, rating: editRating, reason: editReason}),
                headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': props.token
                })
            }).then(res => res.json())
            .then((Data) => {
                console.log(Data);
                setEditRating('');
                setEditReason('');
                props.createOff();
            })
        }

    return(
        <Modal isOpen={true}>
        <ModalHeader>Rate This Flight</ModalHeader>
        <ModalBody>
        <Form onSubmit={RatingCreate}>
                <b><Label>Airline</Label></b>
                <br></br>
                <Label>{Airline}</Label>
                <br></br>
                <b><Label>Departure Airport</Label></b>
                <br></br>
                <Label>{departureAirport}</Label>
                <br></br>
                <b><Label>Departure Time</Label></b>
                <br></br>
                <Label>{departureScheduledTime}</Label>
                <br></br>
                <b><Label>Arrival Airport</Label></b>
                <br></br>
                <Label>{arrivalAirport}</Label>
                <br></br>
                <b><Label>Flight Number</Label></b>
                <br></br>
                <Label>{flightiataNumber}</Label>
                <br></br>
                <b><Label>Rating</Label></b>
                <br></br>
                <StarRatingComponent name="rate2" starCount={5} value={editRating} onStarClick={e => setEditRating(e)}/>
                <br></br>
                <b><Label>Reason</Label></b>
                <br></br>
                <Input onChange={e => setEditReason(e.target.value)} value={editReason}/>
                <br/>
                <Button type="submit">Rate It!</Button>
        </Form>
        </ModalBody>
    </Modal>
    )
}

export default FlightTransferModal;