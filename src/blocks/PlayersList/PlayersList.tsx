import React, { useState } from "react";
import block from "bem-cn";

import "./PlayersList.scss";

import PopUpWindow from "../PopUpWindow/PopUpWindow";
import { getGMState, selectCurrentWeek, selectPlayers } from "../../store/getters";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectPlayersByWeek, sortPlayersByContributions, selectExPlayers, selectActivePlayers } from "../../utils/playersSort";
import { updatePlayerState } from "../../firebase/firebaseAPI";
import { loadPlayers } from "../../store/asyncActions";


const b = block('PlayersList');

type Props = {
  view?: 'active' | 'ex'
}

const PlayersList = ({ view = 'active' }: Props) => {
  const [showPopUp, setShowPopUp] = useState('')

  const players: Player[] = useAppSelector(selectPlayers);
  const isGM = useAppSelector(getGMState);
  const week: Week = useAppSelector(selectCurrentWeek);
  const dispatch = useAppDispatch();
  let selection;  

  if (view === 'active') {
    const active = selectActivePlayers(players);
    selection = selectPlayersByWeek(active, week.current, true);
  } else {
    selection = selectExPlayers(players);
  }

  sortPlayersByContributions(selection, 'gtl');

  function excludePlayer(playerId: string) {
    updatePlayerState(playerId);
    setShowPopUp('');
    dispatch(loadPlayers());
  }

  return (
    <ul className={b()}>
      {
        selection.map(player => (
          <li className={b('player')} key={player.id}>
            <div className={b('player-wrapper', { gm: isGM })}>
              <p className={b('name')}>{player.nick}</p>
              <p className={b('contributions')}>{player.contribution.toLocaleString('ru')}</p>
              {isGM && view === 'active' ? <span className={b('player-remove')} onClick={() => { setShowPopUp(player.id) }}></span> : null}
              {showPopUp === player.id ?
                <PopUpWindow
                  title="Внимание!"
                  message={"Вы действительно хотите исключить игрока " + player.nick + ' ?'}
                  handleClose={() => { setShowPopUp('') }}
                  showButton={true}
                  onClickHandler={excludePlayer.bind(null, player.id)}
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