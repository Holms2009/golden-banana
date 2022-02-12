type MenuItem = {
  text: string;
  image: string;
  link: string;
}

type Player = {
  nick: string;
  contributions: number;
  rank: string;
  isInGuild: boolean;
  id: string;
}

type WeekData = Player[];
type OverallData = WeekData[];