//Select players that are currently in guild
function selectActivePlayers(players: Player[]): Player[] {
  const result = players.filter(player => player.isInGuild);
  return result;
}

//Select ex guild players with their top known contribution
function selectExPlayers(players: Player[]): WeekPlayer[] {
  const result: WeekPlayer[] = [];
  
  players.forEach(player => {
    if (player.isInGuild) return false;

    const processed: WeekPlayer = {
      nick: player.nick,
      contribution: player.contributionsHistory[player.contributionsHistory.length - 1].contribution,
      id: player.id
    }

    result.push(processed);
  })

  return result;
}

//Sort active players by the amount of their week contribution
function sortPlayersByContributions(players: WeekPlayer[], direction: string) {
  players.sort((a, b) => direction === 'gtl' ? b.contribution - a.contribution : a.contribution - b.contribution);
}

//Get active players with their contributions on selected week
function selectPlayersByWeek(players: Player[], week: number, overallContribution = false): WeekPlayer[] {
  const result: WeekPlayer[] = [];

  players.forEach(player => {
    const thisWeek = player.contributionsHistory.find(snap => snap.weekNumber === week);
    const lastWeek = player.contributionsHistory.find(snap => snap.weekNumber === week - 1);
    
    if (!thisWeek || !lastWeek) return false;
    if (lastWeek.contribution === 0) return false;

    const processed: WeekPlayer = {
      nick: player.nick,
      contribution: overallContribution ? thisWeek.contribution : thisWeek.contribution - lastWeek.contribution,
      id: player.id
    }

    result.push(processed);
  });

  return result;
}

export {
  selectActivePlayers,
  selectExPlayers,
  sortPlayersByContributions,
  selectPlayersByWeek
}