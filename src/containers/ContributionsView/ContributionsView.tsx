import block from "bem-cn";
import { useState } from "react";

import './ContributionsView.scss';

import ContributionsTable from "../../blocks/ContributionsTable/ContributionsTable";
import CreateContributionsForm from "../../blocks/CreateContributionsForm/CreateContributionsForm";
import { useAppSelector } from "../../store/hooks";
import { selectCurrentWeek } from "../../store/getters";

const b = block('ContributionsView');

const ContributionsView = () => {
  const [showContributionsForm, setShowContributionsForm] = useState(false);
  const week: Week = useAppSelector(selectCurrentWeek);

  const toggleAddContributionsForm = (evt: React.MouseEvent<HTMLElement>) => {
    if (evt.target !== evt.currentTarget) return;

    setShowContributionsForm(!showContributionsForm);
  }

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
      {showContributionsForm ? <CreateContributionsForm handleClose={toggleAddContributionsForm} /> : null}
      {/* <span className={b('add-contributions')} onClick={toggleAddContributionsForm}></span> */}
    </div>
  )
}

export default ContributionsView;