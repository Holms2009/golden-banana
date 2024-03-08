import React, { Children, MouseEventHandler } from "react";
import block from "bem-cn";

import './PopUpWindow.scss';

import YellowButton from "../YellowButton/YellowButton";

const b = block('PopUpWindow');

type Props = {
  title: string;
  message?: string;
  handleClose: () => void;
  showButton?: boolean;
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
  children?: JSX.Element;
}

const PopUpWindow = ({ title, message, showButton = false, onClickHandler, handleClose, children }: Props) => {
  return (
    <div className={b()}>
      <h3 className={b('title')}>{title}</h3>
      {message && <p className={b('message')}>{message}</p>}
      <div className={b('content')}>
        {children}
      </div>
      {showButton ? <YellowButton type="button" text="Подтвердить" clickHandler={onClickHandler} /> : null}
      <span className={b('close')} onClick={handleClose}></span>
    </div>
  )
}

export default PopUpWindow;