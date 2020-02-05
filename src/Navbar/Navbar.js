import React, {useState} from 'react';
import './Navbar.css';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const Topbar = (props) => {
    
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => setCollapsed(!collapsed);
  
  return(
        <Navbar dark>
        <NavbarBrand style={{margin: '0', padding: '0', align: 'center'}}>
      <img
        src={require('../Assets/RATEMYFLIGHT.png')}
        width="340em"
        height="100em"
        alt="RATE MY FLIGHT"
      />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar >
            <NavItem>
              <NavLink href="/rating">Manual Review</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/flightsearch">Automatic Review</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/allrating">All Ratings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={props.Logout}>Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Navbar>
    )
}

export default Topbar;