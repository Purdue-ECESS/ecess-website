import {DarkTypography} from "src/components/theme/mui/dark_typography";
import React, {useEffect, useState, useLayoutEffect} from "react";
import {Typography} from "@material-ui/core";
import {ImageGallery} from "../../components/screens/image_gallery";



function ExportWinner(props) {
    const {emoji, children, placement, title, link} = props;
    return (
        <div style={{
            display: "flex",
            borderWidth: 1,
            borderStyle: "solid",
            margin: 10,
            padding: 10,
            borderRadius: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderColor: "rgba(0, 0, 0, 0)",
        }}>
            <div>
                {emoji}
            </div>
            <div style={{flex: 1}}>
                <DarkTypography variant={'subtitle2'}>️{placement}</DarkTypography>
                <DarkTypography variant={'subtitle2'}>
                    <a href={link}
                       style={{fontSize: 12, margin: 0, padding: 0}}>{title}</a>
                </DarkTypography>
                {children}
            </div>
        </div>
    )
}


export function SparkResults() {
    const background_photos = [
        "IMG_1042.jpg",
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
        "IMG_1045.jpg",
        "IMG_4909.jpg",
        "IMG_4910.jpg",
    ]

    const photosWithAttribute = [];
    background_photos.forEach((item) => {
        photosWithAttribute.push({
            photo: "/static/src/12-11-2021-spark/members/" + item,
            opacity: 1,
        })
    })

    const [width, setWidth] = useState(undefined);

    useLayoutEffect(() => {
        function updateSize() {
            let newWidth = window.innerWidth > 500 ? window.innerWidth: 500;
            setWidth(newWidth * 0.8 / 3);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div>
            <ImageGallery
                photos={photosWithAttribute}
            >
                <div style={{padding: 10, overflowX: "hidden", maxWidth: "100%"}}>
                    <DarkTypography variant={'h6'}>
                        Winners!! 🎉
                    </DarkTypography>
                    {width &&
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(auto-fill,minmax(${Math.floor(width)}px, 1fr))`,
                    }}>
                        <ExportWinner
                            title={"Snow Vision"}
                            emoji={"🥇"}
                            link={"https://engineering.purdue.edu/477grp17/"}
                            placement={"First Place"}
                        />
                        <ExportWinner
                            title={"RevEx"}
                            emoji={"🥈"}
                            placement={"Second Place"}
                            link={"https://engineering.purdue.edu/477grp6/"}/>
                        <ExportWinner
                            title={"Interactive Piano"}
                            emoji={"🥉"}
                            link={"https://engineering.purdue.edu/477grp16/"}
                            placement={"Third Place"}/>
                    </div>
                    }
                </div>
            </ImageGallery>

            <div style={{textAlign: "center", margin: "30px 0 30px 0"}}>
                <Typography variant={"h6"}>Awards</Typography>
                <div style={{display: "flex", marginTop: 25, flexWrap: "wrap"}}>
                    <div style={{flex: 1}}>
                        <Typography variant={"subtitle2"}>First Place</Typography>
                        <Typography variant={"h6"}>$1000</Typography>
                    </div>
                    <div style={{flex: 1}}>
                        <Typography variant={"subtitle2"}>Second Place</Typography>
                        <Typography variant={"h6"}>$800</Typography>
                    </div>
                    <div style={{flex: 1}}>
                        <Typography variant={"subtitle2"}>Third Place</Typography>
                        <Typography variant={"h6"}>$600</Typography>
                    </div>
                </div>
            </div>

            <div style={{padding: "30px", backgroundColor: "#fff", }}>
                <div style={{maxWidth: 1080, margin: "0 auto"}}>
                    <DarkTypography variant={"h6"}>Corporate Sponsors</DarkTypography>

                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        {
                            [
                                {name: "GM"},
                                {name: "John Deere"},
                                {name: "Texas Instruments"},
                                {name: "Qualcomm"},
                                {name: "Eastman"},
                                {name: "JLG"},
                                {name: "Cliffs"},
                            ].map((item, i) => (
                                <div style={{minWidth: 200}} key={`sponsor-${item.name}`}>
                                    <DarkTypography variant={"subtitle1"}>{i + 1}: {item.name}</DarkTypography>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div style={{padding: "30px"}}>
                <div style={{maxWidth: 1080, margin: "0 auto"}}>
                    <Typography variant={"h6"}>Video Submissions</Typography>
                    <Typography variant={"subtitle1"}>Coming Soon</Typography>
                </div>
            </div>

        </div>
    )

}
