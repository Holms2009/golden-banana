import React from "react";
import block from "bem-cn";

import { selectCurrentWeek, selectPlayers } from "../../store/getters";
import { useAppSelector } from "../../store/hooks";
import { selectPlayersByWeek, sortPlayersByContributions, selectExPlayers, selectActivePlayers } from "../../utils/playersSort";

import "./PlayersList.scss";

const b = block('PlayersList');

type Props = {
  view?: 'active' | 'ex'
}

const PlayersList = ({ view = 'active' }: Props) => {
  const players: Player[] = useAppSelector(selectPlayers);
  const week: Week = useAppSelector(selectCurrentWeek);
  let selection;

  if (view === 'active') {
    const active = selectActivePlayers(players);
    selection = selectPlayersByWeek(active, week.current, true);
  } else {
    selection = selectExPlayers(players);
  }

  sortPlayersByContributions(selection, 'gtl');

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