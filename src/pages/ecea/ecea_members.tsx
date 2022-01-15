import React, {useEffect, useState} from "react";
import {getMembersFromOrganization} from "src/data/data_people";
import {MemberList} from "src/components/widgets/lists/member_list";
import {Chip, Typography} from "@mui/material";
import {hashCode, intToRGB} from "src/utils";


export default function AboutPage() {
    const [members, setMembers] = useState(undefined);
    useEffect(() => {
        if (members === undefined) {
            getMembersFromOrganization("Ambassadors").then((response) => {
                response.sort((a, b) => {
                    if (a.name === "Sara Hui") {
                        return -1;
                    } else if (b.name === "Sara Hui") {
                        return 1;
                    }
                    return a.name.localeCompare(b.name);
                });
                setMembers(response);
            });
        }
    }, [members])
    return (
        <>
            <div style={{backgroundColor: '#222'}}>
                <Typography variant={"h5"} style={{padding: 20, textAlign: 'center'}}>Ambassadors</Typography>
            </div>
            <MemberList
                members={members}
                component={(person) => {
                    if (person.ecess_organization["Ambassadors"]) {
                        return (
                            <>
                                {person.ecess_organization["Ambassadors"].quote ?
                                    <Typography variant={"body2"} style={{fontStyle: 'italic', marginTop: 10}}>
                                        <q>
                                            {person.ecess_organization["Ambassadors"].quote}
                                        </q>
                                    </Typography> : <></>
                                }
                                {
                                    (person.ecess_organization["Ambassadors"].clubs || []).map( (item) =>
                                        <Chip key={item} label={item} style={{
                                            backgroundColor: `#${intToRGB(hashCode(item))}`,
                                            margin: 2
                                        }}/>
                                    )
                                }
                            </>
                        )
                    }
                }}
            />
        </>
    )
}
