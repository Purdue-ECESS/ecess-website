import React from "react";

export function WelcomeImage(props: any) {
    const {picture, children} = props;
    return (
        <div style={{display: 'block',}} className={"dark"}>
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
                children &&
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
                </div>
            }
        </div>
    );
}