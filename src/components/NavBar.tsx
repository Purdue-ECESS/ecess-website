import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {Typography} from "@material-ui/core";
import "../styles/navbar.css";

export function NavBar(props: any) {
    const {navLinks} = props;
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
    const [linkIdx, setLinkIdx] = useState(-1);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            expand="md"
            className={navColour ? "sticky" : "navbar"}
            style={{padding: 0, margin: 0, backgroundColor: '#CEB888'}}
        >
            <Container>
                <Navbar.Brand href="/">
                    <Typography>ECESS</Typography>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(!expand);
                    }}
                >
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link
                                className="hover-underline-animation"
                                as={Link}
                                to="/"
                                onClick={() => {
                                    setLinkIdx(-1);
                                    updateExpanded(false)
                                }}
                            >
                                <Typography style={{fontWeight: (linkIdx === -1 ? "bold": undefined)}}>
                                    Ambassadors
                                </Typography>
                            </Nav.Link>
                        </Nav.Item>

                        {navLinks ? navLinks.map((i, idx) => (
                            <Nav.Item>
                                <Nav.Link
                                    className="hover-underline-animation"
                                    as={Link}
                                    to={i[0]}
                                    onClick={() => {
                                        setLinkIdx(idx);
                                        updateExpanded(false)
                                    }}
                                >
                                    <Typography style={{fontWeight: (linkIdx === idx ? "bold": undefined)}}>
                                        {i[1]}
                                    </Typography>
                                </Nav.Link>
                            </Nav.Item>
                        )): <></>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

