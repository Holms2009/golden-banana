import block from "bem-cn";

import './MainView.scss';

const b = block('MainView');

const MainView = () => {
  return (
    <div className={b()}>
      <p style={{color: 'gold', fontSize: '50px'}}>Main Page</p>
    </div>
  )
}

export default MainView;