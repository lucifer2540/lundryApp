import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDbubvcf84hGWqTWUD2cHzCNqjMIXhE5vo",
  authDomain: "laundry-app-e04f2.firebaseapp.com",
  projectId: "laundry-app-e04f2",
  storageBucket: "laundry-app-e04f2.appspot.com",
  messagingSenderId: "457799085804",
  appId: "1:457799085804:web:bf42ef65129ea01cc2bfc9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
