import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import Button from '../components/Button'
import WhiteButton from '../components/WhiteButton'
import How from '../components/How'
import css from '../styles/selskabslokaler.module.scss'

import Lokale1 from '../public/lokale_1.jpg'
import Lokale2 from '../public/lokale_2.jpg'

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
      <section className={css.selskabslokaler}>
        <div className={css.hero} ref={hero}>
          <div className={css.heroInner}>
            <div className={css.container}>
              <span>Selskabslokaler</span>
              <h1 className={css.heroTitle}>
                Smukke og hyggelige selskabslokaler i hjertet af Aalborg
              </h1>
              <span className={css.titleTerms} style={{ display: 'none' }}>*pr. kuvert ved min. 10 kuverter</span>
              <p>Vi har længe drømt om, at tilbyde vores kunder et sted hvor de kan afholde deres begivenhed, og hvor vi kan facilitere maden. Derfor åbner vi i 2022 for nye lokaler, som samlet kan huse op til 150 personer, eller opdelt kan huse to selskaber af 50 og 100 personer.</p>
              <p>Skal I fejre konfirmation, bryllup, runde fødselsdage, firmaarrangementer, generalforsamlinger, jubilæum eller lignende, så passer vores lokaler perfekt hertil.
              </p>
              <p style={{ display: 'none' }}>Følg med i vores hverdag på vores <Link href='/'><a style={{ color: 'blue' }}>Instagram-profil</a></Link> eller se vores kunders anmeldelser på <Link href='/'><a style={{ color: 'blue' }}>Facebook</a></Link></p>
              <p style={{ display: 'none' }}>Der er plads til dine ønsker til menuen, så lad os høre hvad du drømmer om.</p>
              <Button href='mailto:kontakt@chefjen.dk' text='Lej vores lokaler' />
            </div>
            <div className={css.image}>
              <div className={css.portrait}><Image src={Lokale1} layout='responsive' sizes='50vw' quality='100' priority='true' placeholder='blur' /></div>
            </div>
          </div>
        </div>
        <section className={css.story}>
          <div className={css.storyInner}>
            <div className={css.storyInnerImage}>
              <Image src={Lokale2} />
            </div>
            <div className={css.storyInnerContent}>
              <h2>Hos os kan du holde en god fest for mange personer</h2>
              <p><strong>Vores nye moderniserede lokaler i Aalborg midtby, har samlet plads op til 150 personer og kan være rammerne for din fest.</strong></p>
              <p>I indretningen har vi valgt naturlige materialer i form af pudsede betongulve, mørke akustiklofter og vægge med lyse trælameller. Det giver en varm og stemningsfyldt atmosfære, men er også neutrale farvetoner, som tillader at du kan tilføje pynt og dekoration som passer til din fest.</p>
              <p>Du har mulighed for at leje bordduge hos os, har vi forskellige farver at vælge mellem. Derudover tilbyder vi også leje af lysestager og vaser. Vores lokaler er handicapvenlige, så det er muligt for kørestolsbrugere at benytte alle lokaler samt toiletfaciliteter.</p>
              <p>Ønsker I at benytte vores bar til jeres arrangement, kræver det, at I lejer vores største af de to lokaler med plads op til 100 personer.</p>
              </div>
          </div>
        </section>
      </section>
    </>
  )
}
