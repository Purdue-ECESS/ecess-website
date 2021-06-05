import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

interface Props {
    key: any,
    window?: () => Window;
}

class CalendarApp extends React.Component {
    render() {
        return (
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={[
                    {title: 'event 1', date: '2021-06-05'},
                    {title: 'event 2', date: '2021-06-06'},
                ]}
                rerenderDelay={1}
            />
        )
    }
}

export default function CalendarPage(props: Props) {
    return (
        <Layout>
            <div style={{margin: '10px'}}>
                <Head>
                    <title>ECEA: Calendar</title>
                </Head>
                <CalendarApp/>
            </div>
        </Layout>
    )
}

