import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0R5_JnJqFWPHacHSQpawPwkzh7JpvENM",
  authDomain: "chatgpt-messenger-f2c8e.firebaseapp.com",
  projectId: "chatgpt-messenger-f2c8e",
  storageBucket: "chatgpt-messenger-f2c8e.appspot.com",
  messagingSenderId: "1089341730728",
  appId: "1:1089341730728:web:4d1cd1225a7c5e796d779d",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
