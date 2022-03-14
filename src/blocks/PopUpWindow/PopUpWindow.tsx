import React, { MouseEventHandler } from "react";
import block from "bem-cn";

import './PopUpWindow.scss';

import YellowButton from "../YellowButton/YellowButton";

const b = block('PopUpWindow');

type Props = {
  title: string;
  message: string;
  handleClose: () => void;
  showButton?: boolean;
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
}

const PopUpWindow = ({ title, message, showButton = false, onClickHandler, handleClose }: Props) => {
  return (
    <div className={b()}>
      <h3 className={b('title')}>{title}</h3>
      <p className={b('message')}>{message}</p>
      {showButton ? <YellowButton type="button" text="Подтвердить" clickHandler={onClickHandler}/> : null}
      <span className={b('close')} onClick={handleClose}></span>
    </div>
  )
}

export default PopUpWindow;