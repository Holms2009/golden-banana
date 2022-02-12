import { setDoc, getDocs, doc, collection } from "firebase/firestore";

import { db } from "./firebase";

const getPlayers = () => getDocs(collection(db, 'players'));

const addPlayer = (player: Player) => {
  setDoc(doc(db, 'players'), player, { merge: true })
};

export {
  getPlayers,
  addPlayer
}