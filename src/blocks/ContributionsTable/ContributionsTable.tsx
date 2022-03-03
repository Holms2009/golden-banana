import React, { useState } from "react";
import block from "bem-cn";
import Skeleton from "react-loading-skeleton";

import { selectPlayers, getDataFetchStatus } from "../../store/getters";
import { useAppSelector } from "../../store/hooks";
import { selectPlayersByWeek, sortPlayersByContributions } from "../../utils/playersSort";

import "react-loading-skeleton/dist/skeleton.css";
import './ContributionsTable.scss';
import trophy from '../../assets/images/bounty_trophy.png';
import gold from '../../assets/images/gold.png';
import character from '../../assets/images/wallace.png';


const b = block('ContributionsTable');

type Props = {
  weekNumber: number;
  date: string | null;
}

const ContributionsTable = ({ weekNumber, date }: Props) => {
  const [sortByContributions, setSortByContributions] = useState('gtl');

  const dataStatus = useAppSelector(getDataFetchStatus);
  const data = useAppSelector(selectPlayers);

  const thisWeekPlayers: WeekPlayer[] = selectPlayersByWeek(data, weekNumber);

  if (sortByContributions) sortPlayersByContributions(thisWeekPlayers, sortByContributions)

  const changeBCSort = () => {
    if (sortByContributions === 'gtl') {
      setSortByContributions('ltg');
    } else {
      setSortByContributions('gtl');
    }
  }

  return (
    <table className={b()}>
      <thead className={b('head')}>
        <tr className={b('head-row')}>
          <th className={b('head-cell')}>
            <div className={b('date')}>{date}</div>
            <div className={b('head-cell-container')}>
              <img className={b('head-icon')} src={trophy} alt="Иконка кубка" />
              <span className={b('head-text')}>Место</span>
            </div>
          </th>
          <th className={b('head-cell')}>
            <div className={b('head-cell-container')}>
              <img className={b('head-icon')} src={character} alt="Иконка кубка" />
              <span className={b('head-text')}>Имя игрока</span>
            </div>
          </th>
          <th className={b('head-cell')}>
            <div className={b('head-cell-container')} >
              <img className={b('head-icon')} src={gold} alt="Иконка кубка" />
              <span className={b('head-text')} onClick={changeBCSort}>Вклад</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className={b('body')}>
        {thisWeekPlayers.length ?
          thisWeekPlayers.map((player, index) => (
            <tr className={b('body-row', { gold: index === 0, silver: index === 1, bronze: index === 2 })} key={player.id}>
              <td className={b('body-cell', 'place')}>{index + 1}</td>
              <td className={b('body-cell', 'nick')}>{player.nick}</td>
              <td className={b('body-cell', 'contributions')}>{player.contribution.toLocaleString('ru')}</td>
            </tr>)) :
          dataStatus === 'loading' ?
            Array(10).fill(1).map((item, index) => (
              <tr className={b('body-row')} key={index}>
                <td className={b('body-cell')}>
                  <Skeleton height={30} enableAnimation={false} baseColor='#71405955' />
                </td>
                <td className={b('body-cell')}>
                  <Skeleton height={30} enableAnimation={false} baseColor='#71405955' />
                </td>
                <td className={b('body-cell')}>
                  <Skeleton height={30} enableAnimation={false} baseColor='#71405955' />
                </td>
              </tr>
            )) :
            null
        }
        {
          (dataStatus === 'failed' && !data.length) ?
            <tr className={b('error-row')}>
              <td className={b('error')} colSpan={3}>Не удалось загрузить данные</td>
            </tr> :
            null
        }
      </tbody>
    </table >
  )
}

export default ContributionsTable;