import block from "bem-cn";
import './PageHeader.scss';

import Logo from "../../blocks/Logo/Logo";
import NavMenu from "../../blocks/NavMenu/NavMenu";

const b = block('PageHeader');

const PageHeader = () => {
  return (
    <div className={b()}>
      <Logo />
      <NavMenu menuItems={['Главная', 'Вклады', 'Здания']} direction='horizontal' />
    </div>
  )
}

export default PageHeader;