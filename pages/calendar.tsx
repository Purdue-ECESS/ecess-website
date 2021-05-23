import React from "react";
import Layout from "../components/layout";
import Head from "next/head";

interface Props {
    key: any,
    window?: () => Window;
}

export default function CalendarPage(props: Props) {
    return (
        <Layout>
            <>
                <Head>
                    <title>ECEA: Calendar</title>
                </Head>
                <p>Calendar Page</p>
                <a href={"https://fullcalendar.io"}>https://fullcalendar.io</a>
            </>
        </Layout>
    )
}

