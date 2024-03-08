//Select players that are currently in guild
function selectActivePlayers(players: Player[]): Player[] {
  const result = players.filter(player => player.isInGuild);
  return result;
}

//Select ex guild players with their top known contribution
function selectExPlayers(players: Player[]): Player[] {
  return players.filter(player => !player.isInGuild);
}

//Sort active players by the amount of their week contribution
function sortPlayersByContributions(players: any[], direction: 'gtl' | 'ltg') {
  return [...players].sort((a, b) => direction === 'gtl' ? b.invst - a.invst : a.invst - b.invst);
}

function sortContributions(players: Contribution[], direction: 'gtl' | 'ltg') {
  return [...players].sort((a, b) => direction === 'gtl' ? b.contribution - a.contribution : a.contribution - b.contribution);
}



export {
  selectActivePlayers,
  selectExPlayers,
  sortPlayersByContributions,
  sortContributions
}