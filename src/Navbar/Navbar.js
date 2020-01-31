import React from 'react';
import './Navbar.css';
import {Button, Navbar, NavbarBrand} from 'reactstrap';

const Topbar = (props) => {
    return(
        <Navbar>
        <NavbarBrand style={{margin: '0', padding: '0', align: 'center'}}>
      <img
        src={require('../Assets/RATEMYFLIGHT.png')}
        width="400"
        height="80"
        display="block"
        position="absolute"
        margin="auto"
        padding="auto"
        alt="RATE MY FLIGHT"
      />
        </NavbarBrand>
        <Button onClick={props.Logout}>Logout</Button>
        </Navbar>
    )
}

export default Topbar;