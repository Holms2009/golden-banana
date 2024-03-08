type MenuItem = {
  text: string;
  image: string;
  link: string;
}

type Week = {
  current: number;
  lastUpdate: string;
}

type Contribution = {
  week: string;
  playerId: number,
  playerName: string,
  contribution: number;
};

type Player = {
  playerId?: number;
  playerName: string;
  playerRank: string;
  contribution: number;
  isInGuild:  0 | 1;
}

type WeekPlayer = {
  nick: string;
  contribution: number;
  id: number;
}

type Building = {
  name: string;
  level: number;
  image: string;
  mark: boolean;
}

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;