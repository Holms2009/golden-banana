import block from "bem-cn";

import './ContributionsView.scss';

const b = block('ContributionsView');

const ContributionsView = () => {
  return (
    <div className={b()}>
      <h2 className={b('title')}>Вклады за прошедшую неделю</h2>
    </div>
  )
}

export default ContributionsView;