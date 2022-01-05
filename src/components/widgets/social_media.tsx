import Typography from "@material-ui/core/Typography";
import {Divider} from "@material-ui/core";
import {Discord, Gmail, Instagram} from "@icons-pack/react-simple-icons";
import React from "react";
import {HoverButtons} from "src/components/theme/mui/hover_button";

function Category({style, item}) {
    const {organization, discord, instagram, email} = item;
    return (
        <div style={{margin: 10, ...style}}>
            <div style={{display: "inline-block", minWidth: 250}}>
                <Typography variant="subtitle2" style={{marginLeft: 10}}>
                    {organization}
                </Typography>
                {discord &&
                <div>
                    <HoverButtons href={discord.link} style={{width: "100%", display: "flex"}}>
                        <Discord size={15} style={{margin: 3}} color={"white"}/>
                        <div style={{flex: 1}}>
                            {discord.name}
                        </div>
                    </HoverButtons>
                </div>
                }
                {
                    instagram &&
                    <div>
                        <HoverButtons href={'https://www.instagram.com/' + instagram} style={{width: "100%", display: "flex"}}>
                            <Instagram size={15} style={{margin: 3}} color={"white"}/>
                            <div style={{flex: 1}}>
                                @{instagram}
                            </div>
                        </HoverButtons>
                    </div>
                }
                {
                    email && email.length > 0 &&
                    <>
                        {email.map((item) => (
                            <div key={item}>
                                <HoverButtons href={'mailto:' + item} style={{width: "100%"}}>
                                    <Gmail size={15} style={{margin: 3}} color={"white"}/>
                                    <div style={{flex: 1}}>
                                        {item}
                                    </div>
                                </HoverButtons>
                            </div>
                        ))}
                    </>
                }
            </div>
        </div>
    );
}



export function SocialMedia() {
    const links = [
        {
            organization: "ECESS",
            discord: {name: 'ECESS Discord ', link: 'https://discord.gg/g2frztsC8W'},
            instagram: "purdue_ecess",
            email: ['ecess@purdue.edu']
        },
        {
            organization: "Ambassadors",
            discord: {name: 'ECE Ambassadors', link: 'https://discord.gg/fmwxACFB2T'},
            instagram: "purdue_ecea",
            email: ['eceambassadors@gmail.com']
        },
        {
            organization: "Women in ECE",
            instagram: "purduewece",
            email: ["unger12@purdue.edu", "posth@purdue.edu"]
        },
        // {}
    ]
    return (
        <div>
            <div style={{
                margin: "0 auto",
                display: "flex",
                flexWrap: "wrap"
            }}>
                {
                    links.map((item) => (
                        <Category style={{alignItems: "center", flex: 1}} item={item} />
                    ))
                }
            </div>
        </div>
    );
}