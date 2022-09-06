import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Hero from '../components/Hero'
import Button from '../components/Button'
import WhiteButton from '../components/WhiteButton'
import Socials from '../components/Socials'
import css from '../styles/index.module.scss'
import menuCSS from '../styles/menuer.module.scss'

import Forret from '../public/Naerbillede-af-forret.jpg'
import Jen from '../public/Jen.jpg'

import { GraphQLClient, gql } from 'graphql-request';

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/ckymsus1203z101z04nrn9eoy/master'
  )

  const { menus } = await graphcms.request(
    `
      {
        menus (first: 3) {
          slug
          id
          titel
          billede {
            url
            height
            width
          }
          beskrivelse {
            text
          }
          pris
        }
      }
    `
  );

  return {
    props: {
      menus,
    },
  };
}

export default function Home({ menus }) {

  return (
    <>
      <Hero />
      <section className={menuCSS.menuer}>
        <h2>Aktuelle menuer</h2>
        <div className={menuCSS.inner}>
        {menus.map(({ id, slug, titel, pris, billede, beskrivelse }) => (
          <div className={menuCSS.menuWrapper} key={id}>
            <Link href={`/menuer/${slug}`}><a>
              <Image src={billede.url} width='370' height='300' objectFit='cover' objectPosition='center' quality='80'/>
              <h3>{titel}</h3>
              <p>{beskrivelse.text}</p>
            </a></Link>
          </div>
        ))}
        </div>
        <Button href='/menuer' text='Se alle menuer' />
      </section>
      <section className={css.quoteSection}>
        <h3 className={css.quote}>Der er mad nok til alle og det smager så alle smagsløgene bliver mætte. Som vært er man altid lidt spændt når der skal holdes fest for så mange gæster, men med Chef Jen som leverandør, kan du godt læne dig tilbage, og tage imod gæsternes ros for dejlig mad.</h3>
        <span className={css.quoteName}>Mette Bruun Svendsen</span>
        <Link href='https://www.facebook.com/Chefjendk/reviews/?ref=page_internal'><a  target='_blank' className={css.quoteLink}>Se flere facebook anmeldelser</a></Link>
      </section>
      <section className={css.forretSection}>
        <div className={css.forretLeft}>
          <Image src={Forret} layout='responsive' sizes='50vw' quality='100'/>
        </div>
        <div className={css.forretRight}>
          <div className={css.rightInner}>
            <h3>Selskabsmad fra 199,-</h3><span style={{ display: 'none' }}>*pr. kuvert ved min. 10 kuverter</span>
            <p>Vi har menuer som passer godt til konfirmationer, højtider og andre store begivenheder, såsom bryllupper, jubilæer, runde fødselsdage, firmaarrangementer m.m.</p>
              <Button href='/catering' text='læs mere om vores catering' />
          </div>
        </div>
      </section>
      <section className={css.privateDining}>
        <div className={css.privateDiningLeft}>
          <div className={css.privateDiningLeftInner}>
            <h3>Prøv en eksklusiv madoplevelse med vores Private Dining koncept</h3>
            <p>Vores koncept til dig der ønsker at give dine gæster en helt unik og eksklusiv madoplevelse hjemme hos dig selv. Læn jer tilbage i private rammer mens Chef Jen serverer en række ophøjede smagsoplevelser som I sent vil glemme.</p>
            <p style={{ marginBottom: '2rem' }}>Private dining passer specielt godt til mindre selskaber hvor helt særlige anledninger skal fejres. Her bliver I præsenteret for flere små anretninger med intense smage, som parres med udsøgte vine.</p>
            <WhiteButton href='/private-dining' text='Læs mere om Private Dining' />
          </div>
        </div>
        <div className={css.privateDiningRight}>
          <Image src={Jen} layout='responsive' objectPosition='bottom' objectFit='cover' sizes='50vw' quality='100'/>
        </div>
      </section>
      <section className={css.subHeader}>
        <h2 className={css.subHeaderTitle}>Vi tilbyder desuden</h2>
        <div className={css.subHeaderInner}>
          <div className={css.leftContent}>
            <h3>Frokostordning</h3>
            <p>Vi tilbyder nemme og lækre frokostordninger til virksomheder i Aalborg omegn. Tegn et fast abonnement på frokosten, og få den leveret hver dag til en god pris</p>
            <Button href='mailto:chefjendk@gmail.com?subject=Forespørgsel på Frokostordning' text='Få et tilbud' />
          </div>
          <div className={css.rightContent}>
            <h3>Selskabslokaler</h3>
            <p>Vores smukke lokaler kan danne ramme om jeres næste festlige begivenhed. Ring til os i dag for et uforpligtende tilbud på vores selskabslokaler</p>
            <Button href='mailto:chefjendk@gmail.com?subject=Forespørgsel på Selskabslokaler i Aabybro' text='Kontakt os i dag' />
          </div>
        </div>
      </section>
    </>
  )
}
