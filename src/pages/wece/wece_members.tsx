import {MemberList} from "src/components/widgets/lists/member_list";
import {getMembersFromOrganization} from "src/data/data_people";
import React, {useEffect, useState} from "react";
import {Chip} from "@mui/material";
import {hashCode, intToRGB} from "../../utils";

export function WECEMembers() {
    const [members, setMembers] = useState(undefined);
    useEffect(() => {
        getMembersFromOrganization("wece").then((response) => {
            setMembers(response);
        })
    }, [])
    return (
        <div>
            <MemberList members={members} component={(person) => (
                <div>
                    {
                        (person.ecess_organization.wece || undefined) &&
                        <Chip key={person.name} label={person.ecess_organization.wece.position} style={{
                            backgroundColor: `#${intToRGB(hashCode(person.name))}`,
                            margin: 2
                        }}/>
                    }
                </div>
            )}/>

        </div>
    )
}