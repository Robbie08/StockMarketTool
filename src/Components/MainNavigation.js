import React from 'react';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'

class MainNavigation extends React.Component {

    render(){
        return(
            <div class="MainNav">
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">MarketPro</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#features">Login</Nav.Link>
                    <Nav.Link href="#pricing">Create Account</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Enter Company Name" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                </Navbar>
            </div>
        );
    }

}

export default MainNavigation;