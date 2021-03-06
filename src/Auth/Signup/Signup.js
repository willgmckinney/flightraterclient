import React, {useState} from 'react';
import {Container, Form, Label, Input, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';

const Signup = (props) => {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        console.log(fullname, username, password);
        fetch(`${APIURL}/user/signup`, {
            method: "POST",
            body: JSON.stringify({fullname: fullname, username: username, password: password}),
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
                    <h1>Sign Up</h1>
                    <Label>Name</Label>
                    <Input onChange={e => setFullname(e.target.value)} name="fullname" value={fullname} placeholder="ex: George Minno"/>
                    <Label>Username</Label>
                    <Input onChange={e => setUsername(e.target.value)} name="username" value={username} placeholder="Needs one number"/>
                    <Label>Password</Label>
                    <Input onChange={e => setPassword(e.target.value)} name="password" value={password} type='password' placeholder="Needs one number"/>
                    <br/>
                    <Button type="submit">Submit</Button>
                </Form>
        </Container>
    )
}

export default Signup;