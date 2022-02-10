import block from "bem-cn";

import './MainView.scss';
import bananaMinion from '../../assets/images/banana-minion.png';

const b = block('MainView');

const MainView = () => {
  return (
    <div className={b()}>
      <img className={b('temp-image')} src={bananaMinion} alt="Банановый миньон" />
    </div>
  )
}

export default MainView;