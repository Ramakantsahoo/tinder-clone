import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBUZ492fzI1czvqqTa5KjoTAkVTeVQN9mI",
    authDomain: "tinder-clone-da3a5.firebaseapp.com",
    projectId: "tinder-clone-da3a5",
    storageBucket: "tinder-clone-da3a5.appspot.com",
    messagingSenderId: "834855678272",
    appId: "1:834855678272:web:97617bc4cfcb409db8caa5",
    measurementId: "G-TQQ7LCGH1H"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;