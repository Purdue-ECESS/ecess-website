import React from "react";
import Layout from "../components/layout";
import Head from "next/head";

interface Props {
    key: any,
    window?: () => Window;
}

export default function FunPage(props: Props) {
    return (
        <Layout>
            <>
                <Head>
                    <title>ECEA: Fun</title>
                </Head>
                <p>Fun Page</p>
                <p>just pictures of us having fun? idk</p>
            </>
        </Layout>
    )
}

