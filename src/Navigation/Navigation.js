import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import Rating from '../Rating/Rating';
import RatingAll from '../Rating/RatingAll/RatingAll';
import FlightSearch from '../FlightSearch/FlightSearch';


const Navigation = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return(
        <Router style={{}}>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} size='lg'>
                <DropdownToggle caret>
                    Pages
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem href="/rating">Create a Review</DropdownItem>
                <DropdownItem href="/allrating">All Reviews</DropdownItem>
                <DropdownItem href="/flightsearch">Flight Search</DropdownItem>
                </DropdownMenu>
            </Dropdown>


            <Switch>
            <Route exact path="/rating"><Rating token={props.token}/></Route> 
            <Route exact path="/allrating"><RatingAll /></Route>
            <Route exact path="/flightsearch"><FlightSearch token={props.token}/></Route>
            </Switch>
        </Router>
    )
}

export default Navigation;