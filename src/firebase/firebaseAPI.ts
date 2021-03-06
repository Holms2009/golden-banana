import { setDoc, getDocs, getDoc, updateDoc, doc, collection } from "firebase/firestore";

import { db } from "./firebase";

const fetchPlayers = async () => getDocs(collection(db, 'players'));

const fetchWeek = async () => getDoc(doc(db, 'common', 'week'));

const addPlayer = (player: Player) => {
  return setDoc(doc(db, 'players', player.id), player);
};

const updateContribution = (data: NewContribution) => {
  return updateDoc(doc(db, 'players', data.id), {
    contributionsHistory: (data.contributionsHistory)
  });
}

const updatePlayerState = (id: string) => {
  return updateDoc(doc(db, 'players', id), {
    isInGuild: false
  });
}

const updateWeek = (data: Week) => {
  return updateDoc(doc(db, 'common', 'week'), data);
}

const getGMPassword = () => {
  return getDoc(doc(db, 'common', 'gmAccess'));
}

export {
  fetchPlayers,
  fetchWeek,
  addPlayer,
  updateContribution,
  updateWeek,
  getGMPassword,
  updatePlayerState
}