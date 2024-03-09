import { sendHistoryItem } from "../firebase/firebaseAPI";

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

export async function createContributions(players: TGuildMember[], lastWeek?: THistoryItem) {
  const newItem: THistoryItem = {
    date: Date.now(),
    data: []
  }

  players.forEach((player) => {
    const lastContribution = lastWeek?.data.find(item => item.id === player._id);

    newItem.data.push({
      name: getPlayerName(player.name),
      id: player._id,
      value: lastContribution ?
        player.invst - lastContribution.value :
        player.invst - Number(window.prompt(`Игрок ${getPlayerName(player.name)}`))
    });
  })

  await sendHistoryItem(newItem);
  console.log('Done!');
}