import {MemberList} from "../../components/member_list";
import {getMembersFromOrganization} from "../../data/data_people";

export function WECEMembers() {
    const members = getMembersFromOrganization("wece");
    return (
        <div>
            <MemberList members={members} component={(item) => (
                <div>
                </div>
            )}/>

        </div>
    )
}