import block from "bem-cn";
import React, { useState } from "react";

import './MobileMenu.scss';
import gameLogo from '../../assets/images/ShopTitans_Logo_RGB.png';

import NavMenu from "../NavMenu/NavMenu";
import menuItems from "../../common/mainMenu";

const b = block('MobileMenu');

const MobileMenu = () => {
  const [visibility, setVisibility] = useState(false);

  const handleLinkClick = () => {
    setVisibility(false);
  }

  return (
    <div className={b()}>
      <div className={b('burger')} onClick={() => setVisibility(true)}>
        <span className={b('line')}></span>
        <span className={b('line')}></span>
        <span className={b('line')}></span>
      </div>
      <div className={b('menu', { closed: !visibility })}>
        <NavMenu menuItems={menuItems} direction="vertical" linkClickHandler={handleLinkClick}/>
        <span className={b('close')} onClick={() => setVisibility(false)}></span>
        <a className={b('logo-link')} href="https://playshoptitans.com/" target='_blank' rel="noreferrer">
          <img className={b('game-logo')} src={gameLogo} alt="Shop Titans logo" />
        </a>
      </div>
      <div className={b('bg-cover', { hidden: !visibility })} onClick={() => setVisibility(false)}></div>
    </div>
  )
}

export default MobileMenu;