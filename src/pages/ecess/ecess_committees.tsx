import {COMMITTEES} from "src/data/data_committees";
import {Card, CardContent, Typography} from "@mui/material";
import {Author} from "src/components/widgets/author";
import React from "react";
import {hashCode, intToRGB} from "src/utils";

function description(item) {
    return (
        <Card key={item.title} style={{margin: 10, border: "round"}}>
            <CardContent>
                <Typography variant={"h5"}>{item.title}</Typography>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {(item.leads || []).map((i) => (
                        <div key={i} style={{borderRadius: 25, backgroundColor: '#' + intToRGB(hashCode(i)), padding: 2, margin: 5}}>
                            <Author name={i} />
                        </div>
                        )
                    )}
                </div>
                <Typography>{item.description}</Typography>
            </CardContent>
        </Card>
    )
}
export function ECESSCommittess() {
    return (
        <div style={{margin: "0 auto", maxWidth: 1080}}>
            {
                COMMITTEES.map( (item) => description(item))
            }
        </div>
    )
}
