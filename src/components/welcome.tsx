import Typography from "@material-ui/core/Typography";
import React from "react";

export function WelcomeImage(props: any) {
    const {label, picture} = props;
    return (
        <div style={{display: 'block',}}>
            <div style={{
                borderRadius: "0px 0px 25px 25px",
                width: "100%", overflow: 'hidden', maxHeight: 450, minHeight: 50}}>
                <img
                    style={{
                        position: 'relative', width: "100%", minWidth: "500px", marginTop: "-10%"}}
                    src={picture}
                    alt={"Welcome Page"} />
            </div>

            {
                label ?
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
                        <Typography variant={'subtitle1'}>
                            {label.title}
                        </Typography>
                        <Typography variant={'subtitle2'}>
                            {label.msg}
                        </Typography>
                    </div>
                </div> : <></>
            }
        </div>
    );
}