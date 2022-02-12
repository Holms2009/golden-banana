import { setDoc, getDocs, getDoc, doc, collection } from "firebase/firestore";

import { db } from "./firebase";

const fetchPlayers = () => getDocs(collection(db, 'players'));

const fetchWeek = () => getDoc(doc(db, 'common', 'week'));

const addPlayer = (player: Player) => {
  setDoc(doc(db, 'players'), player, { merge: true })
};

export {
  fetchPlayers,
  fetchWeek,
  addPlayer
}