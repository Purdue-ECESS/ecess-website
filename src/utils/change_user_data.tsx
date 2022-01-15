import {ecessApiCall} from "src/utils/api";
import {MyFb} from "src/data/data_fb";
import {collection, doc, getFirestore, setDoc, updateDoc} from "firebase/firestore";

export const changeUserData = async (user: any, currentData: any, newData: any) => {
    if (newData.email || newData.name) {
        await ecessApiCall({path: "updateUser", user, type: 'POST', body: newData});
    }
    if (currentData.email) {
        delete newData.email;
    }
    return await adminChangeUserData(user.uid, currentData, newData);
}

export const adminChangeUserData = async (targetId: string, currentData: any, newData: any) => {
    delete newData.uid;
    MyFb.loadFb();
    if (Object.keys(currentData).length === 0) {
        await setDoc(doc(collection(getFirestore(), "users"), targetId), newData);
    }
    else {
        await updateDoc(doc(collection(getFirestore(), "users"), targetId), newData);
    }
    return {...currentData, ...newData};
}
