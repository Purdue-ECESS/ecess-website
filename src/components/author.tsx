import Typography from "@material-ui/core/Typography";
import React from "react";
import {ImageLoader} from "./image_loader";

export function Author(props) {
    const {name, picture, relative} = props;

    return (
        <div style={{display: 'flex', flexDirection: 'row-reverse', top: -20, bottom: -20, position: (relative ? 'relative': 'static')}}>
            <div style={{flex: 1}} />
            <Typography variant={"body2"} component={"p"} style={{textAlign: 'center', margin: 'auto', padding: 5, whiteSpace: "nowrap"}} >
                { name }
            </Typography>
            {picture &&
                <div style={{width: 30, height: 30, overflow: "hidden", borderRadius: "100%"}}>
                    <ImageLoader height={35} width={30} src={"https://raw.githubusercontent.com/Purdue-ECESS/ecess-website-source-code/main/public" + picture}/>
                </div>
            }
        </div>
    )
}