import {ecessApiCall} from "src/utils/api";
import {MyFb} from "src/data/data_fb";
import {collection, doc, getFirestore, setDoc, updateDoc} from "firebase/firestore";

export const changeUserData = async (user: any, currentData: any, newData: any) => {
    let mergeData = {...currentData, ...newData};
    if (newData.email || newData.name) {
        await ecessApiCall({path: "updateUser", user, type: 'POST', body: newData});
    }
    if (currentData.email) {
        delete mergeData.email;
    }
    MyFb.loadFb();
    if (Object.keys(currentData).length === 0) {
        await setDoc(doc(collection(getFirestore(), "users"), user.uid), mergeData);
    }
    else {
        await updateDoc(doc(collection(getFirestore(), "users"), user.uid), mergeData);
    }
    return mergeData;
}
