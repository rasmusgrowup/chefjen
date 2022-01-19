import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import Button from '../components/Button'
import WhiteButton from '../components/WhiteButton'
import How from '../components/How'
import css from '../styles/chefjen.module.scss'

import PimJen from '../public/Pim_Jen.jpg'
import Jen from '../public/Jen.jpg'

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
      <section className={css.chefjen}>
        <div className={css.hero} ref={hero}>
          <div className={css.heroInner}>
            <div className={css.container}>
              <span>Om Chef Jen</span>
              <h1 className={css.heroTitle}>
                Festlige og autentiske madoplevelser med et strejf af Thailand
              </h1>
              <span className={css.titleTerms} style={{ display: 'none' }}>*pr. kuvert ved min. 10 kuverter</span>
              <p style={{ display: 'none' }}><strong>Vi har store ambitioner og vilde ideér, og dem får du at smage og opleve når vi serverer maden fra vores private dining menu.</strong></p>
              <p>Bag Chef Jen møder du parret Jensak og Suwanna, begge med thailandske rødder, som siden 2010 har tilberedt og leveret mad til selskaber og festlige arrangementer overalt i Danmark. Familien er bosat i Nørhalne, og i 2022 åbner de dørene for en ny restaurant og flotte festlokaler i midtbyen.
              </p>
              <p style={{ display: 'none' }}>Følg med i vores hverdag på vores <Link href='/'><a style={{ color: 'blue' }}>Instagram-profil</a></Link> eller se vores kunders anmeldelser på <Link href='/'><a style={{ color: 'blue' }}>Facebook</a></Link></p>
              <p style={{ display: 'none' }}>Der er plads til dine ønsker til menuen, så lad os høre hvad du drømmer om.</p>
              <Button href='mailto:kontakt@chefjen.dk' text='Kontakt os i dag' />
            </div>
            <div className={css.image}>
              <div className={css.portrait}><Image src={PimJen} layout='responsive' sizes='50vw' quality='100' priority='true' placeholder='blur' /></div>
            </div>
          </div>
        </div>
        <section className={css.story}>
          <div className={css.storyInner}>
            <div className={css.storyInnerImage}>
              <Image src={Jen} />
            </div>
            <div className={css.storyInnerContent}>
              <h2>Mad skal smage godt, og så skal der være rigeligt af den</h2>
              <p><strong>Vi kommer ikke udenom hvad madkulturen fortæller heroppe i Nordjylland, og vi forsøger heller ikke at undgå sovsen - for den hører sig altså til, både når det er hverdag, og når der er fest. </strong></p>
              <p>Vi har bare opdaget, at der både kan være plads til sovs og salat på en jysk tallerken, og at vores kunder forventer god kvalitet i begge dele, så det leverer vi.</p>
              <p>Vi har også taget højde for en væsentlig bekymring ved sammenkomster - er der nu nok mad? Når alle onklerne er inviteret, så kan man jo komme i tvivl, men vi ved godt hvordan portionsstørrelserne skal være, så du kan læne dig tilbage og nyde en velkendt vits fra onkel Lars, med vished om, at han ikke går sulten hjem.</p>
              </div>
          </div>
        </section>
        <section className={css.quoteSection}>
          <h3 className={css.quote}>Som vært er man altid lidt spændt når der skal holdes fest for så mange gæster, men med Chef Jen som leverandør, kan du godt læne dig tilbage, og tage imod gæsternes ros for dejlig mad.</h3>
          <span className={css.quoteName}>Mette Bruun Svendsen</span>
          <Link href='https://www.facebook.com/Chefjendk/reviews/?ref=page_internal'><a  target='_blank' className={css.quoteLink}>Se flere facebook anmeldelser</a></Link>
        </section>
      </section>
    </>
  )
}
