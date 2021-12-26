import {Card, CardActions, CardContent, Typography} from "@material-ui/core";
import {HoverButtons} from "../theme/mui/hover_button";
import React from "react";

export function SparkTeam(props) {
    const {title, team, videoId, website, videoClick, websiteClick} = props;
    return (
        <div style={{margin: 5, overflow: "hidden"}}>
            <Card>
                <img
                    src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`}
                    width={"100%"}
                    alt={''}/>
                <CardContent>
                    <div>
                        {title && (
                            <Typography variant={'subtitle2'}>️{title}</Typography>
                        )}
                        {team && (
                            <Typography variant={'subtitle2'}>(Team {team})</Typography>
                        )}
                    </div>
                </CardContent>
                <CardActions>
                    {
                        videoClick &&
                        (<HoverButtons
                            onClick={() => {
                                videoClick(videoId);
                            }}
                        >
                            Video
                        </HoverButtons>)
                    }
                    {
                        websiteClick &&
                        (
                            <HoverButtons
                                onClick={() => {
                                    websiteClick(website)
                                }}
                            >
                                Website
                            </HoverButtons>
                        )
                    }
                </CardActions>
            </Card>
        </div>
    )
}