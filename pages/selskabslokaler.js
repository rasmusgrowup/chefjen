import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import Button from '../components/Button'
import WhiteButton from '../components/WhiteButton'
import css from '../styles/selskabslokaler.module.scss'

import Lokale1 from '../public/ButikMockup.jpg'
import Lokale2 from '../public/ButikMockup_2.jpg'
import Jen from '../public/Private_dining_Jen_bw.jpg'
import Jen2 from '../public/Jen.jpg'
import Buffet from '../public/Buffet_portrait.jpg'
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
      <section className={css.selskabslokaler}>
        <div className={css.hero} ref={hero}>
          <div className={css.heroInner}>
            <div className={css.container}>
              <span>Selskabslokaler</span>
              <h1 className={css.heroTitle}>
                Smukke og hyggelige selskabslokaler i hjertet af Aabybro
              </h1>
              <p>Vi har længe drømt om, at tilbyde vores kunder et sted, hvor de kan afholde deres begivenheder, og hvor vi kan facilitere maden. Derfor åbner vi i 2022 for nye lokaler, som kan huse selskaber på op til 80 mennesker, eller to selskaber af 40 i hvert lokale.</p>
              <p>Skal I fejre konfirmation, bryllup, runde fødselsdage, firmaarrangementer, generalforsamlinger, jubilæum eller lignende, så passer vores komplette løsninger med mad og lokaler perfekt til disse begivenheder.
              </p>
              <p style={{ display: 'none' }}>Følg med i vores hverdag på vores <Link href='/'><a style={{ color: 'blue' }}>Instagram-profil</a></Link> eller se vores kunders anmeldelser på <Link href='/'><a style={{ color: 'blue' }}>Facebook</a></Link></p>
              <p style={{ display: 'none' }}>Der er plads til dine ønsker til menuen, så lad os høre hvad du drømmer om.</p>
              <Button href='mailto:chefjendk@gmail.com?subject=Forespørgsel på Selskabslokaler i Aabybro' text='Kontakt os i dag' />
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
              <h2>Posttorvet - by Chef Jen</h2>
              <p><strong>Selskabslokaler i hjertet af Aabybro</strong></p>
              <p>Hos Chef Jen tilbyder vi mad til alle dine arrangementer, både i vores egne lokaler og ud af huset.</p>
              <p><b>Step 1</b><br/>Før du går i gang med at bestille ChefJen til din begivenhed, er det vigtigt at få have nogenlunde styr på hvor mange gæster der kommer til spisning, hvornår maden skal leveres, og om der er nogle specielle ting i forhold til maden, som vi skal tage hensyn til.</p>
              <p><b>Step 2</b><br/>Lad os mødes! Så vi sammen kan gennemgå vores menuforslag til jer og det praktiske detaljer til jeres specielle dag.</p>
              <p>&quot;Vi tilpasser og skræddersyer menuen, så det passer til det i ønsker&quot;</p>
              </div>
          </div>
        </section>
        <section className={`${css.story} ${css.invertedStory}`}>
          <div className={css.storyInner}>
            <div className={css.storyInnerImage}>
              <Image src={Jen} />
            </div>
            <div className={css.storyInnerContent}>
              <h2>Eksempel 1 &quot;Tallerkenanret&quot; på posttorvet - by Chef Jen</h2>
                <p>En komplet løsning:</p>
                <ul className={css.storyList}>
                  <li>Vores lokale - posttorvet i Aabybro</li>
                  <li>Velkomstdrinks</li>
                  <li>Velkomstsnacks</li>
                  <li>4 rettersmenu - fyldt med smagsoplevelse</li>
                  <li>Fri øl, vand og vin fra kl 17:00 til 12:00</li>
                  <li>Serveringspersonale til 80 personer</li>
                  <li>Standard bordopdækning (services, bestik, glas, hvid dug og vaser)</li>
                  <li>Kaffe og te</li>
                  <li>Natmad (Suppe med lækre hjemmelavet brød)</li>
                  <li>Oprydning og rengøring</li>
                </ul>
              </div>
          </div>
        </section>
        <section className={css.story}>
          <div className={css.storyInner}>
            <div className={css.storyInnerImage}>
              <Image src={Forret} />
            </div>
            <div className={css.storyInnerContent}>
              <h2>Menuforslag - Tallerkenanret</h2>
                <p>
                  <b>Forret:</b><br/>
                  Tempereret rødtungefilet og grillet jomfruhummer med ravioli, spinat, bagte cherrytomat og kaviar. <br/> Serveret med hummerbisque. <br/> Serveret med koldhævet brød. (ciabattabrød)
                </p>
                <p>
                  <b>Mellemret:</b><br/>
                  Kammusling med kamillegelee
                </p>
                <p>
                  <b>Hovedret:</b><br/>
                  Oksemørbrad med små tærte med spinat, stuvede svampe, nye gulerødder med purløg, friteret brød tilsmagt med karpes og hvidløg, rysteribs og brøndkarse. <br/>Serveret med pommes rösti med timian/hvidløgs. Rødvinsreduktion sauce.
                </p>
                <p>
                  <b>Dessert:</b><br/>
                  Kraftig brownie, hindbær-pannacotta, hvid chokolade ganache, syltede mango, bær og letsaltede mandler krokant.<br/>Serveret med hindbærsorbet.
                </p>
              </div>
          </div>
        </section>
        <section className={`${css.story} ${css.invertedStory}`}>
          <div className={css.storyInner}>
            <div className={css.storyInnerImage}>
              <Image src={Jen2} />
            </div>
            <div className={css.storyInnerContent}>
              <h2>Eksempel 2 &quot;Buffet&quot; på posttorvet - by Chef Jen</h2>
                <p>Det i får:</p>
                <ul className={css.storyList}>
                  <li>Vores lokale - posttorvet i Aabybro</li>
                  <li>Velkomstdrinks</li>
                  <li>Velkomstsnacks</li>
                  <li>Forret</li>
                  <li>Buffet (3 slags kød, 2 salater, kartofler og sovs)</li>
                  <li>Fri øl, vand og vin fra kl 17:00 til 12:00</li>
                  <li>Serveringspersonale til 80 personer</li>
                  <li>Standard bordopdækning (services, bestik, glas, hvid dug og vaser)</li>
                  <li>Kaffe og te</li>
                  <li>Natmad (Suppe med lækre hjemmelavet brød)</li>
                  <li>Oprydning og rengøring</li>
                </ul>
              </div>
          </div>
        </section>
        <section className={css.story}>
          <div className={css.storyInner}>
            <div className={css.storyInnerImage}>
              <Image src={Buffet} />
            </div>
            <div className={css.storyInnerContent}>
              <h2>Menuforslag - Buffet</h2>
                <p>
                  <b>Forret:</b><br/>
                  <b>Kold fisketallerken:</b><br/>
                    Bagt laks med pesto. (kold)<br/>
                    Tunmousse.<br/>
                    Gambas pil pil (kæmperejer med paprika, hvidløg, chili og persille)<br/>
                    Urtecreme<br/>
                    Serveret med hjemme bagt brød.<br/>
                </p>
                <p><b>Hovedret:</b><br/>
                <b>Dansk buffet</b><br/>
                  Barbecue /timianmarineret nakkefilet<br/>
                  Sødmælk kalveculotte.<br/>
                  Baby-mixsalat syltede skovbær, nøddekrokant og appelsinsirup.<br/>
                  Tomatsalat med rødløg, feta og basilikumspesto. Timian/hvidløg bagte kartofler.<br/>
                  Svampesauce.<br/>
                  Brød.<br/>
                </p>
                <p><b>Hovedret:</b><br/>
                <b>Thai buffet</b><br/>
                  Tom kha gai<br/>
                  (Varm og lidt Spicy kyllinger i kokosmælk og galangarrod)<br/>
                  Panang curry<br/>
                  (Med okse, bambusskud, aubergine og limeblad) Jasmin ris<br/>
                </p>
              </div>
          </div>
        </section>
      </section>
    </>
  )
}
