import React from "react";

export function WelcomeImage(props: any) {
    const {picture, children, width, center, background} = props;
    return (
        <div>
            {background ? background :
                <div style={{
                    borderRadius: "0px 0px 25px 25px",
                    width: "100%", overflow: 'hidden', maxHeight: 450, minHeight: 50}}>
                <img
                    style={{
                        position: 'relative', width: "100%", minWidth: "500px", marginTop: "-10%"}}
                    src={picture}
                    alt={""} />
                </div>
            }
            {
                children &&
                <div style={{
                    position: 'relative',
                    marginTop: "-50px",
                    width: "90%",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    }}>
                    <div
                        style={{
                            textAlign: center ? "center": undefined,
                            borderRadius: '25px',
                            padding: 5,
                            backgroundColor: '#CEB888', maxWidth: width || 550, margin: '0 auto'}}>
                        {children}
                    </div>
                </div>
            }
        </div>
    );
}