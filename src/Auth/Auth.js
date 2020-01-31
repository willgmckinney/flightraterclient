import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const Auth = (props) => {



    return(
        <Container>
            <Row>
                <Col>
                <Login updateToken={props.updateToken}/>
                </Col>
                <Col>
                <Signup updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;