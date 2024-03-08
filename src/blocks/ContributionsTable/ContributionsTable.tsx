import React, { useState } from "react";
import block from "bem-cn";
import Skeleton from "react-loading-skeleton";

import { getDataFetchStatus } from "../../store/getters";
import { useAppSelector } from "../../store/hooks";
import { sortContributions } from "../../utils/playersSort";

import "react-loading-skeleton/dist/skeleton.css";
import './ContributionsTable.scss';
import trophy from '../../assets/images/bounty_trophy.png';
import gold from '../../assets/images/gold.png';
import character from '../../assets/images/wallace.png';


const b = block('ContributionsTable');

type Props = {
  data: Contribution[]
}

const ContributionsTable = ({ data }: Props) => {
  const [sortByContributions, setSortByContributions] = useState<'gtl' | 'ltg'>('gtl');

  const dataStatus = useAppSelector(getDataFetchStatus);

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
            <div className={b('date')}>{data[0].week}</div>
            <div className={b('head-cell-container')}>
              <img className={b('head-icon')} src={trophy} alt="Иконка кубка" />
              <span className={b('head-text')}>Место</span>
            </div>
          </th>
          <th className={b('head-cell')}>
            <div className={b('head-cell-container')}>
              <img className={b('head-icon')} src={character} alt="Иконка игрока" />
              <span className={b('head-text')}>Игрок</span>
            </div>
          </th>
          <th className={b('head-cell')}>
            <div className={b('head-cell-container')} >
              <img className={b('head-icon')} src={gold} alt="Иконка монеты" />
              <span className={b('head-text')} onClick={changeBCSort}>Вклад</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className={b('body')}>
        {data.length ?
          sortContributions(data, sortByContributions).map((player, index) => (
            <tr className={b('body-row', { gold: index === 0, silver: index === 1, bronze: index === 2 })} key={player.playerId}>
              <td className={b('body-cell', 'place')}>{index + 1}</td>
              <td className={b('body-cell', 'nick')}>{player.playerName}</td>
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