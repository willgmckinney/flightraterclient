import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Rating from '../Rating/Rating';
import RatingAll from '../Rating/RatingAll/RatingAll';
import FlightSearch from '../FlightSearch/FlightSearch';


const Navigation = (props) => {

    return(
        <div>
        <Router>
            <Switch>
            <Route exact path="/"><Rating token={props.token}/></Route>
            <Route exact path="/rating"><Rating token={props.token}/></Route> 
            <Route exact path="/allrating"><RatingAll /></Route>
            <Route exact path="/flightsearch"><FlightSearch token={props.token}/></Route>
            </Switch>
        </Router>
        </div>
    )
}

export default Navigation;