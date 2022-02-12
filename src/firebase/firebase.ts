import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1mrwR5wrBo17QdgSwlsKB1KQhhn4Ow3g",
  authDomain: "golden-banana.firebaseapp.com",
  projectId: "golden-banana",
  storageBucket: "golden-banana.appspot.com",
  messagingSenderId: "385602135631",
  appId: "1:385602135631:web:fc32b550609da08c556c3a"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore();

export { firebase, db };