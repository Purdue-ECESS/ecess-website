import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Link from 'next/link'
import Copyright from "../src/Copyright"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function NavBar() {
    const nav_links = [['/', 'Home'], ['/calendar', 'Calendar'], ['/fun', 'Fun'],
        ['/projects', 'Projects'], ['/about', 'About']];
    return (
        <div style={{border: "solid"}}>
            <p>Temporary Navigation Bar</p>
            <ol>
                {nav_links.map((item, i) => {
                    return (
                        <li key={item[0]}>
                            <Link href={item[0]}>{item[1]}</Link>
                        </li>
                    )
                })}
            </ol>
        </div>
    );
}

export default function Layout({children}) {
    const classes = useStyles();
    return (
        <div style={{margin: 0, height: "100vh", display: "flex", flexDirection: "column"}}>
            <div style={{flex: 1}}>
                <NavBar/>
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