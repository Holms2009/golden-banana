import block from "bem-cn";
import { getDataFetchStatus, useAppSelector, selectPlayers } from "../../store/store";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import './ContributionsTable.scss';
import trophy from '../../assets/images/bounty_trophy.png';
import gold from '../../assets/images/gold.png';
import character from '../../assets/images/wallace.png';

const b = block('ContributionsTable');

const ContributionsTable = () => {
  const dataStatus = useAppSelector(getDataFetchStatus);
  // const data = useAppSelector(selectPlayers);
  const data = [
    {
      nick: 'Дошик',
      id: 111111,
      contributions: 9999999
    },
    {
      nick: 'Игрок 1',
      id: 222222,
      contributions: 9999999
    },
    {
      nick: 'Игрок 2',
      id: 333333,
      contributions: 9999999
    },
    {
      nick: 'Игрок 3',
      id: 444444,
      contributions: 9999999
    },
    {
      nick: 'Игрок 4',
      id: 555555,
      contributions: 9999999
    },
    {
      nick: 'Игрок 5',
      id: 666666,
      contributions: 9999999
    },
  ]

  return (
    <table className={b()}>
      <thead className={b('head')}>
        <tr className={b('head-row')}>
          <th className={b('head-cell')}>
            <div className={b('head-cell-container')}>
              <img className={b('head-icon')} src={trophy} alt="Иконка кубка" />
              <span>Место</span>
            </div>
          </th>
          <th className={b('head-cell')}>
            <div className={b('head-cell-container')}>
              <img className={b('head-icon')} src={character} alt="Иконка кубка" />
              <span>Имя игрока</span>
            </div>
          </th>
          <th className={b('head-cell')}>
            <div className={b('head-cell-container')}>
              <img className={b('head-icon')} src={gold} alt="Иконка кубка" />
              <span>Вклад</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className={b('body')}>
        {data.length ?
          data.map((player, index) => (
            <tr className={b('body-row', { gold: index === 0, silver: index === 1, bronze: index === 2 })} key={player.id}>
              <td className={b('body-cell', 'place')}>{index + 1}</td>
              <td className={b('body-cell', 'nick')}>{player.nick}</td>
              <td className={b('body-cell', 'contributions')}>{String(player.contributions)}</td>
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