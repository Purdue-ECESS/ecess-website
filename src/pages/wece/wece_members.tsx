import {MemberList} from "../../components/widgets/lists/member_list";
import {getMembersFromOrganization} from "../../data/data_people";
import {useEffect, useState} from "react";

export function WECEMembers() {
    const [members, setMembers] = useState(undefined);
    useEffect(() => {
        if (members === undefined) {
            getMembersFromOrganization("wece").then((response) => {
                setMembers(response);
            })
        }
    }, [members])
    return (
        <div>
            <MemberList members={members} component={(item) => (
                <div>
                </div>
            )}/>

        </div>
    )
}