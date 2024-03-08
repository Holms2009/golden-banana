import React, { useState } from "react";
import block from "bem-cn";

import "./PlayersList.scss";

import { sortPlayersByContributions } from "../../utils/playersSort";
import PopUpWindow from "../PopUpWindow/PopUpWindow";
import { getPlayerFromGLById, getPlayerJoinDate, getPlayerName, getPlayerRank } from "../../utils";
import { fetchPlayerData } from "../../smartyApi";

const b = block('PlayersList');

type Props = {
  playersList: any[] | undefined;
}

const PlayersList = ({ playersList }: Props) => {
  const [pending, setPending] = useState(false);
  const [popupData, setPopupData] = useState<any>(null);

  async function handlePlayerClick(playerId: any) {
    setPending(true);

    try {
      const result = await fetchPlayerData(playerId);
      console.log(result);
      
      setPopupData(result);
    } catch (err: any) {
      console.log(err.message);
    }

    setPending(false);
  }

  function handlePopupClose() {
    setPopupData(null);
  }

  return (
    <>
      <ul className={b({ pending })}>
        {
          playersList && sortPlayersByContributions(playersList, 'gtl').map(player => (
            <li className={b('player')} onClick={() => handlePlayerClick(player._id)} key={player._id}>
              <div className={b('player-wrapper')}>
                <p className={b('name')}>{getPlayerName(player.name)}</p>
                <p className={b('contributions')}>{player.invst.toLocaleString('ru')}</p>
              </div>
            </li>
          ))
        }
      </ul>
      {(popupData && playersList) &&
        <PopUpWindow title={getPlayerName(popupData.name)} handleClose={handlePopupClose}>
          <div className={b('popup')}>
            <div className={b('popup-line')}>
              <span className={b('popup-item-name')}>Уровень:</span>
              <span className={b('popup-item-value')}>{popupData.level}</span>
            </div>
            <div className={b('popup-line')}>
              <span className={b('popup-item-name')}>Звание:</span>
              <span className={b('popup-item-value')}>{getPlayerRank(getPlayerFromGLById(playersList, popupData._id).rank)}</span>
            </div>
            <div className={b('popup-line')}>
              <span className={b('popup-item-name')}>Вклад:</span>
              <span className={b('popup-item-value')}>{popupData.stats.invst.toLocaleString('ru')}</span>
            </div>
            <div className={b('popup-line')}>
              <span className={b('popup-item-name')}>Присоединился:</span>
              <span className={b('popup-item-value')}>{getPlayerJoinDate(playersList, popupData._id)}</span>
            </div>
          </div>
        </PopUpWindow>
      }
    </>

  )
}

export default PlayersList;