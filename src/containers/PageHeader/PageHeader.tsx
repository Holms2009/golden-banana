import React from "react";
import block from "bem-cn";
import { FormEvent, useEffect, useState } from "react";

import './PageHeader.scss';
import gameLogo from '../../assets/images/ShopTitans_Logo_RGB.png';

import NavMenu from "../../blocks/NavMenu/NavMenu";
import MobileMenu from "../../blocks/MobileMenu/MobileMenu";
import YellowButton from "../../blocks/YellowButton/YellowButton";
import menuItems from '../../common/mainMenu';
import { useAppDispatch } from "../../store/hooks";
import { setGMState } from "../../store/store";
import { getGMPassword } from "../../firebase/firebaseAPI";

const b = block('PageHeader');

const PageHeader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showGMForm, setShowGMForm] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    function updateWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWindowSize);

    return () => { window.removeEventListener('resize', updateWindowSize) }
  });

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    const form = evt.currentTarget;
    const data = new FormData(form);
    evt.preventDefault();

    getGMPassword()
      .then(res => {
        if (res.exists() && data.get('password') === res.data().password) {
          dispatch(setGMState(true));
          form.reset();
          setShowGMForm(false);
          sessionStorage.isGM = true;
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  return (
    <div className={b()}>
      <div className={b('logos')}>
        <a className={b('logo-link')} href="https://playshoptitans.com/" target='_blank' rel="noreferrer">
          <img className={b('game-logo')} src={gameLogo} alt="Shop Titans logo" />
        </a>
      </div>
      {(windowWidth > 768) ? <span className={b('gm-state-toggle')} onClick={() => setShowGMForm(!showGMForm)}></span> : null}
      {(windowWidth > 768) ? <NavMenu menuItems={menuItems} direction='horizontal' /> : <MobileMenu />}
      {
        showGMForm ?
          <form className={b('gm-form')} action="POST" onSubmit={handleSubmit}>
            <input className={b('gm-password')} type="password" name='password' />
            <YellowButton text="Подтвердить" type="submit" />
          </form> :
          null
      }
      <div className={b('logo-text')}></div>
    </div>
  )
}

export default PageHeader;