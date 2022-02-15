import block from "bem-cn";
import { useState } from "react";

import './MainView.scss';

import AddPlayerForm from "../../blocks/AddPlayerForm/AddPlayerForm";
import PlayersList from "../../blocks/PlayersList/PlayersList";

const b = block('MainView');

const MainView = () => {
  const [showAddPlayer, setShowAddPlayer] = useState(false);

  const toggleAddPlayer = () => {
    setShowAddPlayer(!showAddPlayer);
  }

  return (
    <div className={b()}>
      {showAddPlayer ? <AddPlayerForm handleClose={toggleAddPlayer} /> : null}
      <div className={b('players-list')}>
        <div className={b('title-wrapper')}>
          <span className={b('title-icon')}></span>
          <h2 className={b('title')}>Наши игроки</h2>
          <span className={b('title-icon')}></span>
        </div>
        <PlayersList />
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