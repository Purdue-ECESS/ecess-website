import Typography from "@material-ui/core/Typography";
import {Divider} from "@material-ui/core";
import {Discord, Gmail, Instagram} from "@icons-pack/react-simple-icons";
import React from "react";

export function SocialMedia(props) {
    const {materialClass, discord, instagram, email} = props;
    return (
        <div style={{margin: 10}} className={'dark'}>
            <Typography variant="h5" component="h2">
                Follow Us
            </Typography>
            <Divider light style={{marginTop: 5, marginBottom: 5}}/>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {discord ?
                    <div style={{minWidth: 250, flex: 1, margin: 5}}>
                        <div style={{display: "flex"}}>
                            <Discord size={18} style={{margin: 3}}/>
                            <Typography className={materialClass.pos} color="textSecondary" gutterBottom>
                                DISCORD
                            </Typography>
                        </div>
                        <a href={discord.link}>
                            {discord.name}
                        </a>
                    </div> : <></>
                }
                {
                    instagram ?
                    <div style={{minWidth: 250, flex: 1, margin: 5}}>
                        <div style={{display: "flex"}}>
                            <Instagram size={18} style={{margin: 3}}/>
                            <Typography className={materialClass.pos} color="textSecondary" gutterBottom>
                                INSTAGRAM
                            </Typography>
                        </div>
                        <a href={'https://www.instagram.com/' + instagram}>
                            @{instagram}
                        </a>
                    </div> : <></>
                }
                {
                    email && email.length > 0 &&
                    <div style={{minWidth: 250, flex: 1, margin: 5}}>
                        <div style={{display: "flex"}}>
                            <Gmail size={18} style={{margin: 3}}/>
                            <Typography className={materialClass.pos} color="textSecondary" gutterBottom>
                                EMAIL
                            </Typography>
                        </div>
                        {email.map((item) => (
                            <div key={item}>
                                <a href={'mailto:' + item}>
                                    {item}
                                </a>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
}