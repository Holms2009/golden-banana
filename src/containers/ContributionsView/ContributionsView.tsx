import block from "bem-cn";

import './ContributionsView.scss';

import ContributionsTable from "../../blocks/ContributionsTable/ContributionsTable";
import { useAppSelector } from "../../store/hooks";
import { selectCurrentWeek } from "../../store/getters";

const b = block('ContributionsView');

const ContributionsView = () => {
  const week: Week = useAppSelector(selectCurrentWeek);  

  return (
    <div className={b()}>
      <h2 className={b('title')}>Вклады за прошедшую неделю</h2>
      <ContributionsTable weekNumber={week.current} />
      <h2 className={b('title')}>Вклады за предыдущие недели</h2>
      {
        week.current > 2 ?
          Array(week.current - 2).fill(1).map((oldWeek, index) => (
            <ContributionsTable weekNumber={week.current - (index + 1)} key={index} />
          )) :
          null
      }
    </div>
  )
}

export default ContributionsView;