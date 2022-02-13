import block from "bem-cn";
import { useState } from "react";

import './MainView.scss';
import bananaMinion from '../../assets/images/banana-minion.png';

import AddPlayerForm from "../../blocks/AddPlayerForm/AddPlayerForm";
import { updateAll } from "../../firebase/firebaseAPI";

const b = block('MainView');

const MainView = () => {
  const [showAddPlayer, setShowAddPlayer] = useState(false);

  const toggleAddPlayer = () => {
    setShowAddPlayer(!showAddPlayer);
  }

  return (
    <div className={b()}>
      {showAddPlayer ? <AddPlayerForm handleClose={toggleAddPlayer}/> : null}
      <img className={b('temp-image')} src={bananaMinion} alt="Банановый миньон" onClick={updateAll}/>
    </div>
  )
}

export default MainView;