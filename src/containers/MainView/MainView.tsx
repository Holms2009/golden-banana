import React from "react";
import block from "bem-cn";
import { useState } from "react";

import './MainView.scss';

import AddPlayerForm from "../../blocks/AddPlayerForm/AddPlayerForm";
import PlayersList from "../../blocks/PlayersList/PlayersList";
import { useAppSelector } from "../../store/hooks";
import { getGMState } from "../../store/getters";

const b = block('MainView');

const MainView = () => {
  const isGM = useAppSelector(getGMState);

  const [showAddPlayer, setShowAddPlayer] = useState(false);
  const [listView, setListView] = useState<'active' | 'ex'>('active');

  const toggleAddPlayer = () => {
    setShowAddPlayer(!showAddPlayer);
  }

  const toggleListView = () => {
    if (!isGM) return;

    if (listView === 'active') {
      setListView('ex');
    } else {
      setListView('active');
    }
  }

  return (
    <div className={b()}>
      {showAddPlayer ? <AddPlayerForm handleClose={toggleAddPlayer} /> : null}
      <div className={b('players-list')}>
        <div className={b('title-wrapper')}>
          <span className={b('title-icon')}></span>
          <h2 className={b('title', {'for-gm': isGM})} onClick={toggleListView}>{listView === 'active' ? 'Наши игроки' : 'Бывшие игроки'}</h2>
          <span className={b('title-icon')}></span>
        </div>
        <PlayersList view={listView} />
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