import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Link from 'next/link'
import Copyright from "../src/Copyright"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function ECESSNavBar(props) {
    const {className} = props;
    const nav_links = [['/calendar', 'Calendar'], ['/fun', 'Fun'],
        ['/projects', 'Projects'], ['/ambassadors', 'Ambassadors']];
    return (
        <Box boxShadow={3} className={className} style={{padding: 0, margin: 0}}>
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
        </Box>
    );
}

export default function Layout({children, maxWidth}) {
    return (
        <div style={{margin: 0, height: "100vh", display: "flex", flexDirection: "column"}}>
            <div style={{flex: 1, background: 'lightgoldenrodyellow'}}>
                <ECESSNavBar className={"sticky-top"}/>
                <main style={{margin: "0 auto", maxWidth: maxWidth}}>
                    <div>
                        {children}
                    </div>
                </main>
            </div>
            <Copyright style={{background: 'lightgoldenrodyellow'}}/>
        </div>
    )
}