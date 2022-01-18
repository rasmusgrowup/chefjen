import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import { useRouter} from "next/router";
import useScrollListener from '../hooks/useScroll'

import Menu from '../components/Menu'
import MobileMenu from '../components/MobileMenu'

import GreenLogo from '../public/Logo_green.png'
import WhiteLogo from '../public/Logo_white.png'
import css from '../styles/header.module.scss'

export default function Header() {
  const router = useRouter();
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 50)
      _classList.push(`${css.greenHeader}`)
    else (
      _classList.pop(`${css.greenHeader}`)
    );

    if (router.pathname != '/')
      _classList.push(`${css.greenHeader}`)

    setNavClassList(_classList);
  }, [scroll.y, router]);

  return (
    <>
      <header className={`${css.header} ${navClassList.join(" ")}`}>
        <div className={css.logoWrapper} data='logo'>
          <Link href='/'><a>
            <div className={css.greenLogo}><Image src={GreenLogo} priority='true'/></div>
            <div className={css.whiteLogo}><Image src={WhiteLogo} priority='true'/></div>
          </a></Link>
        </div>
        <Menu />
        <div className={css.buttonsWrapper}>
          <Link href='mailto:chefjendenmark@gmail.com'>
            <a><div className={css.contactBtn} data='contact' >kontakt os</div></a>
          </Link>
          <MobileMenu />
        </div>
      </header>
    </>
  )
}
