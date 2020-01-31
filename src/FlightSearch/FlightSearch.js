import React, { useState } from 'react';
import {Form, Input, Button, Label, Card, CardBody, CardTitle, CardText, } from 'reactstrap';
import FlightTransferModal from './FlightTransferModal/FlightTransferModal';

const FlightSearch = (props) => {

    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const datetimestring = `${date}T${time}:00.000`;
    const [results, setResults] = useState([]);
    const [createToggle, setCreateToggle] = useState(false);
    const [flightModalData, setFlightModalData] = useState({});

    const flightToCreate = (result) => {
        setFlightModalData(result);
    }
    
    const createOn = () => {
        setCreateToggle(true);
    }
    
    const createOff = () => {
        setCreateToggle(false);
    }

    const searchFlights = (e) => {
        e.preventDefault()
        fetch("http://localhost:8000/flight/myflight", {
            method: 'POST',
            body: JSON.stringify({airline: name, departureAirport: code, departureScheduledTime: datetimestring}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then(
            (res) => res.json()
        ).then((results) => {
            setResults(results);
        }).then(
            dataDisplay()
        )
    }

    const dataDisplay = () => {
        return results.map((result, index) => {
            return(
                <Card className='cardStyle' style={{margin: '2.5em'}}>
                    <CardBody key={index}>
                        <CardTitle>Was it this one?</CardTitle>
                        <CardText>Airline: {result.airline}</CardText>
                        <CardText>Arrival Airport: {result.arrivalAirport}</CardText>
                        <CardText>Arrival Time:{result.arrivalScheduledTime}</CardText>
                        <CardText>Departure Airport: {result.departureAirport}</CardText>
                        <CardText>Departure Airport: {result.departureScheduledTime}</CardText>
                        <CardText>Flight Number: {result.flightiataNumber}</CardText>
                        <Button onClick={() => {flightToCreate(result); createOn()}}>Rate this flight!</Button>
                    </CardBody>
                </Card>
            )
        })
    }

    return(
        <div>
            <Form onSubmit={searchFlights}>
                <Label>Departure Airport code</Label>
                <Input onChange={e => setCode(e.target.value)}></Input>
                <Label>Airline Name</Label>
                <Input onChange={e => setName(e.target.value)}></Input>
                <Label>Departure Date</Label>
                <Input type="date" onChange={e => setDate(e.target.value)}></Input>
                <Label>Departure Time</Label>
                <Input type="time" onChange={e => setTime(e.target.value)}></Input>
                <Button type="submit">search</Button>
            </Form>
            <div>
                {dataDisplay()}
            </div>
            {createToggle ? <FlightTransferModal flightModalData={flightModalData} createOff={createOff} token={props.token}/> : <div></div>}
        </div>
    )
}

export default FlightSearch;

// const baseURL = 'http://aviation-edge.com/v2/public/timetable?key=1ad327-3b3fb3'




//     const searchFlights = (e) => {
//     e.preventDefault();
    
//     fetch(`${baseURL}&airline_name=${name}`)
//     .then(res => res.json())
//     .then(data => data.map(
//         set => (console.log(
//             set.airline.name,

//             set.arrival.iataCode,

//             set.arrival.actualTime,

//             set.arrival.scheduledTime,

//             set.departure.iataCode,

//             set.departure.actualRunway,

//             set.departure.scheduledTime,

//             set.flight.iataNumber
//         ))
//     ))
//     .catch(err => console.log(err));
//     }