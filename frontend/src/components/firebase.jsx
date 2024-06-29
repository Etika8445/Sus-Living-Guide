import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhtGZBMLDHbbYXVDTNcHLxNhcp8rv5C0M",
  authDomain: "ecowise-6a68a.firebaseapp.com",
  projectId: "ecowise-6a68a",
  storageBucket: "ecowise-6a68a.appspot.com",
  messagingSenderId: "792284856139",
  appId: "1:792284856139:web:bed2a091232cb0c947b2ce"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;