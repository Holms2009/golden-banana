import { RootState } from './store';

export const selectPlayers = (state: RootState) => state.players;
export const selectBuildings = (state: RootState) => state.buildings;
export const getDataFetchStatus = (state: RootState) => state.statusGetPlayers;
export const selectCurrentWeek = (state: RootState) => state.currentWeek;
export const getContributionsHistory = (state: RootState) => state.contributionsHistory;
export const getGuildData = (state: RootState) => state.guildData;