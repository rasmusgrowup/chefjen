import Link from 'next/link'
import React, { useState, useRef, useEffect } from "react";

import MenuList from './MenuList'
import css from '../styles/mobileMenu.module.scss'

export default function MobileMenu() {
  const menuRef = useRef(null);
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
      setActive(!isActive);
  };

  return (
    <>
      <div className={css.menuButton} data='open-menu' onClick={handleToggle} aria-label='open-mobile-menu'>
        <span></span>
        <span></span>
      </div>
      <div className={`${css.wrapper} ${isActive ? css.menuClosed : css.menuOpened}`} data='mobile-menu' ref={menuRef}>
        <div className={css.menuButton} data='close-menu' onClick={handleToggle} aria-label='close-mobile-menu'>
          <span></span>
          <span></span>
        </div>
        <nav data='mobile-navigation'>
          <ul className={css.menuList} data='menu-list' >
            <MenuList />
          </ul>
        </nav>
      </div>
    </>
  )
}
