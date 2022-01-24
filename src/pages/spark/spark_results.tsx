import {DarkTypography} from "src/components/theme/mui/dark_typography";
import React, {useEffect, useState, useLayoutEffect} from "react";
import {Typography} from "@mui/material";
import {ImageGallery} from "src/components/screens/image_gallery";
import {ecessApiCall} from "src/utils/api";
import {SparkTeam} from "src/components/widgets/spark_team";
import {FloatYoutube} from "src/components/utils/float/float_youtube";
import {FloatWebsite} from "src/components/utils/float/float_website";
import {isMobile} from 'react-device-detect';
import "src/styles/dark_click.sass";


function ExportWinner(props) {
    const {emoji, children, placement, title, onClick} = props;
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
                <DarkTypography
                    variant={'subtitle2'}
                    onClick={onClick}
                    className="hover-dark-underline-animation"
                >
                       {title}
                </DarkTypography>
                {children}
            </div>
        </div>
    )
}

export function SparkResults() {

    const [popUpWebsite, setPopUpWebsite] = useState(undefined);
    const [popUpVideoId, setPopUpVideoId] = useState(undefined);
    const [photos, setPhotos] = useState(undefined);
    useEffect(() => {
        if (photos === undefined) {
            const getLinks = async () => {
                const response: any = await ecessApiCall(
                    {
                        path: "events", 
                        parameters: {
                            path: "events/12-11-2021-spark/", minSize: 240
                        }
                    });
                response.forEach((item) => {
                    item.opacity = 1
                })
                for (let i = 0; i < response.length; i++) {
                    let idx =  i + Math.floor(Math.random() * (response.length - i));
                    const temp = response[i];
                    response[i] = response[idx];
                    response[idx] = temp;
                }
                return response;
            }
            getLinks().then((response: any[]) => {
                setPhotos(response);
            })

        }

    }, [photos])

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
            {photos &&
            <ImageGallery
                photos={photos}
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
                        {
                            [
                                {
                                    title: "Snow Vision",
                                    emoji: "🥇",
                                    placement: "First Place"
                                },
                                {
                                    title: "RevEx",
                                    emoji: "🥈",
                                    placement: "Second Place",
                                },
                                {
                                    title: "Interactive Piano",
                                    emoji: "🥉",
                                    placement: "Third Place",
                                }
                            ].map((item) => (
                                <ExportWinner
                                    key={item.title}
                                    title={item.title}
                                    emoji={item.emoji}
                                    placement={item.placement}
                                />
                            ))
                        }
                    </div>
                    }
                </div>
            </ImageGallery>
            }

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
                                {name: "GM", logo: "General_Motors_(2021).svg", link: "https://www.gm.com"},
                                {name: "John Deere", logo: "John_Deere_logo.svg.png", link: "https://www.deere.com/en/index.html"},
                                {name: "Texas Instruments", logo: "Official_logo_of_Texas_Instruments.png", link: "https://www.ti.com/"},
                                {name: "Qualcomm", logo: "qualcomm.jpg", link: "https://www.qualcomm.com/"},
                                {name: "Eastman", logo: "eastman.png", link: "https://www.eastman.com/Pages/Home.aspx"},
                                {name: "JLG", logo: "jlg.svg.png", link: "https://www.jlg.com/en"},
                                {name: "Cliffs", logo: "cliffs.jpg", link: "https://www.clevelandcliffs.com/"},
                            ].map((item, i) => (
                                <div
                                    onClick={() => {
                                        window.location.href = item.link || "https://www.google.com"
                                    }}
                                    className={"hover-dark-underline-animation"}
                                    key={`sponsor-${item.name}`}
                                    style={{display: "flex", flexDirection: "column", margin: 10}}>
                                    <div style={{flex: 1}} />
                                    <img style={{maxWidth: 100, maxHeight: 100, height: "auto", width: "auto"}} src={process.env.PUBLIC_URL + "/static/logo/other/" + item.logo} alt={item.name}/>
                                    <div style={{flex: 1}} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div style={{padding: "30px"}}>
                <div style={{maxWidth: 1080, margin: "0 auto"}}>
                    <Typography variant={"h6"}>Video Submissions</Typography>
                    <Typography variant={"subtitle1"}>More Submissions Coming Soon</Typography>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(auto-fill,minmax(${Math.floor(200)}px, 1fr))`,
                    }}>
                        {
                            [
                                {
                                    title: "Solar Charging Station",
                                    team: 20,
                                    videoId: "ixIIc4Vfy_s",
                                },
                                {
                                    title: "Sink or be Sunk",
                                    team: 18,
                                    videoId: "ziMwrT-h9pU",
                                }
                            ]
                                .map((item) => (
                                    <SparkTeam
                                        key={item.videoId}
                                        title={item.title}
                                        videoId={item.videoId}
                                        team={item.team}
                                        videoClick={(videoId) => {
                                            if (isMobile) {
                                               window.location.href = `https://www.youtube.com/watch?v=${videoId}`
                                            }
                                            else {
                                                setPopUpVideoId(videoId);
                                            }
                                        }}
                                    />
                                ))
                        }
                    </div>
                </div>
            </div>

            {popUpVideoId &&
            (
                <FloatYoutube
                    onClose={() => {
                        setPopUpVideoId(undefined);
                    }}
                    videoId={popUpVideoId}
                />
            )}
            {
                popUpWebsite &&
                <FloatWebsite
                    onClose={() => {
                        setPopUpWebsite(undefined);
                    }}
                    url={popUpWebsite}/>
            }
        </div>
    )

}
