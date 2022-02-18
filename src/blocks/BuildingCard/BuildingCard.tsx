import block from "bem-cn";

import './BuildingCard.scss';

const b = block('BuildingCard');

type Props = {
  name: string;
  imagePath: string;
  level: number;
  description: string;
}

const BuildingCard = ({ name, imagePath, level, description }: Props) => {
  return (
    <div className={b()}>
      <h3 className={b('title')}>{name}</h3>
      <div className={b('image-container')}>
        <img className={b('image')} src={imagePath} alt="Building icon" />
      </div>
      <p className={b('level')}>{'Уровень здания: ' + level}</p>
      <p className={b('description')}>{description}</p>
    </div>
  )
}

export default BuildingCard;