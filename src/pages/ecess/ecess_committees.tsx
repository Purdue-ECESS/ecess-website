import {COMMITTEES} from "src/data/data_committees";
import {Typography} from "@material-ui/core";
import {Author} from "src/components/widgets/author";
import {getPictureUrl} from "src/data/data_people";
import React from "react";
import {hashCode, intToRGB} from "src/utils";
import { ReactComponent as Phone } from 'src/svg/phone.svg';
import { ReactComponent as Camera } from 'src/svg/camera.svg';
import { ReactComponent as Spark } from 'src/svg/spark.svg';
import { ReactComponent as Computer } from 'src/svg/computer.svg';

function Description(props: any) {
    const {item, children, direction} = props;
    return (
        <div style={{display: "flex", flexDirection: direction || "row", maxWidth: "1080px", margin: "0 auto"}}>
            <div style={{flex: 1}}>
                <Typography variant={"h5"}>{item.title}</Typography>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {(item.leads || []).map((i) => (
                            <div key={i} style={{borderRadius: 25, backgroundColor: '#' + intToRGB(hashCode(i)), padding: 2, margin: 5}}>
                                <Author name={i} picture={getPictureUrl(i)}/>
                            </div>
                        )
                    )}
                </div>
                <Typography>{item.description}</Typography>
            </div>

            {children &&
                <div style={{margin: 20}}>
                    {children}
                </div>
            }
        </div>
    )
}
export function ECESSCommittess() {
    return (
        <div>
            <Description
                item={COMMITTEES.podcast}>
                <Phone/>
            </Description>

            <Description
                direction={"row-reverse"}
                item={COMMITTEES.wece}>
                <Phone/>
            </Description>

            <Description
                item={COMMITTEES.ambassadors}>
                <Phone/>
            </Description>

            <Description
                direction={"row-reverse"}
                item={COMMITTEES.software}>
                <Computer/>
            </Description>

            <Description
                item={COMMITTEES.multicultural} >
                <Phone/>
            </Description>

            <Description
                direction={"row-reverse"}
                item={COMMITTEES.spark} >
                <Spark/>
            </Description>

            <Description
                item={COMMITTEES.faculty}>
                <Phone/>
            </Description>

            <Description
                direction={"row-reverse"}
                item={COMMITTEES.social}>
                <Phone/>
            </Description>

            <Description
                item={COMMITTEES.community}>
                <Phone/>
            </Description>

            <Description
                direction={"row-reverse"}
                item={COMMITTEES.publicity}>
                <Camera/>
            </Description>
        </div>
    )
}
