import block from "bem-cn";

import './BuildingsView.scss';

const b = block('BuildingsView');

const BuildingsView = () => {
  return (
    <div className={b()}>
      <h2 className={b('title')}>Наши здания</h2>
    </div>
  )
}

export default BuildingsView;