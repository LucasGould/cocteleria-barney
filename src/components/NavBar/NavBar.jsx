import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "../CartWidget/CartWidget";

import './assets/NavBar.css'
import logo from "./assets/barneylogo.png"

export const NavBar = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Barney's</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Coctelería</Nav.Link>
                        <Nav.Link href="#pricing">Vinos</Nav.Link>
                        <Nav.Link href="#pricing">Cervezas</Nav.Link>
                    </Nav>
                    <CartWidget contador={0} />
                </Container>
            </Navbar>
            <Container id="hero">
                <img src={logo} alt=""/>
                <h2>Barney's</h2>
            </Container>
            
        </header>
    );
}