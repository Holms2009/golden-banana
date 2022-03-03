import React from "react";
import block from "bem-cn";

import './BuildingsView.scss';

import BuildingCard from "../../blocks/BuildingCard/BuildingCard";
import buildingsData from "../../assets/data/buildings";

const b = block('BuildingsView');

const BuildingsView = () => {
  return (
    <div className={b()}>
      <h2 className={b('title')}>Наши здания</h2>
      <div className={b('list')}>
        {
          buildingsData.map(building => (
            <BuildingCard name={building.name} level={building.level} imagePath={building.image} key={building.name} />
          ))
        }
      </div>
    </div>
  )
}

export default BuildingsView;