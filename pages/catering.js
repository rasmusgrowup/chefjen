import Image from 'next/image'
import Link from 'next/link'

import Button from '../components/Button'
import WhiteButton from '../components/WhiteButton'
import How from '../components/How'
import Course from '../components/Course'
import css from '../styles/catering.module.scss'

import Buffet from '../public/Buffet_landscape_small.jpg'
import BuffetPortrait from '../public/Buffet_portrait.jpg'
import Forret from '../public/Forret_16_9.jpg'

export default function Catering() {
  return(
    <>
      <section className={css.catering}>
        <div className={css.hero}>
          <div className={css.heroInner}>
            <div className={css.container}>
              <h1 className={css.heroTitle}>
                Dejlig mad til store og små selskaber fra 199,-*
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
        <Course />
        <div className={css.menuForslagWrapper} style={{ display: 'none' }}>
          <h2>Menuforslag</h2>
          <div className={css.menuForslagInner}>
          </div>
        </div>
        <div className={css.cta}>
          <h2>Klar til at bestille?</h2>
          <p>Vi har gjort det trygt at bestille mad til jeres næste selskab eller fest. Udfyld vores formular og bliv ringet op indenfor 24 timer.</p>
          <WhiteButton href='mailto:kontakt@chefjen.dk' text='Bestil din mad her' />
          <span>Eller ring til os på <Link href='tel:+4570307048'><a>+45 70 30 70 48</a></Link></span>
        </div>
        <How title='Sådan foregår vores catering'/>
      </section>
    </>
  )
}
