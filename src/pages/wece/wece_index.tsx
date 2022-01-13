import {WelcomeImage} from "src/components/screens/welcome";
import React, {useEffect, useState} from "react";
import {DarkTypography} from "src/components/theme/mui/dark_typography";
import {ecessApiCall} from "src/utils/api";

export function WECEHome(props: any) {
    const [background, setBackground] = useState(undefined);
    useEffect(() => {
        if (background === undefined) {
            ecessApiCall({
                path: "img",
                parameters: {path: "wece.png", minSize: 1080}
             }).then((response: any) => {
                setBackground(response.image);
            })
        }
    })
    return (
        <div style={{maxWidth: 1080, margin: "0 auto"}}>
            <WelcomeImage
                center={true}
                picture={background}
            >
                <DarkTypography variant={'subtitle1'}>
                    About Us
                </DarkTypography>
                <DarkTypography variant={'subtitle2'}>
                    Purdue Women in Electrical and Computer Engineering was founded in 2016 and is dedicated to
                    connecting women within the field of technology.
                </DarkTypography>
            </WelcomeImage>
        </div>
    )

}