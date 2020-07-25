import React, {useState} from 'react';

//---------------- bootstrap components --------------------
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'


class MainNavigation extends React.Component {

    constructor(props) {
        super(props);
        // state to hold our form data
        this.state = {
            userStock: '',
        };
    }

    // will get form value and then update the current userStock in state
    onChange = (e) =>{   
        this.setState({userStock: e.target.value.toUpperCase(),}); 
    }


    // will send our userStock to the Stock.js class
    onBtnSubmit() {
    
        console.log("We did it!"); 
    }

  
    render(){

        return(
            <div className="MainNav">
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">MarketPro</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#features">Login</Nav.Link>
                    <Nav.Link href="#pricing">New Account</Nav.Link>
                    <Nav.Link href="#state">{this.state.userStock}</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl onChange={this.onChange} type="text" placeholder="Enter Company Name" className="mr-sm-2" />
                    <Button onClick={() => {this.onBtnSubmit()}} variant="outline-info">Search</Button>
                </Form>
                </Navbar>
            </div>
        );
    }

}

export default MainNavigation;