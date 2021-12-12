import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typography from "@material-ui/core/Typography";
import {ImageList, ImageListItem} from "@material-ui/core"; // requires a loader
import {FUN} from "src/data/data_fun";

function ListImageView(key, photos, maxHeight=undefined) {
    const style = {
        minWidth: 300,
        flex: 1,
        overflow: 'auto',
    };
    if (maxHeight) {
        style["maxHeight"] = maxHeight;
    }
    return (
        <ImageList rowHeight={160} cols={4}
                   style={style}>
            {
                (photos || []).map((item, i) => (
                        <ImageListItem key={`${key}-image-list-${i}`} cols={item.col || 1}>
                            <img src={"https://raw.githubusercontent.com/Purdue-ECESS/ecess-website-source-code/main/public/static/src/" + item.ref} alt={'head-shots'} />
                        </ImageListItem>
                    )
                )
            }
        </ImageList>
    )
}

function ImageDescriptionView(key, title, date, description) {
    return (
        <div style={{flex: 1, minWidth: 200}}>
            <div style={{padding: 20}}>
                <div style={{textAlign: 'end'}}>
                    <Typography variant={'h5'}>{title}</Typography>
                    <Typography variant={'caption'}>Date: {date}</Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html: description}}/>
            </div>
        </div>
    )
}

function EventView(key, i, event) {
    const style = {display: 'flex', flexFlow: 'wrap', padding: 5};
    if (i % 2 === 0) {
        return (
            <div style={style}>
                {ListImageView(key, event.photos, event.maxHeight)}
                {ImageDescriptionView(key, event.title, event.date, event.description)}
            </div>
        );
    }
    return (
        <div style={style}>
            {ImageDescriptionView(key, event.title, event.date, event.description)}
            {ListImageView(key, event.photos, event.maxHeight)}
        </div>
    )
}

export default function ECEAFunPage() {
    return (
        <>
            <div style={{backgroundColor: '#222'}}>
                <Typography variant={"h5"} style={{padding: 20, textAlign: 'center'}}>
                    Past Activities and Images from our Ambassadors
                </Typography>
            </div>
            {
                FUN.map( (events, eventsIdx) => {
                        const key = `events-body-${eventsIdx}`;
                        return (
                            <div key={key} >
                                <div style={{margin: '0 auto', maxWidth: 1080, paddingTop: 5, paddingBottom: 5}}>
                                    {EventView(`events-body-${eventsIdx}`, eventsIdx, events)}
                                </div>
                            </div>
                        )
                    }
                )
            }
        </>
    )
}

