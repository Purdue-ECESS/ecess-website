import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Link from 'next/link'
import Copyright from "../src/Copyright"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function ECESSNavBar() {
    const nav_links = [['/', 'Home'], ['/calendar', 'Calendar'], ['/fun', 'Fun'],
        ['/projects', 'Projects'], ['/about', 'About']];
    return (
        <Navbar bg="light" expand="lg">
            <Link href={"/"} passHref>
                <Navbar.Brand>Purdue ECE Ambassadors</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {nav_links.map((item, i) => {
                        return (
                            <Link key={item[0]} href={item[0]} passHref>
                                <Nav.Link>
                                    {item[1]}
                                </Nav.Link>
                            </Link>
                        )
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default function Layout({children}) {
    return (
        <div style={{margin: 0, height: "100vh", display: "flex", flexDirection: "column"}}>
            <div style={{flex: 1}}>
                <ECESSNavBar/>
                <main style={{margin: "0 auto", maxWidth: 1080}}>
                    <div style={{margin: 5}}>
                        {children}
                    </div>
                </main>
            </div>
            <Copyright/>
        </div>
    )
}