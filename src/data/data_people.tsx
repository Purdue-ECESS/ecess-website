import {collection, query, where, getFirestore, Firestore,  getDocs, orderBy} from "firebase/firestore";

import {MyFb} from "./data_fb";

const ECESS_MAP = new Map();
const ORG_REQUESTED = new Set();
MyFb.loadFb();
const db: Firestore = getFirestore();
export async function getPictureUrl(name) {
    let member = undefined;
    if (ECESS_MAP.has(name)) {
        member = ECESS_MAP.get(name);
    }
    else {
        const q = query(collection(db, "users"), where("name", "==", name));
        (await getDocs(q)).forEach((item) => {
            member = item.data();
        });
        if (member) {
            ECESS_MAP.set(member.name, member);
        }
    }
    return member ? member.picture: undefined;
}
export async function getMembersFromOrganization(organization, retired=false) {
    const response = [];
    if (!ORG_REQUESTED.has(organization)) {
        ORG_REQUESTED.add(organization);
        const q = query(collection(db, `users`), orderBy(`ecess_organization.${organization}`, "asc"));
        (await getDocs(q)).forEach((item) => {
            const data = item.data();
            if (!ECESS_MAP.has(data.name)) {
                ECESS_MAP.set(data.name, data);
            }
        })
    }
    let heads = [];
    ECESS_MAP.forEach((item) => {
        if (item.ecess_organization) {
            if (organization in item.ecess_organization) {
                if ( (organization.retired && retired) || !(retired || organization.retired)) {
                    if (item.ecess_board_position === organization) {
                        heads.push(item)
                    }
                    else {
                        response.push(item);
                    }
                }
            }
        }
    })
    heads.sort((a: any, b: any) => {
        return a.name.localeCompare(b.name);
    })
    response.sort((a: any, b: any) => {
        return a.name.localeCompare(b.name);
    })
    heads.forEach((item) => {
        response.splice(0, 0, item);
    })
    return response;
}
