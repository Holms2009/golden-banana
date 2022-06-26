import React from "react";
import block from "bem-cn";

import './BuildingCard.scss';

import { updateBuildingLevel } from "../../firebase/firebaseAPI";
import { useAppDispatch } from "../../store/hooks";
import { loadBuildings } from "../../store/asyncActions";

const b = block('BuildingCard');

type Props = {
  building: Building
  showToggle?: boolean;
}

const BuildingCard = ({ building, showToggle = false }: Props) => {
  const dispatch = useAppDispatch();

  function changeBuildingLevel(direction: 'up' | 'down') {
    let buildingCopy: Building = { ...building };

    if (direction === 'up') {
      buildingCopy.level += 1;
    }

    if (direction === 'down') {
      buildingCopy.level -= 1;
    }

    updateBuildingLevel(buildingCopy);
    dispatch(loadBuildings());
  }

  return (
    <div className={b()}>
      <h3 className={b('title')}>{building.name}</h3>
      <div className={b('image-container')}>
        <img className={b('image')} src={building.image} alt="Building icon" />
      </div>
      <div className={b('footer')}>
        <p className={b('level')}>{'Уровень здания: ' + building.level}</p>
        {showToggle ?
          <div className={b('toggle')}>
            <span className={b('toggle-up')} onClick={changeBuildingLevel.bind(null, 'up')} ></span>
            <span className={b('toggle-down')} onClick={changeBuildingLevel.bind(null, 'down')}></span>
          </div> :
          null}
      </div>
    </div>
  )
}

export default BuildingCard;