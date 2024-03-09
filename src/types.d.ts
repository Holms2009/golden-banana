type MenuItem = {
  text: string;
  image: string;
  link: string;
}

type THistoryItem = {
  date: number;
  data: TContribution[];
}

type TContribution = {
  id: string;
  name: string;
  value: number;
}

type TPlayer = {
  _id: string;
  name: string;
  level: number;
  city: string;
  cityName: string;
  cityLevel: number;
  stats: {
    lvl: number;
    invst: number;
  },
  count: number;
  errorMessage: string;
}


// Guild data types

type TGuild = {
  _id: string;
  name: string;
  popLimit: number;
  members: TGuildMember[];
  buildings: TGuildBuilding[];
  settings: {
    join: number;
    minLevel: number;
    lang: string;
    pick: string;
    pickNext: number;
    message: string;
  };
  board: {
    bounties: string[];
    prevContributors: string[];
    currency: number;
  };
  boosts: string[];
  status: string;
  count: number;
  errorMessage: string;
}

type TGuildMember = {
  _id: string;
  name: string;
  level: number;
  rank: number;
  joined: number;
  invst: number;
  collection: number;
}

type TGuildBuilding = {
  uid: string;
  level: number;
  minLevel: number;
  nextAt: number;
}

type Building = {
  name: string;
  level: number;
  image: string;
  mark: boolean;
}


// Common types

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;