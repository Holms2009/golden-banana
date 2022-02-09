import block from "bem-cn";
import './Logo.scss';
import logo from '../../assets/images/logo.svg'

const b = block('Logo');

const Logo = () => {
  return (
    <a className={b()} href="/">
      <img className={b('image')} src={logo} alt="Изображение золотого банана" />
      <p className={b('text')}>Golden Banana</p>
    </a>
  )
}

export default Logo;