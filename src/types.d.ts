type MenuItem = {
  text: string;
  image: string;
  link: string;
}

type Week = {
  current: number;
  lastUpdate: Date;
}

type Contribution = {
  weekNumber: number;
  contribution: number;
};

type Player = {
  nick: string;
  contributionsHistory: Contribution[];
  rank: string;
  isInGuild: boolean;
  id: string;
}

type WeekPlayer = {
  nick: string;
  contribution: number;
  id: string;
}

type WeekData = {
  weekNumber: number;
  data: Player[];
};

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;