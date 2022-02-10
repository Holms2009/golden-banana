import block from "bem-cn";
import './NavMenu.scss';

const b = block('NavMenu');

type Props = {
  menuItems: MenuItem[],
  direction: 'horizontal' | 'vertical'
}

const NavMenu = ({ menuItems, direction }: Props) => {

  return (
    <nav className={b({ horizontal: direction === 'horizontal', virtical: direction === 'vertical' })}>
      {menuItems.map(item => (
        <div className={b('item')}>
          <img className={b('icon')} src={item.image} alt="Иуонка пункта меню"/>
          <p className={b('text')}>{item.text}</p>
        </div>
      ))}
    </nav>
  )
}

export default NavMenu;