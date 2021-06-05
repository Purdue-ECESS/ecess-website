import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import Typography from "@material-ui/core/Typography";
import {Box, Divider} from "@material-ui/core";

interface Props {
    key: any,
    window?: () => Window;
}

function Projects(props) {
    const {title, author, children} = props;
    return (
        <Box boxShadow={3} style={{padding: 5, background: '#fff', margin: '5px 0' }}>
            <Typography variant="h6" component="h2">
                { title }
            </Typography>
            <Typography variant="body2" component="p">
                { author }
            </Typography>
            { children }
        </Box>
    )
}

function EEProjects() {
    return (
        <div>
            <Typography variant="h6" component="h2">
                EE Projects
            </Typography>
            <Typography variant="body2" component="p">
            </Typography>
        </div>
    )
}

export default function ProjectPage(props: Props) {
    return (
        <Layout>
            <div style={{margin: 5}}>
                <Head>
                    <title>ECEA: Project</title>
                </Head>

                <div style={{margin: '10px 0'}}>
                    <Typography variant="h5" component="h2">
                        CompE Projects
                    </Typography>
                    <Divider light style={{marginTop: 5, marginBottom: 5}}/>

                    <Projects
                        title={"Example CompE Project"}
                        author={"Matthew Wen"}>
                        <p>Hi there</p>
                    </Projects>
                </div>

                <div style={{margin: '10px 0'}}>
                    <Typography variant="h5" component="h2">
                        EE Projects
                    </Typography>
                    <Divider light style={{marginTop: 5, marginBottom: 5}}/>

                    <Projects
                        title={"Example EE Project"}
                        author={"Sara Hui"}>
                        <p>Hi there</p>
                    </Projects>
                </div>
            </div>
        </Layout>
    )
}

