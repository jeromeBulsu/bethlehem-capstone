import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCyjf03YgTOU0Bs7mmJt1xHtiWFuajiATQ",
  authDomain: "bethlehem-6ede5.firebaseapp.com",
  projectId: "bethlehem-6ede5",
  storageBucket: "bethlehem-6ede5.appspot.com",
  messagingSenderId: "488139530951",
  appId: "1:488139530951:web:3396ebedd8f9db4a30d4e2"
};
// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
