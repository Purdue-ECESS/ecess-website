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
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {CircularProgress, ThemeProvider, Typography} from "@material-ui/core";
import {ECESSHome} from "./pages/ecess/ecess_index";
import {WECEHome} from "./pages/wece/wece_index";
import {WECEMembers} from "./pages/wece/wece_members";
import {EcessBoard} from "./pages/ecess/ecess_board";
import {SparkIndex} from "./pages/spark/spark_index";
import {SparkSchedule} from "./pages/spark/spark_schedule";
import {SparkResults} from "./pages/spark/spark_results";
import {LoginPage} from "./pages/login";
import {DashboardIndex} from "./pages/dashboard/dashboard_index";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {NavBar} from "./components/theme/nav_bar";
import "src/styles/index.css";


const firebaseConfig = {
    apiKey: "AIzaSyA0rfqzRgQfY8Hut8BT1ZBuLXkQHm9jZu0",
    authDomain: "purdue-ecess.firebaseapp.com",
    projectId: "purdue-ecess",
    storageBucket: "purdue-ecess.appspot.com",
    messagingSenderId: "3539621967",
    appId: "1:3539621967:web:a5793fe1cce7cc778a323a",
    measurementId: "G-P5V2HKSFGW"
};

function App() {
    initializeApp(firebaseConfig);
    const [offset, setOffset] = useState(0);
    const [user, setUser] = useState(undefined);
    const navRef = useRef(null);
    const [marginTop, setMarginTop] = useState(0);

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
    useLayoutEffect(() => {
        function updateSize() {
            if (navRef) {
                setMarginTop(window.innerWidth > 700 ? 0 : (navRef?.current?.clientHeight || 0))
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
        setUser(user);
    })
    return (
        <ThemeProvider theme={ECESSTheme} >
            <Router>
                <NavBar navRef={navRef} user={user} />
                <div style={{height: marginTop}} />
                <Switch>
                    {/*ECESS Pages*/}
                    <Route exact path={"/"} render={(props) => <ECESSHome {...props}/> } />
                    <Route path={"/board"} render={(props) => <EcessBoard {...props}/> } />
                    <Route path={"/calendar"} render={(props) => <ECESSCalendarPage {...props}/> } />

                    {/*WECE Pages*/}
                    <Route exact path={"/wece"} render={(props) => <WECEHome {...props}/> } />
                    <Route path={"/wece/members"} render={(props) => <WECEMembers {...props}/> } />

                    {/*ECEA Pages*/}
                    <Route exact path={"/ecea"} render={(props) => <ECEAIndexPage {...props}/> } />
                    <Route path={"/ecea/fun"} render={(props) => <ECEAFunPage {...props}/> } />
                    <Route path={"/ecea/ece"} render={(props) => <ECEAECEPage {...props}/> } />
                    <Route path={"/ecea/members"} render={(props) => <AboutPage {...props}/> } />

                    {/*Spark Page*/}
                    <Route exact path={"/spark"} render={(props) => <SparkIndex {...props} /> } />
                    <Route path={"/spark/schedule"} render={(props) => <SparkSchedule {...props}/> } />
                    <Route path={"/spark/results"} render={(props) => <SparkResults {...props}/> } />

                    {/* Login Page */}
                    {user ?
                        <Redirect exact path={"/login"} to={"/dashboard"} /> :
                            user === undefined ?
                                <div style={{ display: 'grid', width: "100%", placeItems: "center" , margin: 20}}>
                                    <CircularProgress />
                                </div>
                                :
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
