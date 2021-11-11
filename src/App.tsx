import ECEAIndexPage from "./pages/ecea/ecea_index";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Copyright from "./components/copyright";
import ECESSCalendarPage from "./pages/ecess/ecess_calendar";
import ECEAFunPage from "./pages/ecea/ecea_fun";
import ECEAECEPage from "./pages/ecea/ecea_ece";
import AboutPage from "./pages/ecea/ecea_members";
import React, {useEffect, useState} from "react";
import {Box, Typography} from "@material-ui/core";
import {NavBar} from "./components/nav_bar";
import {ECESSHome} from "./pages/ecess/ecess_index";
import {WECEHome} from "./pages/wece/wece_index";
import {WECEMembers} from "./pages/wece/wece_members";
import {EcessBoard} from "./pages/ecess/ecess_board";
import {ECESSCommittess} from "./pages/ecess/ecess_committees";


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
        <Router className={"dark"} >
            <Box boxShadow={offset} className={'sticky-top'} >
                <NavBar />
            </Box>
            <Switch>
                {/*ECESS Pages*/}
                <Route exact path={"/"} component={ECESSHome}/>
                <Route path={"/board"} component={EcessBoard}/>
                <Route path={"/committees"} component={ECESSCommittess}/>
                <Route path={"/calendar"} component={ECESSCalendarPage}/>

                {/*WECE Pages*/}
                <Route exact path={"/wece"} component={WECEHome}/>
                <Route path={"/wece/members"} component={WECEMembers}/>

                {/*ECEA Pages*/}
                <Route exact path={"/ecea"} component={ECEAIndexPage}/>
                <Route path={"/ecea/fun"} component={ECEAFunPage}/>
                <Route path={"/ecea/ece"} component={ECEAECEPage}/>
                <Route path={"/ecea/members"} component={AboutPage}/>

                {/*Spark Page*/}
                <Route exact path={"/spark"}>
                    <div>
                        <iframe title={"spark"} src={"https://www.im-creator.com/free/aatik/the_spark_challenge_spring_2021"}
                                style={{width: '100%', height: "calc(100vh - 69px)"}}/>
                    </div>
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
