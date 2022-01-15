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
import {ECESSHome} from "./pages/ecess/ecess_index";
import {WECEHome} from "./pages/wece/wece_index";
import {WECEMembers} from "./pages/wece/wece_members";
import {EcessBoard} from "./pages/ecess/ecess_board";
import {SparkIndex} from "./pages/spark/spark_index";
import {SparkResults} from "./pages/spark/spark_results";
import {LoginPage} from "./pages/login";
import {DashboardIndex} from "./pages/dashboard/dashboard_index";
import {getAuth} from "firebase/auth";
import {NavBar} from "./components/theme/nav_bar";
import "src/styles/index.css";
import {SparkMembers} from "./pages/spark/spark_members";
import {MyFb} from "./data/data_fb";
import {CircularProgress, ThemeProvider, Typography} from "@mui/material";
import {FullScreenLoading} from "./components/utils/loading";

function App() {
    MyFb.loadFb();
    const [offset, setOffset] = useState(0);
    const [user, setUser] = useState(undefined);

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
    }, [user]);
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
        setUser(user);
    })
    return (
        <ThemeProvider theme={ECESSTheme} >
            <Router>
                <NavBar user={user} />
                <Switch>
                    {/*ECESS Pages*/}
                    <Route exact path={"/"} component={ECESSHome}/>
                    <Route path={"/board"} component={EcessBoard}/>
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
                    <Route path={"/spark/members"} component={SparkMembers}/>
                    <Route path={"/spark/fa2021"} component={SparkResults}/>

                    {/* Login Page */}
                    <Route exact path={"/login"}
                           render={(props) => {
                               if (user === null) {
                                   return <LoginPage setUser={setUser} {...props} />
                               }
                               if (user === undefined) {
                                   return (
                                       <FullScreenLoading />
                                   )
                               }
                               return <Redirect exact path={"/login"} to={"/dashboard"} />
                           }}
                    />

                    {/* Dashboard Page */}
                    <Route exact path={"/dashboard"}
                           render={(props) => {
                               if (user === undefined) {
                                   return (
                                       <FullScreenLoading />
                                   )
                               }
                               if (user) {
                                   return <DashboardIndex user={user} {...props} />;
                               }
                               return <Redirect exact path={"/dashboard"} to={"/login"} />;
                           }}
                    />


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
