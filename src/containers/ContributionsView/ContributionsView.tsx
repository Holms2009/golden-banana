import React, { useEffect } from "react";
import block from "bem-cn";

import './ContributionsView.scss';

import ContributionsTable from "../../blocks/ContributionsTable/ContributionsTable";
import { useAppSelector } from "../../store/hooks";
import { getContributionsHistory } from "../../store/getters";

const b = block('ContributionsView');

const ContributionsView = () => {
  const contributions = useAppSelector(getContributionsHistory);

  useEffect(() => {
    console.log(contributions);
    
  }, [])

  return (
    <div className={b()}>
      <h2 className={b('title')}>Вклады за прошедшую неделю</h2>
      {contributions[0] ? <ContributionsTable data={contributions[0]} /> : null}
      <h2 className={b('title')}>Вклады за предыдущие недели</h2>
      {
        contributions.length > 1 ?
          contributions.map((data: THistoryItem, index: number) => {
            return index === 0 ?
              null :
              <ContributionsTable data={data} key={index} />
          }) :
          null
      }
      
    </div>
  )
}

export default ContributionsView;