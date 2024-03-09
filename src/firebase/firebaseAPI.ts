import { getDocs, collection, addDoc } from "firebase/firestore";

import { db } from "./firebase";

const fetchHistory = async () => getDocs(collection(db, 'history'));
const sendHistoryItem = async (newItem: THistoryItem) => addDoc(collection(db, 'history'), newItem);
const fetchBuildings = async () => getDocs(collection(db, 'buildings'));

export {
  fetchHistory,
  sendHistoryItem,
  fetchBuildings,
}