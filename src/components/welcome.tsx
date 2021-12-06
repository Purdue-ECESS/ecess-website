import React from "react";
import {ImageLoader} from "./image_loader";

export function WelcomeImage(props: any) {
    const {picture, children} = props;
    return (
        <div style={{display: 'block',}} className={"dark"}>
            <ImageLoader
                style={{
                    borderRadius: "0px 0px 25px 25px",
                    overflow: 'hidden', maxHeight: 450, minHeight: 50,
                }}
                height={450}
                width={"100%"}
                src={picture}/>
            {
                children ?
                    <div style={{
                        position: 'relative',
                        marginTop: "-50px",
                        width: "90%",
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textAlign: 'center', zIndex: 100}}>
                        <div
                            style={{display: 'inline-block',
                                borderRadius: '25px',
                                padding: 5,
                                backgroundColor: '#CEB888', maxWidth: 550, margin: '0 auto'}}>
                            {children}
                        </div>
                    </div> : <></>
            }
        </div>
    );
}