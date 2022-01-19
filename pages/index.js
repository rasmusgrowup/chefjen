import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Hero from '../components/Hero'
import Button from '../components/Button'
import WhiteButton from '../components/WhiteButton'
import Socials from '../components/Socials'
import css from '../styles/index.module.scss'

import Forret from '../public/Naerbillede-af-forret.jpg'
import Jen from '../public/Jen.jpg'

export default function Home() {
  return (
    <>
      <Hero />
      <section className={css.subHeader}>
        <h2 className={css.subHeaderTitle}>Vi tilbyder desuden</h2>
        <div className={css.subHeaderInner}>
          <div className={css.leftContent}>
            <h3>Frisk frokostordning</h3>
            <p>Vi tilbyder nemme og lækre frokostordninger til virksomheder i Aalborg omegn. Tegn et fast abonnement på frokosten, og få den leveret hver dag til en god pris.</p>
            <Button href='/' text='Få et tilbud' />
          </div>
          <div className={css.middleContent}>
            <h3>Nem aftensmad</h3>
            <p>Har i lyst til nem aftensmad, der er sundt og lækkert? Så prøv vores dagens ret koncept — slip for indkøb og madlavning, men sig hej til dejlig og varieret mad ud af huset.</p>
            <Button href='/' text='Bestil dagens ret' />
          </div>
          <div className={css.rightContent}>
            <h3>Selskabslokaler</h3>
            <p>Vores smukke lokaler kan danne ramme om jeres næste festlige begivenhed, vigtige forretningsmøder eller frokoster med nære venner. Kig ned i restauranten, eller tag kontakt her.</p>
            <Button href='/' text='Lej vores lokaler' />
          </div>
        </div>
      </section>
      <section className={css.quoteSection}>
        <h3 className={css.quote}>Som vært er man altid lidt spændt når der skal holdes fest for så mange gæster, men med Chef Jen som leverandør, kan du godt læne dig tilbage, og tage imod gæsternes ros for dejlig mad.</h3>
        <span className={css.quoteName}>Mette Bruun Svendsen</span>
        <Link href='https://www.facebook.com/Chefjendk/reviews/?ref=page_internal'><a  target='_blank' className={css.quoteLink}>Se flere facebook anmeldelser</a></Link>
      </section>
      <section className={css.forretSection}>
        <div className={css.forretLeft}>
          <Image src={Forret} layout='responsive' sizes='50vw' quality='100'/>
        </div>
        <div className={css.forretRight}>
          <div className={css.rightInner}>
            <h3>Selskabsmad fra 199,-*</h3><span>*pr. kuvert ved min. 10 kuverter</span>
            <p>Vi har menuer som passer godt til konfirmationer, højtider og andre store begivenheder, såsom bryllupper, jubilæer, runde fødselsdage, firmaarrangementer m.m.</p>
              <Button href='/catering' text='Se aktuelle menuer' />
          </div>
        </div>
      </section>
      <section className={css.privateDining}>
        <div className={css.privateDiningLeft}>
          <div className={css.privateDiningLeftInner}>
            <h3>Private dining i dine vandte omgivelser</h3>
            <p>Vores koncept til dig der ønsker at give dine gæster en helt unik og eksklusiv madoplevelse hjemme hos dig selv. Læn jer tilbage i private rammer mens Chef Jen serverer en række ophøjede smagsoplevelser som I sent vil glemme.</p>
            <p style={{ marginBottom: '2rem' }}>Private dining passer specielt godt til mindre selskaber hvor helt særlige anledninger skal fejres. Her bliver I præsenteret for flere små anretninger med intense smage, som parres med udsøgte vine.</p>
            <WhiteButton href='/' text='Læs mere om Private Dining' />
          </div>
        </div>
        <div className={css.privateDiningRight}>
          <Image src={Jen} layout='responsive' objectPosition='bottom' objectFit='cover' sizes='50vw' quality='100'/>
        </div>
      </section>
      <Socials />
    </>
  )
}
