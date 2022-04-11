import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import Button from '../components/Button'
import WhiteButton from '../components/WhiteButton'
import How from '../components/HowPrivateDining'
import css from '../styles/private.module.scss'

import Jen from '../public/Private_dining_Jen_bw.jpg'
import Forret from '../public/forret_anrettet.jpg'
import ForretPim from '../public/Private_dining_forret.jpg'
import Mellemret from '../public/Private_dining_mellemret.jpg'

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
                En eksklusiv aften i madens tegn og godt selskab
              </h1>
              <span className={css.titleTerms} style={{ display: 'none' }}>*pr. kuvert ved min. 10 kuverter</span>
              <p style={{ display: 'none' }}><strong>Vi har store ambitioner og vilde ideér, og dem får du at smage og opleve når vi serverer maden fra vores private dining menu.</strong></p>
              <p>Jensak har rødder i Thailand, og med det traditionelle thailandske køkken bag sig, kokkererer han i det nordiske køkken med 10 års erfaring. Her dukker der nye spændende smagskombinationer op, som vi glæder os til at præsentere for dig. Kan dig og dine venner kalde sig madnørder, så vil I sætte pris på vores private dining med Chef Jen.
              </p>
              <p style={{ display: 'none' }}>Der er plads til dine ønsker til menuen, så lad os høre hvad du drømmer om.</p>
              <div className={css.menuPrice}>600,- kr. pr. kuvert</div>
              <Button href='/kontakt' text='Bestil private dining' />
            </div>
            <div className={css.image}>
              <div className={css.portrait}><Image src={Jen} layout='responsive' sizes='50vw' quality='100' priority='true' placeholder='blur' /></div>
            </div>
          </div>
        </div>
        <div className={css.menu}>
          <div className={css.menuInner}>
            <div className={css.menuImage}>
              <Image src={Mellemret} layout='fill' objectPosition='bottom' objectFit='cover' sizes='50vw' quality='100'/>
            </div>
            <div className={css.menuContent}>
              <div className={css.menuContentInner}>
                <h2>Private Dining menu</h2>
                <span style={{ display: 'none' }}>( elegant & velsmagende )</span>
                <div className={css.courses}>
                  <ul>
                    <li>
                      <h3>Snacks</h3>
                      <p>Curry puff med to slags fyld · blæksprutte · soyabønner · chili dip · tzatziki</p>
                      <p>Dampede bao · grillet krogmodnet skaftkotelet · soyamarineret · syltede rødløg · agurk · koriander · chili/hvidløgscreme · sesam/soyavinaigrette</p>
                      <p>Grønne bønner · mornay sauce · gratineret · serveret m. brødknas</p>
                    </li>
                    <li><h3>Forret</h3><p>Hvidfisk · spinat · bacon · langtidsbagt cherrytomat · sauce suprême · urter</p></li>
                    <li><h3>Mellemret</h3><p>Kammusling · blomkålscreme · edamamebønner · saltmandler · brunet smør</p></li>
                    <li><h3>Hovedret</h3><p>Portobellofarseret kalvemørdbrad · serranoskinke · flødestuvede skovsvampe · kaperscrumble m. brunet smør · syltede ribs · brøndkarse</p>
                      <p>Hertil pommes rösti m. timian & hvidløg og kraftig bordelaise</p>
                    </li>
                    <li><h3>Dessert</h3><p>Kraftig brownie · hvid chokolade ganache · hindbær-pannacotta · nøddekrokant · bær</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={css.quoteSection}>
          <h3 className={css.quote}>Der er mad nok til alle og det smager så alle smagsløgene bliver mætte. Som vært er man altid lidt spændt når der skal holdes fest for så mange gæster, men med Chef Jen som leverandør, kan du godt læne dig tilbage, og tage imod gæsternes ros for dejlig mad.</h3>
          <span className={css.quoteName}>Mette Bruun Svendsen</span>
          <Link href='https://www.facebook.com/Chefjendk/reviews/?ref=page_internal'><a target='_blank' className={css.quoteLink}>Se flere facebook anmeldelser</a></Link>
        </section>
        <div className={css.cta}>
          <h2>Klar til at bestille?</h2>
          <p>Få et uforpligtende tilbud på vores private dining koncept ved at sende os en mail vha. knappen nedenunder. Vi kontakter jer efterfølgende indenfor 24 timer. Du er også velkommen til at ringe til os.</p>
          <WhiteButton href='/kontakt' text='Bestil private dining' />
          <span>Eller ring til os på <Link href='tel:+4561766988'><a>+45 61 76 69 88</a></Link></span>
        </div>
        <How title='Sådan foregår private dining'/>
      </section>
    </>
  )
}
