import React, { Component } from 'react';
import { Button, Input, Form, FormGroup, Label, FormFeedback, FormText } from 'reactstrap';

class Dashboard extends Component {

    handleUsernameChange(event){
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange(event){
        console.log("-- changing password ---")
        this.setState({
            password: event.target.value
        })
    }

     submitCredentials() {

        console.log("-- going to invoke api ----");
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password
            })
        };

        fetch("API_LINK", requestOptions)
        .then(res => res.json())
        .then(
            (result)=>{
                console.log("Received from server: ", result);
            }
        )


        
    };

    constructor(props){
        super(props);
        this.state = {
            username:'default',
            password:''
        }

        this.handleUsernameChange=this.handleUsernameChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
    }

    render() {

        return (
            <>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="with a placeholder"
                            type="email"
                            onChange={this.handleUsernameChange}
                            value={this.state.username}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="password placeholder"
                            type="password"
                            onChange={this.handlePasswordChange}
                        />
                    </FormGroup>
                  
                 
                    <Button onClick={()=>this.submitCredentials()}>
                        Submit
                    </Button>
                </Form>
               
            </>)
    }

}

export default Dashboard;