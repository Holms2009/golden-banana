export function getPlayerName(value: string) {
  return value.split('#')[0];
}

export function getPlayerRank(rankId: number) {
  switch (rankId) {
    case 0:
      return 'Рядовой';
    case 1:
      return 'Офицер';
    case 2:
      return 'Глава';
  }
}

export function getPlayerFromGLById(list: any[], playerId: string) {
  return list.find((player) => player._id === playerId);
}

export function getPlayerJoinDate(list: any[], playerId: string) {
  return new Date(getPlayerFromGLById(list, playerId).joined).toLocaleDateString('ru');
}