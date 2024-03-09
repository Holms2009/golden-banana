//Sort active players by the amount of their week contribution
function sortPlayersByContributions(players: any[], direction: 'gtl' | 'ltg') {
  return [...players].sort((a, b) => direction === 'gtl' ? b.invst - a.invst : a.invst - b.invst);
}

function sortContributions(players: TContribution[], direction: 'gtl' | 'ltg') {
  return [...players].sort((a, b) => direction === 'gtl' ? b.value - a.value : a.value - b.value);
}



export {
  sortPlayersByContributions,
  sortContributions
}