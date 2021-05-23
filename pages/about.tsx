import React from "react";
import Layout from "../components/layout";
import Head from "next/head";

interface Props {
    key: any,
    window?: () => Window;
}

export default function AboutPage(props: Props) {
    return (
        <Layout>
            <>
                <Head>
                    <title>ECEA: About</title>
                </Head>
                <p>About Page</p>

                <p>
                    little bit about yourself, hyperlink linkedin or github
                </p>

                <p>
                    a little blurb about how the website was made using whatever the hell code we use for this website
                    because i think it's super cool
                </p>

            </>
        </Layout>
    )
}

