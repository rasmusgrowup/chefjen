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
            <Faq title='Levering' text='Vi leverer catering til hele Danmark, primært til Nordjylland, da vi til dagligt er placeret i Aalborg og omegn. Der tillægges et kørselsgebyr som afhænger af distancen. Tøv ikke med at kontakte os for at få mere information om priser på kørsel og levering til din fest. Når vi sammen planlægger catering til din fest, aftaler vi også hvornår vi ankommer til adressen og hvornår vi kører derfra igen.' />
            <Faq title='Bestillings- og betalingsfrist' text='Catering kan senest bestilles 7 dage inden leveringsdagen. Betalingen afregnes via en tilsendt faktura som har 7 dages betalingsfrist, når vi har afsluttet vores service hos dig.' />
            <Faq title='Leje af tjenere' text='Har du brug for hjælp i køkkenet og omkring bordet under arrangementet, kan du booke tjenere hos os. Du skal venligst booke personale minimum tre uger før dit arrangement. Vores tjenere kan bookes til at hjælpe med opdækning, servering, afrydning, opvask m.m. Pris DKK 395 pr. time (minimum 5 timer). Bemærk, at der beregnes transporttid for både kok og personale.' />
            <Faq title='Fødevareallergi' text='Vi har desværre ikke mulighed for at lave særlige menuer tilpasset fødevareallergier.' />
            <Faq title='Afbestilling' text='Afbestilling skal ske skriftligt på kontakt@chefjen.dk, og skal være givet minimum 5 hverdage før det aftalte leveringstidspunkt. Ved afbestilling modtager du en bekræftelse på, at afbestillingen er modtaget. Læs vores handelsbetingelser for at se vores fulde afbestillingsbetingelser. Find vores handelsbetingelser i bunden af siden.' />
          </div>
        </div>
      </section>
    </>
  )
}
