import { setDoc, getDocs, getDoc, updateDoc, doc, collection } from "firebase/firestore";

import { db } from "./firebase";

const fetchPlayers = async () => getDocs(collection(db, 'players'));

const fetchWeek = async () => getDoc(doc(db, 'common', 'week'));

const fetchBuildings = async () => getDocs(collection(db, 'buildings'));

const addPlayer = (player: Player) => {
  return setDoc(doc(db, 'players', player.id), player);
};

const addBuilding = (building: Building) => {
  return setDoc(doc(db, 'buildings', building.name), building);
}

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

const updateBuildingLevel = (building: Building) => {
  return updateDoc(doc(db, 'buildings', building.name), {
    level: building.level
  })
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
  fetchBuildings,
  addPlayer,
  addBuilding,
  updateContribution,
  updateWeek,
  getGMPassword,
  updatePlayerState,
  updateBuildingLevel
}