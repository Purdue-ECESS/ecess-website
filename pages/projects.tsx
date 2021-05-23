import React from "react";
import Layout from "../components/layout";
import Head from "next/head";

interface Props {
    key: any,
    window?: () => Window;
}

export default function ProjectPage(props: Props) {
    return (
        <Layout>
            <>
                <Head>
                    <title>ECEA: Project</title>
                </Head>
                <p>Project Page</p>
                showcase some fun projects you've done or are currently doing, split up into EE/CompE topics so students
                can look through them
            </>
        </Layout>
    )
}

