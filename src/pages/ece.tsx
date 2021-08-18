import React from "react";
import Typography from "@material-ui/core/Typography";
import {Box, Divider} from "@material-ui/core";

function Ece(props) {
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

export default function ECEPage() {
    return (
        <div>
            <div style={{backgroundColor: '#EEEEEE'}}>
                <Typography variant={"h5"} style={{padding: 20, textAlign: 'center'}}>
                    About ECE from our Ambassadors
                </Typography>
            </div>
            <div style={{margin: '0 auto', maxWidth: 1080}}>
                <div style={{margin: '10px 0'}}>
                    <Typography variant="h5" component="h2">
                        Fun Fact About Ambassadors
                        <Typography variant={"subtitle2"}>
                            <p><em>I spend around like 200 hours a year on Spotify. Such a great rate of return.</em> - Matthew Wen<br></br>
                            <em>I've lived half my life in England and half my life in India.</em> - Naveen Vivek<br></br>
                            <em>I love playing guitar, bass, and piano.</em> - Michael Worthington<br></br>
                            <em>I enjoy rock climbing and backpacking.</em> - Noah Thoma</p>
                            <p><em>I can play 2 games of chess at the same time, blindfolded.</em> - Vikram Srivastava</p>
                            <p><em>My highest score in a game of bowling is a 246</em> - Sam Dlott</p>
                            <p><em>I play electric guitar with Purdue Jazz Bands and Boiler Brass</em> - Jason Chamness</p>
                            <p><em></em> - </p>
                            <p><em></em> - </p>
                            <p><em></em> - </p>
                            <p><em></em> - </p>
                            <p><em></em> - </p>
                            <p><em></em> - </p>
                            <p><em></em> - </p>
                            <p><em></em> - </p>
                            <p><em></em> - </p>
                            <p><em></em> - </p>
                        </Typography>
                    </Typography>
                </div>

                <div style={{margin: '10px 0'}}>
                    <Typography variant="h5" component="h2">
                       Piece of Advice for Incoming ECE Students
                    </Typography>
                </div>

                <div style={{margin: '10px 0'}}>
                    <Typography variant="h5" component="h2">
                        Favorite Project in ECE
                    </Typography>
                </div>

                <div style={{margin: '10px 0'}}>
                    <Typography variant="h5" component="h2">
                        Favorite ECE Class
                    </Typography>
                </div>

                <div style={{margin: '10px 0'}}>
                    <Typography variant="h5" component="h2">
                        Why ECE?
                    </Typography>
                </div>

                <div style={{margin: '10px 0'}}>
                    <Typography variant="h5" component="h2">
                        Computer Engineering Projects
                    </Typography>
                    <Divider light style={{marginTop: 5, marginBottom: 5}}/>

                    <Ece
                        title={"Example CompE Project"}
                        author={"Matthew Wen"}>
                        <p>Hi there</p>
                    </Ece>
                </div>

                <div style={{margin: '10px 0'}}>
                    <Typography variant="h5" component="h2">
                        Electrical Engineering Projects
                    </Typography>
                    <Divider light style={{marginTop: 5, marginBottom: 5}}/>

                    <Ece
                        title={"Example EE Project"}
                        author={"Sara Hui"}>
                        <p>Hi there</p>
                    </Ece>
                </div>
            </div>
        </div>
    );
}
