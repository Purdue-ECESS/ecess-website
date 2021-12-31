import ECEAIndexPage from "./pages/ecea/ecea_index";
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";
import ECESSTheme from "./components/theme/mui/theme";
import Copyright from "./components/theme/copyright";
import ECESSCalendarPage from "./pages/ecess/ecess_calendar";
import ECEAFunPage from "./pages/ecea/ecea_fun";
import ECEAECEPage from "./pages/ecea/ecea_ece";
import AboutPage from "./pages/ecea/ecea_members";
import React, {useEffect, useState} from "react";
import {Box, ThemeProvider, Typography} from "@material-ui/core";
import {NavBar} from "./components/theme/nav_bar";
import {ECESSHome} from "./pages/ecess/ecess_index";
import {WECEHome} from "./pages/wece/wece_index";
import {WECEMembers} from "./pages/wece/wece_members";
import {EcessBoard} from "./pages/ecess/ecess_board";
import {ECESSCommittess} from "./pages/ecess/ecess_committees";
import {SparkIndex} from "./pages/spark/spark_index";
import {SparkSchedule} from "./pages/spark/spark_schedule";
import {SparkResults} from "./pages/spark/spark_results";
import {LoginPage} from "./pages/login";
import {DashboardIndex} from "./pages/dashboard/dashboard_index";
import Cookies from "universal-cookie";


function App() {
    const [offset, setOffset] = useState(0);
    const [user, setUser] = useState();

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
        if (user === undefined) {
            const cookies = new Cookies();
            const token = cookies.get('token');
            setUser(token);
        }
    }, [user]);
    return (
        <ThemeProvider theme={ECESSTheme} >
            <Router>
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
                    <Route exact path={"/spark"} component={SparkIndex} />
                    <Route path={"/spark/schedule"} component={SparkSchedule}/>
                    <Route path={"/spark/results"} component={SparkResults}/>

                    {/* Login Page */}
                    {user ?
                        <Redirect exact path={"/login"} to={"/dashboard"} /> :
                        <Route exact path={"/login"}
                               render={(props) => <LoginPage setUser={setUser} {...props} />}
                        />
                    }

                    {/*Dashboard Page*/}
                    {user ?
                        <Route exact path={"/dashboard"}
                               render={(props) => <DashboardIndex user={user} {...props} />}
                        /> :
                        <Redirect exact path={"/dashboard"} to={"/login"} />
                    }

                    <Route>
                        <Typography style={{textAlign: 'center', margin: 20}}>Sorry, Page is Not Found</Typography>
                    </Route>
                </Switch>
                <Copyright />
            </Router>
        </ThemeProvider>
    );
}

export default App;
