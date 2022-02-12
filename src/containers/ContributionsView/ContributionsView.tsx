import block from "bem-cn";

import './ContributionsView.scss';

import ContributionsTable from "../../blocks/ContributionsTable/ContributionsTable";

const b = block('ContributionsView');

const ContributionsView = () => { 
  return (
    <div className={b()}>
      <h2 className={b('title')}>Вклады за прошедшую неделю</h2>
      <ContributionsTable />
      <h2 className={b('title')}>Вклады за предыдущие недели</h2>
    </div>
  )
}

export default ContributionsView;