import block from "bem-cn";

import './BuildingsView.scss';

const b = block('BuildingsView');

const BuildingsView = () => {
  return (
    <div className={b()}>
      <p style={{color: 'gold', fontSize: '50px'}}>Buildings Page</p>
    </div>
  )
}

export default BuildingsView;