import {ECESSMemberTable} from "./member_table";
import {Card, CardContent, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {FullScreenLoading} from "src/components/utils/loading";
import {getMembersFromOrganization} from "src/data/data_people";
import * as React from "react";
import {MemberAdd} from "./member_add";

export function ECESSMemberDashboard({user, userData, setUserData}) {
    const [members, setMembers] = useState(undefined);
    useEffect(() => {
        if (userData && userData.ecess_board_position && members === undefined) {
            getMembersFromOrganization(userData.ecess_board_position, true).then((response) => {
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
    }, [members, user.email, userData]);
    if (!userData) {
        return <></>
    }
    if (!userData.ecess_board_position) {
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
                    <Typography variant={"h6"} style={{padding: 5, flex: 1}}>Manage Members</Typography>
                    <MemberAdd organization={userData.ecess_board_position} onClick={ async () => {
                        const response = await getMembersFromOrganization(userData.ecess_board_position, true);
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
                    organization={userData.ecess_board_position}
                    setMembers={setMembers}
                />
            </CardContent>
        </Card>
    );
}