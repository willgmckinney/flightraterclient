import React, {useState} from 'react';
import {Button, Form, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import APIURL from '../../helpers/environment';

const RatingEdit = (props) => {
    const [editAirline, setEditAirline] = useState(props.reviewToUpdate.airline);
    const [editDate, setEditDate] = useState(props.reviewToUpdate.date);
    const [editRating, setEditRating] = useState(props.reviewToUpdate.rating);
    const [editReason, setEditReason] = useState(props.reviewToUpdate.reason);

    const RatingUpdate = (event, rating) => {
        event.preventDefault();
        fetch(`${APIURL}/rating/update/${props.reviewToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({airline: editAirline, date: editDate, rating: editRating, reason: editReason}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => {props.Refresh(); props.updateOff();})
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Change Your Review</ModalHeader>
            <ModalBody>
            <Form onSubmit={RatingUpdate}>
                    <Label>Airline</Label>
                    <Input onChange={e => setEditAirline(e.target.value)} value={editAirline}/>
                    <Label>Rating</Label><StarRatingComponent name="rate4" starCount={5} value={editRating} onStarClick={e => setEditRating(e)}/>
                    <br></br>
                    <Label>Date</Label>
                    <Input type="date" onChange={e => setEditDate(e.target.value)} value={editDate}/>
                    <Label>Reason</Label>
                    <Input onChange={e => setEditReason(e.target.value)} value={editReason}/>
                    <br/>
                    <Button type="submit">Rate It!</Button>
            </Form>
            </ModalBody>
        </Modal>
    )
}

export default RatingEdit;