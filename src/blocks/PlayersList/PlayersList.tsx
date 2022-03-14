import React, { useState } from "react";
import block from "bem-cn";

import "./PlayersList.scss";

import PopUpWindow from "../PopUpWindow/PopUpWindow";
import { getGMState, selectCurrentWeek, selectPlayers } from "../../store/getters";
import { useAppSelector } from "../../store/hooks";
import { selectPlayersByWeek, sortPlayersByContributions, selectExPlayers, selectActivePlayers } from "../../utils/playersSort";


const b = block('PlayersList');

type Props = {
  view?: 'active' | 'ex'
}

const PlayersList = ({ view = 'active' }: Props) => {
  const [showPopUp, setShowPopUp] = useState(false)

  const players: Player[] = useAppSelector(selectPlayers);
  const isGM = useAppSelector(getGMState);
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
            <div className={b('player-wrapper', { gm: isGM })}>
              <p className={b('name')}>{player.nick}</p>
              <p className={b('contributions')}>{player.contribution.toLocaleString('ru')}</p>
              {isGM && view === 'active' ? <span className={b('player-remove')} onClick={() => { setShowPopUp(true) }}></span> : null}
              {showPopUp ?
                <PopUpWindow
                  title="Внимание!"
                  message={"Вы действительно хотите исключить игрока " + player.nick}
                  handleClose={() => { setShowPopUp(false) }}
                /> :
                null}
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default PlayersList;