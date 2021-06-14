import React from "react";
import Layout from "../components/layout";
import Head from "next/head";

interface Props {
    key: any,
    window?: () => Window;
}

class CalendarApp extends React.Component {
    render() {
        return (
            <div>
                <p>Calendar Work in Progress</p>
            </div>
        )
    }
}

export default function CalendarPage(props: Props) {
    return (
        <Layout maxWidth={1080}>
            <div style={{margin: '10px'}}>
                <Head>
                    <title>ECEA: Calendar</title>
                </Head>
                <CalendarApp/>
            </div>
        </Layout>
    )
}

