import block from "bem-cn";
import './Logo.scss';
import logo from '../../assets/images/logo.svg'

import { Link } from "react-router-dom";

const b = block('Logo');

const Logo = () => {
  return (
    <Link className={b()} to="/">
      <img className={b('image')} src={logo} alt="Изображение золотого банана" />
      <p className={b('text')}>Golden Banana</p>
    </Link>
  )
}

export default Logo;