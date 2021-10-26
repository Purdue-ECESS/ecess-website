import React from 'react';
import Copyright from "./copyright"
import {Nav, Navbar} from "react-bootstrap";
import {Box} from "@material-ui/core";

function ECESSNavBar(props) {
    const {className} = props;
    const nav_links = [['/calendar', 'Calendar'], ['/fun', 'Fun'],
        ['/ece', 'Lifestyle'], ['/ambassadors', 'Ambassadors']];
    return (
        <Box boxShadow={3} className={className} style={{padding: 0, margin: 0, backgroundColor: '#E0EEEA'}}>
            <Navbar expand="lg" style={{padding: 5, backgroundColor: '#E0EEEA'}}>
                <a href={"/"}>
                    <Navbar.Brand>Purdue ECE Ambassadors</Navbar.Brand>
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {nav_links.map((item, i) => {
                            return (
                                <a key={item[0]} href={item[0]}>
                                    <Nav.Link>
                                        {item[1]}
                                    </Nav.Link>
                                </a>
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
            <div style={{flex: 1}}>
                <ECESSNavBar className={"sticky-top"}/>
                <main style={{margin: "0 auto", maxWidth: maxWidth}}>
                    <div>
                        {children}
                    </div>
                </main>
            </div>
            <Copyright/>
        </div>
    )
}