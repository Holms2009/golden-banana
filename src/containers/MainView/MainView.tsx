import React, { useEffect } from "react";
import block from "bem-cn";

import './MainView.scss';

import PlayersList from "../../blocks/PlayersList/PlayersList";
import Timer from "../../blocks/Timer/Timer";
import { useAppSelector } from "../../store/hooks";
import { getContributionsHistory, getGuildData } from "../../store/getters";
import { createContributions } from "../../utils";

const b = block('MainView');

declare global {
  interface Window {
    calculate: any;
  }
}

const MainView = () => {
  const guildData = useAppSelector(getGuildData);
  const history = useAppSelector(getContributionsHistory);

  useEffect(() => {
    window.calculate = () => {
      if (guildData && history) {
        createContributions(guildData?.members, history[0])
      }
    }
  }, [])

  useEffect(() => {
    console.log(guildData);
  }, [guildData])

  return (
    <div className={b()}>
      <Timer title="Нашей гильдии:" from={new Date(2020, 4, 21, 0, 0, 0)}/>
      <div className={b('players-list')}>
        <div className={b('title-wrapper')}>
          <span className={b('title-icon')}></span>
          <h2 className={b('title')} >{'Наши игроки'}</h2>
          <span className={b('title-icon')}></span>
        </div>
        {guildData && <PlayersList playersList={guildData.members} />}
      </div>
      <div className={b('bananas-left')}>
        <span className={b('banana', { one: true })}></span>
        <span className={b('banana', { two: true })}></span>
        <span className={b('banana', { three: true })}></span>
        <span className={b('banana', { four: true })}></span>
        <span className={b('banana', { five: true })}></span>
        <span className={b('banana', { six: true })}></span>
        <span className={b('banana', { seven: true })}></span>
      </div>
      <div className={b('bananas-right')}>
        <span className={b('banana', { one: true })}></span>
        <span className={b('banana', { two: true })}></span>
        <span className={b('banana', { three: true })}></span>
        <span className={b('banana', { four: true })}></span>
        <span className={b('banana', { five: true })}></span>
        <span className={b('banana', { six: true })}></span>
        <span className={b('banana', { seven: true })}></span>
      </div>
    </div>
  )
}

export default MainView;