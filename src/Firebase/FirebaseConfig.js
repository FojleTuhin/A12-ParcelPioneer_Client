import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBPs_Ntn2JcWokO-Bk602sQSFxIBMem1_g",
    authDomain: "parcelpioneer-192c0.firebaseapp.com",
    projectId: "parcelpioneer-192c0",
    storageBucket: "parcelpioneer-192c0.appspot.com",
    messagingSenderId: "848353210572",
    appId: "1:848353210572:web:11800f869ff5e4de291269"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;