import React, {useState} from 'react';
import {Container, Form, Label, Input, Button} from 'reactstrap';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        console.log(username, password);
        fetch('http://localhost:8000/user/signin', {
            method: "POST",
            body: JSON.stringify({username: username, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {props.updateToken(data.sessionToken);}
        )
    }


    return (
        <Container>
                <Form onSubmit={submitForm}>
                    <h1>Log In</h1>
                    <Label>Username</Label>
                    <Input onChange={e => setUsername(e.target.value)}/>
                    <Label>Password</Label>
                    <Input onChange={e => setPassword(e.target.value)}/>
                    <br/>
                    <Button type="submit">Submit</Button>
                </Form>
        </Container>
    )
}

export default Login;