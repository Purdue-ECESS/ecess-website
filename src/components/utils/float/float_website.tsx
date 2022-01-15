import {Float} from "./float";
import React from "react";

export const FloatWebsite = (props) => {
    const {url, onClose} = props;
    return (
        <Float
            onClose={onClose}
            style={{
                width: "100%",
                height: "100%",
                left: "0px",
                bottom: "0px",
                background: "rgba(51,51,51,0.7)",
                zIndex: 2000,
            }}
        >

            <iframe title={"spark"}
                    loading="lazy"
                    src={url}
                    frameBorder={0}
                    style={{height: "calc(100vh - 69px)"}} width={"100%"}/>
        </Float>
    )

}