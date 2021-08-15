import IndexPage from "./pages";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, BrowserRouter
} from "react-router-dom";
import Copyright from "./components/Copyright";
import CalendarPage from "./pages/calendar";
import FunPage from "./pages/fun";
import ECEPage from "./pages/ece";
import AboutPage from "./pages/ambassadors";
import {Nav, Navbar} from "react-bootstrap";
import React from "react";
import {Box} from "@material-ui/core";

function App() {
    const nav_links = [['/calendar', 'Calendar'], ['/fun', 'Fun'],
        ['/ece', 'Lifestyle'], ['/ambassadors', 'Ambassadors']];
    return (
        <BrowserRouter>
            <Router basename={'/ecea'}>
                <Box boxShadow={3} className={'sticky-top'} style={{padding: 0, margin: 0, backgroundColor: '#FFFFFF'}}>
                    <Navbar expand={"lg"} style={{padding: 5}}>
                        <Link to={"/"} style={{margin: 5, textDecoration: 'none'}}>
                            <Navbar.Brand>Purdue ECE Ambassadors</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                {nav_links.map((item, i) => {
                                    return (
                                        <Link to={item[0]}
                                              style={{margin: 5, textDecoration: 'none'}}
                                        >{item[1]}</Link>
                                    )
                                })}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Box>
                <Switch>
                    <Route exact path="/">
                        <IndexPage key={'index-key'} />
                    </Route>

                    <Route path="/calendar">
                        <CalendarPage />
                    </Route>

                    <Route path="/fun">
                        <FunPage />
                    </Route>

                    <Route path={"/ece"}>
                        <ECEPage/>
                    </Route>

                    <Route path={"/ambassadors"}>
                        <AboutPage />
                    </Route>
                </Switch>
                <Copyright />
            </Router>
        </BrowserRouter>
    );
}

export default App;
