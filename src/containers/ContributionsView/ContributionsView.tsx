import block from "bem-cn";

import './ContributionsView.scss';

const b = block('ContributionsView');

const ContributionsView = () => {
  return (
    <div className={b()}>
      <p style={{color: 'gold', fontSize: '50px'}}>Contributions Page</p>
    </div>
  )
}

export default ContributionsView;