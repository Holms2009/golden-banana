async function fetchApiData(url: string) {
  return await fetch('https://smartytitans.com/api' + url)
    .then((res) => res.json())
    .then((data) => data.data);
}

export async function fetchGuildData(guildId: string) {
  return await fetchApiData(`/info/city/${guildId}`) as TGuild;  
}

export async function fetchPlayerData(playerId: string) {
  return await fetchApiData(`/info/player/${playerId}`) as TPlayer;  
}