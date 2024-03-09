import React from "react";
import block from "bem-cn";

import './BuildingCard.scss';

const b = block('BuildingCard');

type Props = {
  building: Building
}

const BuildingCard = ({ building }: Props) => {
  return (
    <div className={b()}>
      <h3 className={b('title')}>{building.name}</h3>
      <div className={b('image-container')}>
        <img className={b('image')} src={building.image} alt="Building icon" />
      </div>
      <div className={b('footer')}>
        <p className={b('level')}>{'Уровень здания: ' + building.level}</p>
      </div>
    </div>
  )
}

export default BuildingCard;