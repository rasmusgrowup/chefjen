import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import Button from '../components/Button'
import WhiteButton from '../components/WhiteButton'
import How from '../components/How'
import css from '../styles/private.module.scss'

import Jen from '../public/Jen.jpg'
import Forret from '../public/forret_anrettet.jpg'

export default function PrivateDining() {
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
      <section className={css.private}>
        <div className={css.hero} ref={hero}>
          <div className={css.heroInner}>
            <div className={css.container}>
              <span>Private Dining</span>
              <h1 className={css.heroTitle}>
                En uforglemmelig aften i madens tegn og godt selskab
              </h1>
              <span className={css.titleTerms} style={{ display: 'none' }}>*pr. kuvert ved min. 10 kuverter</span>
              <p style={{ display: 'none' }}><strong>Vi har store ambitioner og vilde ideér, og dem får du at smage og opleve når vi serverer maden fra vores private dining menu.</strong></p>
              <p>Jensak har rødder i Thailand, og med det traditionelle thailandske køkken bag sig, kokkererer han i det nordiske køkken med 10 års erfaring. Her dukker der nye spændende smagskombinationer op, som vi glæder os til at præsentere for dig. Kan dig og dine venner kalde sig madnørder, så vil I sætte pris på vores private dining med Chef Jen.
              </p>
              <p style={{ display: 'none' }}>Der er plads til dine ønsker til menuen, så lad os høre hvad du drømmer om.</p>
              <Button href='mailto:kontakt@chefjen.dk' text='Book private dining her' />
            </div>
            <div className={css.image}>
              <div className={css.portrait}><Image src={Jen} layout='responsive' sizes='50vw' quality='100' priority='true' placeholder='blur' /></div>
            </div>
          </div>
        </div>
        <div className={css.menu}>
          <div className={css.menuInner}>
            <div className={css.menuImage}>
              <Image src={Forret} layout='responsive' objectPosition='center' objectFit='cover' sizes='50vw' quality='100'/>
            </div>
            <div className={css.menuContent}>
              <div className={css.menuContentInner}>
                <h2>Private Dining menu</h2>
                <span>( elegant & velsmagende )</span>
                <div className={css.courses}>
                  <ul>
                    <li>
                      <h3>Snacks</h3>
                      <p>Hjemmefriterede chips af danske kartofler · bøgerøget skinke · morkler</p>
                      <p>Sprød porre · persillecreme · valnødder</p>
                      <p>Bløde blinis · sæsonens første stenbiderrogn syrlig creme fraiche</p>
                    </li>
                    <li><h3>Forret</h3><p>Ruller af tigerrejer · bouillabaisse · bagt tomat</p></li>
                    <li><h3>Mellemret</h3><p>Gravet laks · syrlig sennep · rørt rævesovs</p></li>
                    <li><h3>Mellemret</h3><p>Marineret and · rødkål · blåbær · ristet rugbrød</p></li>
                    <li><h3>Hovedret</h3><p>Oksemørbrad · blomkål & broccoli couscous syltede svampe · svampeflan · kartoffelroulade sprød knas · kraftig sky</p></li>
                    <li><h3>Dessert</h3><p>Gateau Marcel · creme fraichemousse sprød karamel · hindbærsorbet</p></li>
                  </ul>
                </div>
                <div className={css.menuPrice}>600,- kr. pr. kuvert</div>
              </div>
            </div>
          </div>
        </div>
        <section className={css.quoteSection}>
          <h3 className={css.quote}>Som vært er man altid lidt spændt når der skal holdes fest for så mange gæster, men med Chef Jen som leverandør, kan du godt læne dig tilbage, og tage imod gæsternes ros for dejlig mad.</h3>
          <span className={css.quoteName}>Mette Bruun Svendsen</span>
          <Link href='https://www.facebook.com/Chefjendk/reviews/?ref=page_internal'><a target='_blank' className={css.quoteLink}>Se flere facebook anmeldelser</a></Link>
        </section>
        <div className={css.cta}>
          <h2>Klar til at bestille?</h2>
          <p>Vi har gjort det trygt at bestille mad til jeres næste selskab eller fest. Udfyld vores formular og bliv ringet op indenfor 24 timer.</p>
          <WhiteButton href='mailto:kontakt@chefjen.dk' text='Bestil din mad her' />
          <span>Eller ring til os på <Link href='tel:+4570307048'><a>+45 70 30 70 48</a></Link></span>
        </div>
        <How title='Sådan foregår private dining'/>
      </section>
    </>
  )
}
