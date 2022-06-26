export const selectPlayers = (state: RootState) => state.players;
export const selectBuildings = (state: RootState) => state.buildings;
export const getDataFetchStatus = (state: RootState) => state.statusGetPlayers;
export const selectCurrentWeek = (state: RootState) => state.currentWeek;
export const getGMState = (state: RootState) => state.isGM;