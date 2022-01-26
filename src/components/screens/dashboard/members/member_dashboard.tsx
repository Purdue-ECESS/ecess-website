import {ECESSMemberTable} from "./member_table";
import {Card, CardContent, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {FullScreenLoading} from "src/components/utils/loading";
import {getMembersFromOrganization} from "src/data/data_people";
import * as React from "react";
import {MemberAdd} from "./member_add";

export function ECESSMemberDashboard({user, organization, setUserData}: any) {
    const [members, setMembers] = useState(undefined);
    useEffect(() => {
        if (organization && members === undefined) {
            getMembersFromOrganization(organization, true).then((response) => {
                let removeIdx = -1;
                response.forEach((item, i) => {
                    if (item.email === user.email) {
                        removeIdx = i;
                    }
                })
                if (removeIdx >= 0) {
                    response.splice(removeIdx, 1);
                }
                setMembers(response || []);
            })
        }
    }, [members, organization, user.email]);
    const organizationMap = {
        "Ambassadors": "Ambassadors",
        "wece": "WECE Members",
        "Spark": "Spark Members",
        "ECESS": "Board Members"
    };
    if (!organization) {
        return <></>
    }
    if (members === undefined) {
        return <FullScreenLoading />
    }
    if (members.length === 0) {
        return <></>
    }
    return (
        <Card style={{margin: 10}}>
            <CardContent>
                <div style={{display: "flex", flexFlow: "wrap"}}>
                    <Typography variant={"h6"} style={{padding: 5, flex: 1}}>Manage {organizationMap[organization]}</Typography>
                    <MemberAdd organization={organization} onClick={ async () => {
                        const response = await getMembersFromOrganization(organization, true);
                        let removeIdx = -1;
                        response.forEach((item, i) => {
                            if (item.email === user.email) {
                                removeIdx = i;
                            }
                        })
                        if (removeIdx >= 0) {
                            response.splice(removeIdx, 1);
                        }
                        setMembers(response || []);
                    }}/>
                </div>
                <ECESSMemberTable
                    rows={members}
                    organization={organization}
                    setMembers={setMembers}
                />
            </CardContent>
        </Card>
    );
}