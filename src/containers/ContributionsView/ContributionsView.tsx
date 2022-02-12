import block from "bem-cn";

import './ContributionsView.scss';

import ContributionsTable from "../../blocks/ContributionsTable/ContributionsTable";
import { useAppSelector } from "../../store/hooks";
import { selectCurrentWeek } from "../../store/getters";

const b = block('ContributionsView');

const ContributionsView = () => {
  // const week: Week = useAppSelector(selectCurrentWeek);
  const week: Week = { current: 2, lastUpdate: new Date() }

  return (
    <div className={b()}>
      <h2 className={b('title')}>Вклады за прошедшую неделю</h2>
      <ContributionsTable weekNumber={week.current} />
      <h2 className={b('title')}>Вклады за предыдущие недели</h2>
    </div>
  )
}

export default ContributionsView;