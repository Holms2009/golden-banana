import React from "react";
import block from "bem-cn";

import './NavMenu.scss';

import { Link } from "react-router-dom";
import { MouseEventHandler } from "react";

const b = block('NavMenu');

type Props = {
  menuItems: MenuItem[],
  direction: 'horizontal' | 'vertical',
  linkClickHandler?: MouseEventHandler
}

const NavMenu = ({ menuItems, direction, linkClickHandler }: Props) => {
  return (
    <nav className={b({ horizontal: direction === 'horizontal', vertical: direction === 'vertical' })}>
      {menuItems.map((item, index) => (
        <Link className={b('item')} to={item.link} key={index} onClick={linkClickHandler}>
          <img className={b('icon')} src={item.image} alt="Иуонка пункта меню" />
          <p className={b('text')}>{item.text}</p>
        </Link>
      ))}
    </nav>
  )
}

export default NavMenu;