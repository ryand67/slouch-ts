import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDbjSJzxJ_Ca-tLzzdIrQRwbsYBow5inbc",
    authDomain: "slouch-ac56d.firebaseapp.com",
    projectId: "slouch-ac56d",
    storageBucket: "slouch-ac56d.appspot.com",
    messagingSenderId: "513933405002",
    appId: "1:513933405002:web:3901d966a4d22fdbceefb3",
    measurementId: "G-JRXTZ5930X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, storage };