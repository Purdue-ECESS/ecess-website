import React from "react";
import SURVEYDATA from "../data/data_surveys";
import Typography from "@material-ui/core/Typography";
import {Box, Divider} from "@material-ui/core";
import {getPictureUrl} from "../data/data_people";

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

function FunFact(props) {
    const {title, author, children} = props;
    if (author.fun_fact){
        const profilePicture = getPictureUrl(author.name);
        return (
            <div style={{padding: 5}}>
                <Typography variant="h6" component="h2">
                    { title }
                </Typography>
                <Typography variant="body2" component="p">
                    <em>{ author.fun_fact }</em>
                </Typography>

                <div style={{display: 'flex'}}>
                    <div style={{flex: 1}} />
                    <Typography variant={"body2"} component={"p"} style={{textAlign: 'center', margin: 'auto', padding: 5}}>
                        { author.name }
                    </Typography>
                    {profilePicture ?
                        <div style={{width: 30, height: 30, overflow: "hidden", borderRadius: "100%"}}>
                            <div style={{justifyContent: 'center', display: 'flex'}}>
                                <img src={process.env.PUBLIC_URL + '/' + profilePicture} alt={author.name} width={30}/>
                            </div>
                        </div> :
                        <></>
                    }
                </div>

            </div>
        )
    } else {
        return <></>
    }
}

function Advice(props) {
    const {title, author, children} = props;
    if (author.advice){
        const profilePicture = getPictureUrl(author.name);
        return (
            <div style={{padding: 5}}>
                <Typography variant="h6" component="h2">
                    { title }
                </Typography>
                <Typography variant="body2" component="p">
                    <em>{ author.advice }</em>
                </Typography>

                <div style={{display: 'flex'}}>
                    <div style={{flex: 1}} />
                    <Typography variant={"body2"} component={"p"} style={{textAlign: 'center', margin: 'auto', padding: 5}}>
                        { author.name }
                    </Typography>
                    {profilePicture ?
                        <div style={{width: 30, height: 30, overflow: "hidden", borderRadius: "100%"}}>
                            <div style={{justifyContent: 'center', display: 'flex'}}>
                                <img src={process.env.PUBLIC_URL + '/' + profilePicture} alt={author.name} width={30}/>
                            </div>
                        </div> :
                        <></>
                    }
                </div>

            </div>
        )
    } else {
        return <></>
    }
}

function FavProject(props) {
    const {title, author, children} = props;
    if (author.fav_project){
        const profilePicture = getPictureUrl(author.name);
        return (
            <div style={{padding: 5}}>
                <Typography variant="h6" component="h2">
                    { title }
                </Typography>
                <Typography variant="body2" component="p">
                    <em>{ author.fav_project }</em>
                </Typography>

                <div style={{display: 'flex'}}>
                    <div style={{flex: 1}} />
                    <Typography variant={"body2"} component={"p"} style={{textAlign: 'center', margin: 'auto', padding: 5}}>
                        { author.name }
                    </Typography>
                    {profilePicture ?
                        <div style={{width: 30, height: 30, overflow: "hidden", borderRadius: "100%"}}>
                            <div style={{justifyContent: 'center', display: 'flex'}}>
                                <img src={process.env.PUBLIC_URL + '/' + profilePicture} alt={author.name} width={30}/>
                            </div>
                        </div> :
                        <></>
                    }
                </div>

            </div>
        )
    } else {
        return <></>
    }
}

function FavClass(props) {
    const {title, author, children} = props;
    if (author.fav_class){
        const profilePicture = getPictureUrl(author.name);
        return (
            <div style={{padding: 5}}>
                <Typography variant="h6" component="h2">
                    { title }
                </Typography>
                <Typography variant="body2" component="p">
                    <em>{ author.fav_class }</em>
                </Typography>

                <div style={{display: 'flex'}}>
                    <div style={{flex: 1}} />
                    <Typography variant={"body2"} component={"p"} style={{textAlign: 'center', margin: 'auto', padding: 5}}>
                        { author.name }
                    </Typography>
                    {profilePicture ?
                        <div style={{width: 30, height: 30, overflow: "hidden", borderRadius: "100%"}}>
                            <div style={{justifyContent: 'center', display: 'flex'}}>
                                <img src={process.env.PUBLIC_URL + '/' + profilePicture} alt={author.name} width={30}/>
                            </div>
                        </div> :
                        <></>
                    }
                </div>

            </div>
        )
    } else {
        return <></>
    }
}

function WhyEce(props) {
    const {title, author, children} = props;
    if (author.why_ece){
        const profilePicture = getPictureUrl(author.name);
        return (
            <div style={{padding: 5}}>
                <Typography variant="h6" component="h2">
                    { title }
                </Typography>
                <Typography variant="body2" component="p">
                    <em>{ author.why_ece }</em>
                </Typography>

                <div style={{display: 'flex'}}>
                    <div style={{flex: 1}} />
                    <Typography variant={"body2"} component={"p"} style={{textAlign: 'center', margin: 'auto', padding: 5}}>
                        { author.name }
                    </Typography>
                    {profilePicture ?
                        <div style={{width: 30, height: 30, overflow: "hidden", borderRadius: "100%"}}>
                            <div style={{justifyContent: 'center', display: 'flex'}}>
                                <img src={process.env.PUBLIC_URL + '/' + profilePicture} alt={author.name} width={30}/>
                            </div>
                        </div> :
                        <></>
                    }
                </div>

            </div>
        )
    } else {
        return <></>
    }
}

export default function ECEPage() {
    return (
        <div>
            <div style={{backgroundColor: '#EEEEEE'}}>
                <Typography variant={"h5"} style={{padding: 20, textAlign: 'center'}}>
                    About ECE from our Ambassadors
                </Typography>
            </div>
            <div style={{backgroundColor: '#CEB888'}}>
                <div style={{ margin: '0 auto', maxWidth: 1080, padding: '10px 0'}}>
                    <Typography variant="h5" component="h2">
                        Fun Fact About Ambassadors
                        <div style={{flex: 1, marginLeft: 10, overflowX: 'auto'}}>
                            {SURVEYDATA.map((item, i) => {
                                return (
                                    <FunFact key={i} author={item}>
                                        hi
                                    </FunFact>
                                )
                            })}
                        </div>
                    </Typography>
                </div>
            </div>

            <div style={{backgroundColor: '#EEEEEE'}}>
                <div style={{margin: '0 auto', maxWidth: 1080}}>
                    <Typography variant="h5" component="h2">
                       Piece of Advice for Incoming ECE Students
                       <div style={{flex: 1, marginLeft: 10, overflowX: 'auto'}}>
                            {SURVEYDATA.map((item, i) => {
                                return (
                                    <Advice key={i} author={item}/>
                                )
                            })}
                        </div>
                    </Typography>
                </div>

                <div style={{margin: '10px 0', backgroundColor: '#CEB888'}}>
                    <Typography variant="h5" component="h2">
                        Favorite Project in ECE
                       <div style={{flex: 1, marginLeft: 10, overflowX: 'auto'}}>
                            {SURVEYDATA.map((item, i) => {
                                return (
                                    <FavProject key={i} author={item}/>
                                )
                            })}
                        </div>
                    </Typography>
                </div>

                <div style={{margin: '10px 0', backgroundColor: '#EEEEEE'}}>
                    <Typography variant="h5" component="h2">
                        Favorite ECE Class
                       <div style={{flex: 1, marginLeft: 10, overflowX: 'auto'}}>
                            {SURVEYDATA.map((item, i) => {
                                return (
                                    <FavClass key={i} author={item}/>
                                )
                            })}
                        </div>
                    </Typography>
                </div>

                <div style={{margin: '10px 0', backgroundColor: '#CEB888'}}>
                    <Typography variant="h5" component="h2">
                        Why ECE?
                       <div style={{flex: 1, marginLeft: 10, overflowX: 'auto'}}>
                            {SURVEYDATA.map((item, i) => {
                                return (
                                    <WhyEce key={i} author={item}/>
                                )
                            })}
                        </div>
                    </Typography>
                </div>

                <div style={{margin: '10px 0', backgroundColor: '#EEEEEE'}}>
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

                <div style={{margin: '10px 0', backgroundColor: '#EEEEEE'}}>
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
