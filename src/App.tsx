import ECEAIndexPage from "./pages/ecea/ecea_index";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Copyright from "./components/Copyright";
import ECEACalendarPage from "./pages/ecea/ecea_calendar";
import ECEAFunPage from "./pages/ecea/ecea_fun";
import ECEAECEPage from "./pages/ecea/ecea_ece";
import AboutPage from "./pages/ecea/ecea_members";
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
                    <ECEAIndexPage key={'index-key'} />
                </Route>

                <Route path="/calendar">
                    <ECEACalendarPage />
                </Route>

                <Route path="/fun">
                    <ECEAFunPage />
                </Route>

                <Route path={"/ece"}>
                    <ECEAECEPage/>
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
