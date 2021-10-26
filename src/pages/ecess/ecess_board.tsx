import {MemberList} from "../../components/member_list";
import {getMembersFromOrganization} from "../../data/data_people";
import {Chip, Typography} from "@material-ui/core";
import {hashCode, intToRGB} from "../../utils";
import React from "react";

export function EcessBoard() {
    const members = getMembersFromOrganization("ECESS");
    return (
        <>
            <MemberList members={members} component={(person) => (
                <>
                    {
                        <Chip label={person.ecess_organization["ECESS"].board_position} style={{
                                backgroundColor: `#${intToRGB(hashCode(person.name))}`,
                                margin: 2
                            }}/>
                    }
                    {person.ecess_organization["ECESS"].quote ?
                        <Typography variant={"body2"} style={{fontStyle: 'italic', marginTop: 10}}>
                            <q>
                                {person.ecess_organization["ECESS"].quote}
                            </q>
                        </Typography> : <></>
                    }
                </>

            )}/>
        </>
    )
}