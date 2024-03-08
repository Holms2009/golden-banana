import { setDoc, getDocs, getDoc, updateDoc, doc, collection } from "firebase/firestore";

import { db } from "./firebase";
const host = 'http://localhost:3003'

const fetchPlayers = async () => fetch(host + '/api/get-players');
const fetchContributionsHistory = async () => fetch(host + '/api/contrib-history');
const fetchWeek = async () => getDoc(doc(db, 'common', 'week'));
const fetchBuildings = async () => getDocs(collection(db, 'buildings'));

const addPlayer = async (player: Player) => {
  const { playerName, playerRank, isInGuild, contribution} = player;

  fetch(host + '/api/add-player', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      playerName,
      playerRank,
      isInGuild,
      contribution
    })
  })
}

const addContributions = async (data: Contribution[]) => {
  fetch(host + '/api/add-contributions', {
    method: 'POST',
    headers: {
      'COntent-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}


const addBuilding = (building: Building) => {
  return setDoc(doc(db, 'buildings', building.name), building);
}

const updatePlayerState = (id: number) => {
  return updateDoc(doc(db, 'players', String(id)), {
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
  addContributions,
  updateWeek,
  getGMPassword,
  updatePlayerState,
  updateBuildingLevel,
  fetchContributionsHistory
}