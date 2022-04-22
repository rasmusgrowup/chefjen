import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import Button from '../components/Button'
import WhiteButton from '../components/WhiteButton'
import How from '../components/HowCatering'
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
              <span>Catering</span>
              <h1 className={css.heroTitle}>
                Mad ud af huset til store og små selskaber fra  199kr.*
              </h1>
              <span className={css.titleTerms}>*prisen på vores menuer kan variere</span>
              <p>Lad os stå for maden til dit arrangement, så sørger vi for at dine gæster får en dejlig smagsoplevelse og går mætte hjem.<br /><br/>Vi har løbende aktuelle menuer som passer godt til konfirmationer, højtider og andre store begivenheder, såsom bryllupper, jubilæer, runde fødselsdage, firmaarrangementer m.m. Kontakt os for et uforpligtende tilbud.
              </p>
              <p style={{ display: 'none' }}>Der er plads til dine ønsker til menuen, så lad os høre hvad du drømmer om.</p>
              <Button href='mailto:chefjendk@gmail.com?subject=Bestilling af catering til arrangement' text='Bestil catering' />
            </div>
            <div className={css.image}>
              <div className={css.landscape}><Image src={Buffet} layout='responsive' sizes='66vw' quality='100' priority='true' placeholder='blur' /></div>
              <div className={css.portrait}><Image src={BuffetPortrait} layout='responsive' sizes='50vw' quality='100' priority='true' placeholder='blur' /></div>
            </div>
          </div>
        </div>
        <section className={index.quoteSection}>
          <h3 className={index.quote}>Chef Jen lavede og serverede 3 retter lækker mad til vores søns konfirmation. Han klarede på fornem vis, at lave en menu som opfyldte både konfirmandens og forældrenes ønsker. Med Chef Jen var vi i trygge hænder og vi kan klart give de bedste anbefalinger.</h3>
          <span className={index.quoteName}>Søren Trier Asklev</span>
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
          <p>Få et uforpligtende tilbud på mad til jeres næste arrangement ved at sende os en mail vha. knappen nedenunder. Som udgangspunkt skal du vælge fra vores faste menuer, men du er altid velkommen til at forespørge ændringer i retterne. Vi kontakter jer efterfølgende indenfor 24 timer.</p>
          <WhiteButton href='mailto:chefjendk@gmail.com?subject=Forespørgsel på mad til arrangement' text='Bestil din mad' />
          <span>Eller ring til os på <Link href='tel:+4561766988'><a>+45 61 76 69 88</a></Link></span>
        </div>
        <How title='Sådan foregår vores catering'/>
      </section>
    </>
  )
}
