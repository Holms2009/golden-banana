import block from "bem-cn";
import { selectCurrentWeek, selectPlayers } from "../../store/getters";
import { useAppSelector } from "../../store/hooks";
import { selectPlayersByWeek, sortPlayersByContributions } from "../../utils/playersSort";

import "./PlayersList.scss";

const b = block('PlayersList');

const PlayersList = () => {
  const players: Player[] = useAppSelector(selectPlayers);
  const week: Week = useAppSelector(selectCurrentWeek);
  const selection = selectPlayersByWeek(players, week.current, true);

  sortPlayersByContributions(selection, 'gtl')

  return (
    <ul className={b()}>
      {
        selection.map(player => (
          <li className={b('player')} key={player.id}>
            <div className={b('player-wrapper')}>
              <p className={b('name')}>{player.nick}</p>
              <p className={b('contributions')}>{player.contribution.toLocaleString('ru')}</p>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default PlayersList;