import React from "react";
import block from "bem-cn";

import './BuildingsView.scss';

import BuildingCard from "../../blocks/BuildingCard/BuildingCard";
import { useAppSelector } from "../../store/hooks";
import { selectBuildings } from "../../store/getters";

const b = block('BuildingsView');

const BuildingsView = () => {
  let buildings: Building[] = useAppSelector(selectBuildings);

  return (
    <div className={b()}>
      <h2 className={b('title')}>Наши здания</h2>
      <div className={b('list')}>
        {
          Array.from(buildings).map((building) => (
            <BuildingCard
              building={building}
              key={building.name}
            />
          ))
        }
      </div>
    </div>
  )
}

export default BuildingsView;