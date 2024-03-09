import { RootState } from './store';

export const selectBuildings = (state: RootState) => state.buildings;
export const getContributionsHistory = (state: RootState) => state.contributionsHistory;
export const getGuildData = (state: RootState) => state.guildData;