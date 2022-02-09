import block from "bem-cn";
import './PageHeader.scss';

import Logo from "../../blocks/Logo/Logo";

const b = block('PageHeader');

const PageHeader = () => {
  return (
    <div className={b()}>
      <Logo />
    </div>
  )
}

export default PageHeader;