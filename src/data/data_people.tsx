import {collection, query, where, getFirestore, Firestore, getDocs, orderBy, doc, getDoc} from "firebase/firestore";

import {MyFb} from "./data_fb";

const ECESS_MAP_BY_NAME = new Map();
const ECESS_MAP_UID = new Map();
const ECESS_MAP_EMAIL = new Map();
const ORG_REQUESTED = new Set();
MyFb.loadFb();
const db: Firestore = getFirestore();

const addMember = (uid, member) => {
    if (member) {
        const merged = {...member, uid};
        ECESS_MAP_UID.set(uid, merged);
        if (member?.name) {
            ECESS_MAP_BY_NAME.set(member.name, merged);
        }
        if (member?.email) {
            ECESS_MAP_EMAIL.set(member.email, merged)
        }
        return merged;
    }
    return member;
}

export async function getPersonByEmail(email, force=false) {
    let member: any = {};
    if (ECESS_MAP_EMAIL.has(email) && !force) {
        member = ECESS_MAP_EMAIL.get(email);
    }
    else {
        const q = query(collection(db, "users"), where("email", "==", email));
        let id = undefined;
        (await getDocs(q)).forEach((item) => {
            member = item.data();
            id = item.id;
        });
        member = addMember(id, member);
    }
    return member;
}

export async function getPersonByUid(uid, force=false) {
    let member: any = {};
    if (ECESS_MAP_UID.has(uid) && !force){
        member = ECESS_MAP_UID.get(uid);
    }
    else {
        const user = await getDoc(doc(collection(db, "users"), uid));
        member = user.data();
        member = addMember(uid, member);
    }
    return member;
}

export async function getPersonByName(name, force = false) {
    let member;
    if (ECESS_MAP_BY_NAME.has(name) && !force) {
        member = ECESS_MAP_BY_NAME.get(name);
    }
    else {
        const q = query(collection(db, "users"), where("name", "==", name));
        let id = undefined;
        (await getDocs(q)).forEach((item) => {
            member = item.data();
            id = item.id;
        });
        member = addMember(id, member);
    }
    return member;
}


export async function getPictureUrl(name) {
    let member = await getPersonByName(name);
    return member ? member.picture: undefined;
}
export async function getMembersFromOrganization(organization, retired=false) {
    const response = [];
    if (!ORG_REQUESTED.has(organization)) {
        ORG_REQUESTED.add(organization);
        const q = query(collection(db, `users`), orderBy(`ecess_organization.${organization}`, "asc"));
        (await getDocs(q)).forEach((item) => {
            const data = item.data();
            addMember(item.id, data);
        })
    }
    let heads = [];
    let retiredItems = [];
    ECESS_MAP_BY_NAME.forEach((item) => {
        if (item.ecess_organization) {
            if (organization in item.ecess_organization) {
                if ((item.ecess_organization[organization]?.retired)) {
                    if (retired) {
                        retiredItems.push(item);
                    }
                }
                else {
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
    retiredItems.sort((a: any, b: any) => {
        return a.name.localeCompare(b.name);
    })
    heads.forEach((item) => {
        response.splice(0, 0, item);
    })
    retiredItems.forEach((item) => {
        response.push(item);
    })
    return response;
}
