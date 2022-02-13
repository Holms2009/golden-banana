import block from "bem-cn";

import './MainView.scss';
import bananaMinion from '../../assets/images/banana-minion.png';

import AddPlayerForm from "../../blocks/AddPlayerForm/AddPlayerForm";

const b = block('MainView');

const MainView = () => {
  return (
    <div className={b()}>
      <AddPlayerForm />
      <img className={b('temp-image')} src={bananaMinion} alt="Банановый миньон" />
    </div>
  )
}

export default MainView;