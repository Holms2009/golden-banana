import block from "bem-cn";

import './MainView.scss';
import bananaMinion from '../../assets/images/banana-minion.png';

import AddPlayerForm from "../../blocks/AddPlayerForm/AddPlayerForm";
import { useState } from "react";

const b = block('MainView');

const MainView = () => {
  const [showAddPlayer, setShowAddPlayer] = useState(false);

  const toggleAddPlayer = () => {
    setShowAddPlayer(!showAddPlayer);
  }

  return (
    <div className={b()}>
      {showAddPlayer ? <AddPlayerForm handleClose={toggleAddPlayer}/> : null}
      <img className={b('temp-image')} src={bananaMinion} alt="Банановый миньон" />
    </div>
  )
}

export default MainView;