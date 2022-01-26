import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from "react"
import useScrollListener from '../hooks/useScroll'

import css from '../styles/menu.module.scss'
import Chevron from '../public/Icon awesome-chevron-down.svg'
import WhiteChevron from '../public/Icon awesome-chevron-down_white.svg'

export default function MenuList() {
  const router = useRouter();
  const scroll = useScrollListener();
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    if (scroll.y > 50)
      setAtTop(false)
    else (
      setAtTop(true)
    );

    if (router.pathname != '/') (
      setAtTop(false)
    );
  }, [scroll.y, router]);

  return (
    <>
      <li className={css.index}>
        <Link href='/'>
          <a style={{ textDecoration: `${router.pathname == '/' ? 'underline' : '' }`}}>Forside</a>
        </Link>
      </li>
      <li className={css.dropdown}>
        <Link href='/catering'>
          <a style={{ textDecoration: `${router.pathname == '/catering' ? 'underline' : '' }`}}>
            Catering
            <div className={css.chevron} style={{ display: `${atTop ? 'none' : 'inherit'}`}}><Image src={Chevron} width='9' height='9'/></div>
            <div className={css.chevron} style={{ display: `${atTop ? 'inherit' : 'none'}`}}><Image src={WhiteChevron} width='9' height='9' /></div>
          </a>
        </Link>
        <div className={css.dropdownWrapper}>
          <ul className={css.dropdownContent}>
            <li><Link href='/catering'><a>Mad ud af huset</a></Link></li>
            <li><Link href='/menuer'><a>Aktuelle menuer</a></Link></li>
          </ul>
        </div>
      </li>
      <li>
        <Link href='/private-dining'><a style={{ textDecoration: `${router.pathname == '/private-dining' ? 'underline' : '' }`}}>Private Dining</a></Link>
      </li>
      <li>
        <Link href='/selskabslokaler'><a style={{ textDecoration: `${router.pathname == '/selskabslokaler' ? 'underline' : '' }`}}>Selskabslokaler</a></Link>
      </li>
      <li>
        <Link href='/om-chefjen'><a style={{ textDecoration: `${router.pathname == '/om-chefjen' ? 'underline' : '' }`}}>Om Os</a>
      </Link></li>
    </>
  )
}
