import Image from 'next/image'

import Faq from '../components/Faq'
import css from '../styles/how.module.scss'

import Pan from '../public/pan_icon.png'
import Hand from '../public/hand_icon.png'
import Hat from '../public/hat_icon.png'

export default function HowCatering({ title }) {
  return (
    <>
      <section className={css.howWrapper}>
        <h2 className={css.howTitle}>{title}</h2>
        <div className={css.howInner}>
          <div className={css.point}>
            <Image src={Pan} quality='100' width='90' height='90'/>
            <h3>Velsmag og kvalitet</h3>
            <p>Vi har fokus på ingredienser af høj kvalitet og sørger for at maden smager lige som den skal. Vi bager endda vores eget brød, fordi det bare smager bedre.</p>
          </div>
          <div className={css.point}>
            <Image src={Hand} quality='100' width='90' height='90'/>
            <h3>Slip for besværet</h3>
            <p>Ingen fedtede fingre når kokken står for maden. Slip for pletter på festtøjet og slap af med gæsterne uden for køkkenet.</p>
          </div>
          <div className={css.point}>
            <Image src={Hat} quality='100' width='90' height='90'/>
            <h3>Professionel kok</h3>
            <p>Jensak er uddannet kok og med mange års erfaring sammensætter og tilbereder han retter som passer til netop dine ønsker og dit arrangement.</p>
          </div>
        </div>
        <div className={css.faq}>
          <h2 className={css.faqTitle}>Ofte stillede spørgsmål</h2>
          <div className={css.questions}>
            <Faq title='Levering' text='Vi har fokus på ingredienser af høj kvalitet og sørger for at maden smager lige som den skal. Vi bager endda vores eget brød, fordi det bare smager bedre.' />
            <Faq title='Betalingsfrist' text='Jensak er uddannet kok og med mange års erfaring sammensætter og tilbereder han retter som passer til netop dine ønsker og dit arrangement.' />
            <Faq title='Afhentning af fade og skåle' text='Jensak er uddannet kok og med mange års erfaring sammensætter og tilbereder han retter som passer til netop dine ønsker og dit arrangement.' />
            <Faq title='Afbestillingsbetingelser' text='Jensak er uddannet kok og med mange års erfaring sammensætter og tilbereder han retter som passer til netop dine ønsker og dit arrangement.' />
            <Faq title='Modtagelse af maden' text='Jensak er uddannet kok og med mange års erfaring sammensætter og tilbereder han retter som passer til netop dine ønsker og dit arrangement.' />
          </div>
        </div>
      </section>
    </>
  )
}
