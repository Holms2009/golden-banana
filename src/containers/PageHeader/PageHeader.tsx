import block from "bem-cn";
import { useEffect, useState } from "react";

import './PageHeader.scss';
import gameLogo from '../../assets/images/ShopTitans_Logo_RGB.png';

import Logo from "../../blocks/Logo/Logo";
import NavMenu from "../../blocks/NavMenu/NavMenu";
import MobileMenu from "../../blocks/MobileMenu/MobileMenu";
import menuItems from '../../common/mainMenu';

const b = block('PageHeader');

const PageHeader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function updateWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWindowSize);

    return () => { window.removeEventListener('resize', updateWindowSize) }
  });

  return (
    <div className={b()}>
      <div className={b('logos')}>
        {(windowWidth > 768) ?
          <a className={b('logo-link')} href="https://playshoptitans.com/" target='_blank' rel="noreferrer">
            <img className={b('game-logo')} src={gameLogo} alt="Shop Titans logo" />
          </a> :
          null}
      </div>
      {(windowWidth > 768) ? <NavMenu menuItems={menuItems} direction='horizontal' /> : <MobileMenu />}
      <div className={b('logo-text')}></div>
    </div>
  )
}

export default PageHeader;