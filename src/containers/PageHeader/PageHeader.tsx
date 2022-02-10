import block from "bem-cn";

import './PageHeader.scss';
import gameLogo from '../../assets/images/ShopTitans_Logo_RGB.png';

import Logo from "../../blocks/Logo/Logo";
import NavMenu from "../../blocks/NavMenu/NavMenu";
import menuItems from '../../common/mainMenu';

const b = block('PageHeader');

const PageHeader = () => {
  return (
    <div className={b()}>
      <div className={b('logos')}>
        <a className={b('logo-link')} href="https://playshoptitans.com/" target='_blank' rel="noreferrer">
          <img className={b('game-logo')} src={gameLogo} alt="Shop Titans logo" />
        </a>
        <Logo />
      </div>
      <NavMenu menuItems={menuItems} direction='horizontal' />
    </div>
  )
}

export default PageHeader;