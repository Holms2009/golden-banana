import { setDoc, getDocs, getDoc, doc, collection } from "firebase/firestore";

import { db } from "./firebase";

const fetchPlayers = async () => getDocs(collection(db, 'players'));

const fetchWeek = async () => getDoc(doc(db, 'common', 'week'));

const addPlayer = (player: Player) => {
  return setDoc(doc(db, 'players', player.nick.toLowerCase() + '-' + player.id), player, { merge: true });
};

export {
  fetchPlayers,
  fetchWeek,
  addPlayer
}