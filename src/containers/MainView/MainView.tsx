import block from "bem-cn";
import { useState } from "react";

import './MainView.scss';
import bananaMinion from '../../assets/images/banana-minion.png';

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
        <h2 className={b('title')}>Наши игрочки</h2>
        <PlayersList />
      </div>
      <img className={b('temp-image')} src={bananaMinion} alt="Банановый миньон" />
    </div>
  )
}

export default MainView;