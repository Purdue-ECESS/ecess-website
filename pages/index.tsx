import React from "react";
import Layout from "../components/layout";
import Head from 'next/head'

interface Props {
    key: any,
    window?: () => Window;
}

export default function IndexPage(props: Props) {
    return (
        <Layout>
            <>
                <Head>
                    <title>ECEA: Home</title>
                </Head>
                <p>Mission Statement</p>
                <p>Picture of Us</p>
                <p>Link to Discord + Insta</p>
                <p>Update</p>
                <p>{process.env.testKey}</p>
            </>
        </Layout>
    )
}