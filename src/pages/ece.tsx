import React from "react";
import SURVEYDATA from "../data/data_surveys";
import Typography from "@material-ui/core/Typography";
import {getPictureUrl} from "../data/data_people";

function BubbleLayout(author, title, attribute) {
    if (author[attribute]){
        const profilePicture = getPictureUrl(author.name);
        return (
            <div style={{padding: 5}}>
                <Typography variant="h6" component="h2">
                    { title }
                </Typography>
                <div style={{display: 'flex', padding: 10, backgroundColor: '#FFFFFF', width: 'fit-content', maxWidth: 500, borderRadius: 15, position: 'relative', marginLeft: 30, zIndex: 1}}>
                    <Typography variant="body2" component="p">
                        <em>{ author[attribute] }</em>
                    </Typography>
                </div>
                <div style={{display: 'flex', padding: 10, backgroundColor: '#FFFFFF', height: 20, width: 20, top: -20, position: 'relative', marginLeft: 30, zIndex: 0}}/>

                <div style={{display: 'flex', flexDirection: 'row-reverse', top: -20, position: 'relative'}}>
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

function FunFact(props) {
    const {title, author} = props;
    return BubbleLayout(author, title, 'fun_fact');
}

function Advice(props) {
    const {title, author} = props;
    return BubbleLayout(author, title, "advice");
}

function FavProject(props) {
    const {title, author} = props;
    return BubbleLayout(author, title, "fav_project")
}

function FavClass(props) {
    const {title, author} = props;
    return BubbleLayout(author, title, "fav_class");
}

function WhyEce(props) {
    const {title, author} = props;
    return BubbleLayout(author, title, "why_ece");
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
                    <div style={{margin: '0 auto', maxWidth: 1080}}>
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
                </div>

                <div style={{margin: '10px 0', backgroundColor: '#EEEEEE'}}>
                    <div style={{margin: '0 auto', maxWidth: 1080}}>
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
                </div>

                <div style={{margin: '10px 0', backgroundColor: '#CEB888'}}>
                    <div style={{margin: '0 auto', maxWidth: 1080}}>
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
                </div>
            </div>
        </div>
    );
}
