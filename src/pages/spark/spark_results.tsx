import {DarkTypography} from "src/components/dark_typography";
import {WelcomeImage} from "src/components/welcome";
import React from "react";
import {ImageList, ImageListItem} from "@material-ui/core";

const background_photos = [
    "IMG_1042.jpg",
    "IMG_1043.jpg",
    "IMG_3271.jpg",
    "IMG_3272.jpg",
    "IMG_3273.jpg",
    "IMG_3274.jpg",
    "IMG_4901.jpg",
    "IMG_4902.jpg",
    "IMG_4903.jpg",
    "IMG_4906.jpg",
    "IMG_4916.png",
    "IMG_5991.jpg",
    "IMG_5992.jpg",
    "IMG_5993.jpg",
    "IMG_7768.jpg",
    "IMG_7769.jpg",
    "IMG_7770.jpg",
]

function SparkBackground() {

    return (
        <ImageList rowHeight={160} cols={4}>
            {
                (background_photos || []).map((item, i) => (
                    <ImageListItem key={`temp`} cols={ 1}>
                        <img src={"https://raw.githubusercontent.com/Purdue-ECESS/ecess-website-source-code/main/public/static/src/" + item} alt={'head-shots'} />
                    </ImageListItem>
                ))
            }
        </ImageList>
    )

}


export function SparkResults() {

    return (
        <div>
            <WelcomeImage
                width={"60vw"}
                background={SparkBackground()}
            >
                <DarkTypography variant={'h4'}>
                    Congratulations!!
                </DarkTypography>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    <div
                        style={{flex: 1}}
                    >
                        <DarkTypography variant={'h6'}>First Place</DarkTypography>

                    </div>
                    <div
                        style={{flex: 1}}
                    >
                        <DarkTypography variant={'h6'}>Second Place</DarkTypography>

                    </div>
                    <div
                        style={{flex: 1}}
                    >
                        <DarkTypography variant={'h6'}>Third Place</DarkTypography>

                    </div>
                </div>
            </WelcomeImage>

        </div>
    )

}