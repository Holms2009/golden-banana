import React from "react";
import block from "bem-cn";
import { useState } from "react";

import './ContributionsView.scss';

import ContributionsTable from "../../blocks/ContributionsTable/ContributionsTable";
import CreateContributionsForm from "../../blocks/CreateContributionsForm/CreateContributionsForm";
import { useAppSelector } from "../../store/hooks";
import { getGMState, selectCurrentWeek } from "../../store/getters";
import { changeDate, formatDateString } from "../../utils/dateFormatting";

const b = block('ContributionsView');

const ContributionsView = () => {
  const [showContributionsForm, setShowContributionsForm] = useState(false);

  const isGM = useAppSelector(getGMState);
  const week: Week = useAppSelector(selectCurrentWeek);

  const toggleAddContributionsForm = (evt?: React.MouseEvent<HTMLElement>) => {
    if (evt && evt.target !== evt.currentTarget) return;

    setShowContributionsForm(!showContributionsForm);
  }

  return (
    <div className={b()}>
      <h2 className={b('title')}>Вклады за прошедшую неделю</h2>
      <ContributionsTable weekNumber={week.current} date={formatDateString(week.lastUpdate)} />
      <h2 className={b('title')}>Вклады за предыдущие недели</h2>
      {
        week.current > 2 ?
          Array(week.current - 2).fill(1).map((_, index) => (
            <ContributionsTable weekNumber={week.current - (index + 1)} date={changeDate(week.lastUpdate, index + 1)} key={index} />
          )) :
          null
      }
      {showContributionsForm ? <CreateContributionsForm handleClose={toggleAddContributionsForm} /> : null}
      {isGM ? <span className={b('add-contributions')} onClick={toggleAddContributionsForm}></span> : null}
    </div>
  )
}

export default ContributionsView;