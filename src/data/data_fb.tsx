import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA0rfqzRgQfY8Hut8BT1ZBuLXkQHm9jZu0",
    authDomain: "purdue-ecess.firebaseapp.com",
    projectId: "purdue-ecess",
    storageBucket: "purdue-ecess.appspot.com",
    messagingSenderId: "3539621967",
    appId: "1:3539621967:web:a5793fe1cce7cc778a323a",
    measurementId: "G-P5V2HKSFGW"
};

export class MyFb {

    private static isSet: boolean;

    public static loadFb() {
        if (!MyFb.isSet) {
            MyFb.isSet = true;
            initializeApp(firebaseConfig);
        }
    }

}