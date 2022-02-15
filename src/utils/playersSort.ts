function selectActivePlayers(players: Player[]): Player[] {
  const result = players.filter(player => player.isInGuild);
  return result;
}

function selectExPlayers(players: Player[]): Player[] {
  const result = players.filter(player => !player.isInGuild);
  return result;
}

function sortPlayersByContributions(players: WeekPlayer[], direction: string) {
  players.sort((a, b) => direction === 'gtl' ? b.contribution - a.contribution : a.contribution - b.contribution);
}

function selectPlayersByWeek(players: Player[], week: number, overallContribution = false): WeekPlayer[] {
  let result: WeekPlayer[] = [];

  players.forEach(player => {
    if (!player.contributionsHistory.find(snap => snap.weekNumber === week)) return false;

    const thisWeekContribution = player.contributionsHistory.find(snap => snap.weekNumber === week);
    const lastWeekContribution = player.contributionsHistory.find(snap => snap.weekNumber === week - 1);

    if (!thisWeekContribution || !lastWeekContribution) return false;

    const processed: WeekPlayer = {
      nick: player.nick,
      contribution: overallContribution ?  thisWeekContribution?.contribution : thisWeekContribution?.contribution - lastWeekContribution?.contribution,
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