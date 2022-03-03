import React from "react";
import block from "bem-cn";

import './YellowButton.scss';

const b = block('YellowButton');

type Props = {
  text: string;
  type: "button" | "submit";
  fullWidth?: boolean;
  clickHandler?: () => void;
}

const YellowButton = ({ text, type, fullWidth = false, clickHandler }: Props) => {
  return (
    <button className={b({ 'full-width': fullWidth })} type={type} onClick={() => { clickHandler && clickHandler() }}>
      {text}
    </button>
  )
}

export default YellowButton;