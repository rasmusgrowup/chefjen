import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import Button from '../components/Button'
import WhiteButton from '../components/WhiteButton'
import How from '../components/How'
import Course from '../components/Course'
import css from '../styles/catering.module.scss'
import index from '../styles/index.module.scss'

import Buffet from '../public/Buffet_landscape_small.jpg'
import BuffetPortrait from '../public/Buffet_portrait.jpg'
import Forret from '../public/Forret_16_9.jpg'

export default function Catering() {
  const hero = useRef(null);

  useEffect(() => {
    gsap.set(hero.current, {
      y:50,
      opacity:0
    });
    gsap.to(hero.current, {
      y: 0,
      opacity: 1,
      duration: 1,
    });
  }, [])

  return(
    <>
      <section className={css.catering}>
        <div className={css.hero} ref={hero}>
          <div className={css.heroInner}>
            <div className={css.container}>
              <span>Mad ud af huset</span>
              <h1 className={css.heroTitle}>
                Lækker mad til store og små selskaber fra 199,-*
              </h1>
              <span className={css.titleTerms}>*pr. kuvert ved min. 10 kuverter</span>
              <p>Lad os stå for maden til dit arrangement, så sørger vi for at dine gæster får en dejlig smagsoplevelse og går mætte hjem. Vi har løbende aktuelle menuer som passer godt til konfirmationer, højtider og andre store begivenheder, såsom bryllupper, jubilæer, runde fødselsdage, firmaarrangementer m.m. Kontakt os for et uforpligtende tilbud.
              </p>
              <p style={{ display: 'none' }}>Der er plads til dine ønsker til menuen, så lad os høre hvad du drømmer om.</p>
              <Button href='mailto:kontakt@chefjen.dk' text='Ring til os på +45 70 30 70 48' />
            </div>
            <div className={css.image}>
              <div className={css.landscape}><Image src={Buffet} layout='responsive' sizes='66vw' quality='100' priority='true' placeholder='blur' /></div>
              <div className={css.portrait}><Image src={BuffetPortrait} layout='responsive' sizes='50vw' quality='100' priority='true' placeholder='blur' /></div>
            </div>
          </div>
        </div>
        <section className={index.quoteSection}>
          <h3 className={index.quote}>Som vært er man altid lidt spændt når der skal holdes fest for så mange gæster, men med Chef Jen som leverandør, kan du godt læne dig tilbage, og tage imod gæsternes ros for dejlig mad.</h3>
          <span className={index.quoteName}>Mette Bruun Svendsen</span>
          <Link href='https://www.facebook.com/Chefjendk/reviews/?ref=page_internal'><a  target='_blank' className={index.quoteLink}>Se flere facebook anmeldelser</a></Link>
        </section>
        <Course />
        <div className={css.menuForslagWrapper} style={{ display: 'none' }}>
          <h2>Menuforslag</h2>
          <div className={css.menuForslagInner}>
          </div>
        </div>
        <div className={css.cta}>
          <h2>Klar til at bestille?</h2>
          <p>Få et uforpligtende tilbud på mad til jeres næste arrangement ved at sende os en mail vha. knappen nedenunder. Sammensæt selv jeres menu ud fra vores liste med retter, eller få vores bud på en lækker menu til jeres arrangement. Vi kontakter jer efterfølgende indenfor 24 timer.</p>
          <WhiteButton href='mailto:kontakt@chefjen.dk' text='Bestil din mad her' />
          <span>Eller ring til os på <Link href='tel:+4570307048'><a>+45 70 30 70 48</a></Link></span>
        </div>
        <How title='Sådan foregår vores catering'/>
      </section>
    </>
  )
}
