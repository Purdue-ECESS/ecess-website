import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {Typography} from "@material-ui/core";
import "../styles/navbar.css";


export function NavBar(props: any) {
    const [navColour, updateNavbar] = useState(false);
    const [linkIdx, setLinkIdx] = useState(-1);
    const [expand, updateExpanded] = useState(false);
    const [title, setTitle] = useState("Ambassadors");

    const setECESSPage = () => {
        setTitle(undefined);
        setNavLinks(ECESS_NAV_LINKS);
    }
    const setAmbassadorPage = () => {
        setTitle('Ambassadors');
        setNavLinks(AMBASSADOR_NAV_LINKS);
    }
    const AMBASSADOR_NAV_LINKS =  [
        {link: '/calendar', label: 'Calendar', onClick:  setAmbassadorPage},
        {link: '/fun', label: 'Fun', onClick:  setAmbassadorPage},
        {link: '/ece', label: 'ECE', onClick:  setAmbassadorPage},
        {link: '/members', label: 'Members', onClick:  setAmbassadorPage},
        // {link: '/temp', label: 'Temp', onClick:  setECESSPage}
    ];
    const ECESS_NAV_LINKS = [
        {link: '/board', label: 'Board', onClick:  setECESSPage},
        {link: '/committees', label: 'Committees', onClick:  setECESSPage},
        {link: '/', label: 'Ambassadors', onClick:  () => {
            setAmbassadorPage();
            setLinkIdx(0);
            }}
    ]
    const [navLinks, setNavLinks] = useState(AMBASSADOR_NAV_LINKS)

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
                        {title ?
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
                                        {title}
                                    </Typography>
                                </Nav.Link>
                            </Nav.Item>: <></>
                        }

                        {navLinks ? navLinks.map((i, idx) => (
                            <Nav.Item key={i.link}>
                                <Nav.Link
                                    className="hover-underline-animation"
                                    as={Link}
                                    to={i.link}
                                    onClick={() => {
                                        setLinkIdx(idx);
                                        i.onClick();
                                        updateExpanded(false);
                                    }}
                                >
                                    <Typography style={{fontWeight: (linkIdx === idx ? "bold": undefined)}}>
                                        {i.label}
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

