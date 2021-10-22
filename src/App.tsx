import IndexPage from "./pages";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Copyright from "./components/Copyright";
import CalendarPage from "./pages/calendar";
import FunPage from "./pages/fun";
import ECEPage from "./pages/ece";
import AboutPage from "./pages/members";
import React, {useEffect, useState} from "react";
import {Box, Typography} from "@material-ui/core";
import {NavBar} from "./components/NavBar";


function App() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            const tempOffset = window.pageYOffset;
            if (tempOffset < 10) {
                setOffset(tempOffset / 10 * 3);
            }
            else {
                setOffset(3);
            }
        }
    }, []);
    return (
        <Router basename={'/ecea'}>
            <Box boxShadow={offset} className={'sticky-top'} >
                <NavBar />
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

                <Route path={"/members"}>
                    <AboutPage />
                </Route>

                <Route>
                    <Typography style={{textAlign: 'center', margin: 20}}>Sorry, Page is Not Found</Typography>
                </Route>
            </Switch>
            <Copyright />
        </Router>
    );
}

export default App;
