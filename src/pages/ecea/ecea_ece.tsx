import React from "react";
import SURVEY_DATA from "src/data/data_surveys";
import Typography from "@mui/material/Typography";
import {getPictureUrl} from "src/data/data_people";
import {Author} from "src/components/widgets/author";
import {DarkTypography} from "src/components/theme/mui/dark_typography";

function BubbleLayout(author, attribute) {
    if (author[attribute]){
        const profilePicture = getPictureUrl(author.name);
        return (
            <div style={{padding: 5}}>
                <div style={{
                    padding: 10,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 15,
                    marginLeft: 30,
                    zIndex: 1,
                    maxWidth: 300,
                    position: "relative"
                }}>
                    <DarkTypography variant="body2" >
                        <em>{ author[attribute] }</em>
                    </DarkTypography>
                </div>
                <div style={{
                    display: 'flex',
                    backgroundColor: '#FFFFFF',
                    height: 20,
                    width: 20,
                    top: -20,
                    bottom: -20,
                    position: 'relative',
                    maxWidth: 300,
                    marginLeft: 30,
                    zIndex: 0}}/>
                <Author name={author.name} picture={profilePicture} relative={true}/>
            </div>
        )
    } else {
        return <></>
    }

}

function FunFact(props) {
    const {author} = props;
    return BubbleLayout(author, 'fun_fact');
}

function Advice(props) {
    const {author} = props;
    return BubbleLayout(author, "advice");
}

function FavProject(props) {
    const {author} = props;
    return BubbleLayout(author, "fav_project")
}

function FavClass(props) {
    const {author} = props;
    return BubbleLayout(author, "fav_class");
}

function WhyEce(props) {
    const {author} = props;
    return BubbleLayout(author, "why_ece");
}

function Section(backgroundColor, title, data) {
    return (<div>
        <div style={{ margin: '0 auto', maxWidth: 1080, padding: '10px 0'}}>
            <Typography variant="h5" component="h2">
                {title}
            </Typography>
            <div style={{display: "flex", marginLeft: 10, flexWrap: "wrap", justifyContent: "center" }}>
                {data}
            </div>
        </div>
    </div> )

}

export default function ECEAECEPage() {
    return (
        <div>
            <div style={{backgroundColor: '#CEB888'}}>
                <DarkTypography variant={"h5"} style={{padding: 20, textAlign: 'center'}}>
                    About ECE from our Ambassadors
                </DarkTypography>
            </div>

            {Section('#EEEEEE', "Fun Fact About Ambassadors",
                SURVEY_DATA.map((item, i) => {
                        return (
                            <FunFact key={i} author={item}/>
                        )
                    })
            )}
            {Section('#CEB888', "Piece of Advice for Incoming ECE Students",
                SURVEY_DATA.map((item, i) => {
                    return (
                        <Advice key={i} author={item}/>
                    )
                })
            )}
            {Section('#EEEEEE', "Favorite Project in ECE",
                SURVEY_DATA.map((item, i) => {
                    return (
                        <FavProject key={i} author={item}/>
                    )
                })
            )}
            {Section("#CEB888", "Favorite ECE Class",
                SURVEY_DATA.map((item, i) => {
                    return (
                        <FavClass key={i} author={item}/>
                    )
                })
            )}
            {Section("#EEEEEE", "Why ECE?",
                SURVEY_DATA.map((item, i) => {
                    return (
                        <WhyEce key={i} author={item}/>
                    )
                })
            )}
        </div>
    );
}
