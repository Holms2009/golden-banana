import block from "bem-cn";
import './NavMenu.scss';

const b = block('NavMenu');

type Props = {
  menuItems: string[],
  direction: 'horizontal' | 'vertical'
}

const NavMenu = ({ menuItems, direction }: Props) => {

  return (
    <nav className={b({ horizontal: direction === 'horizontal', virtical: direction === 'vertical' })}>
      {menuItems.map(item => (
        <div className={b('item')}>
          <span className={b('icon')}></span>
          <p className={b('text')}>{item}</p>
        </div>
      ))}
    </nav>
  )
}

export default NavMenu;