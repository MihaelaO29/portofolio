import { initializeApp } from "firebase/app";
import moment from "moment";
import { publicIpv4 } from "public-ip";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { APP_TIME_FORMAT, APP_DATE_FORMAT, USER_ID } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkmOXoeudLccBeHUUacTKPBHPH4Gj6C8Q",
    authDomain: "portfolio-8a819.firebaseapp.com",
    projectId: "portfolio-8a819",
    storageBucket: "portfolio-8a819.appspot.com",
    messagingSenderId: "419889486515",
    appId: "1:419889486515:web:86edd77b8ebe8a8533eec6",
    measurementId: "G-BYYJDPGZT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const writeUserData = async () => {
    const respone = await publicIpv4();
    // @ts-ignore
    await setDoc(doc(db, moment().format(APP_DATE_FORMAT), localStorage.getItem(USER_ID)), {
        lastVisitTimeToday: moment().format(APP_TIME_FORMAT),
        userIp: respone
    });
}

export default writeUserData;