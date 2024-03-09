import { setDoc, getDocs, getDoc, updateDoc, doc, collection } from "firebase/firestore";

import { db } from "./firebase";

const fetchHistory = async () => getDocs(collection(db, 'history'));
const fetchBuildings = async () => getDocs(collection(db, 'buildings'));

export {
  fetchHistory,
  fetchBuildings,
}