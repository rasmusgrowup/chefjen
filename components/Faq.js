import Image from 'next/image'
import React, { useState, useRef, useEffect } from "react";

import css from '../styles/faq.module.scss'

import Plus from '../public/plus.svg'

export default function Faq({ title, text }) {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  return(
    <>
      <div className={css.faq}>
        <div className={css.title} onClick={handleToggle}>
          <div className={`${isActive ? `${css.rotate}` : '' }`}><Image src={Plus} width='15' height='15'/></div><h3>{title}</h3>
        </div>
        <p className={css.text} style={{ display: `${isActive ? 'block' : 'none' }`}}>{text}</p>
      </div>
    </>
  )
}
