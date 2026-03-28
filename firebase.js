import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEY92irmucf9Rv8jeWNzwdqr0-5GexutI",
  authDomain: "a7jz-site.firebaseapp.com",
  projectId: "a7jz-site",
  storageBucket: "a7jz-site.firebasestorage.app",
  messagingSenderId: "1090740001889",
  appId: "1:1090740001889:web:f3fc50c8359015c51c1e20"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
