import Image from 'next/image'

import css from '../styles/course.module.scss'
import Button from '../components/Button'

import Forret from '../public/hvid_fisk.jpg'
import Culotte from '../public/culotte_svampe_sovs.jpg'
import Laks from '../public/laks_pesto_lime.jpg'
import Radicchio from '../public/raddichio_salat.jpg'
import Blomkaal from '../public/blomkaal_salat.jpg'
import Tomat from '../public/tomat_salat.jpg'
import Kartofler from '../public/kartofler.jpg'
import Broed from '../public/broed_chili_pesto.jpg'
import Is from '../public/dessert_is.jpg'

export default function Course() {
  return (
    <>
      <div className={css.wrapper}>
        <h2 className={css.courseTitle}>Menuforslag & retter</h2>
        <p className={css.courseText}>Vores catering serveres som buffet, på nær forreten, der bliver anrettet og serveret på en tallerken. Vælg selv jeres menu ud fra listen af retter ved at trykke på knappen, eller bestil vores populære menuforslag.</p>
        <Button href='/' text='se alle vores retter'/>
        <div className={css.inner}>
          <div className={css.dish}>
            <div className={css.imageWrapper}><Image src={Forret} width='370' height='300' objectFit='cover' objectPosition='center' quality='80'/></div>
            <h3>Anrettet forret</h3>
            <p><strong>Hvid fisk</strong> · spinat · cherrytomat · bøgehat · bacon · brøndkarse · serveret med sauce vin blanc</p>
          </div>
          <div className={css.dish}>
            <div className={css.imageWrapper}><Image src={Culotte} width='370' height='300' objectFit='cover' objectPosition='center' quality='80'/></div>
            <h3>Kød</h3>
            <p><strong>Kalveculotte</strong> · stegte bøgehatte · klassisk brun sovs · brøndkarse</p>
          </div>
          <div className={css.dish}>
            <div className={css.imageWrapper}><Image src={Laks} width='370' height='300' objectFit='cover' objectPosition='center' quality='80'/></div>
            <h3>Fisk</h3>
            <p><strong>Lakseside</strong> · bagt med krydderurtepesto · marineret i lime · perfekt tilberedt</p>
          </div>
          <div className={css.dish}>
            <div className={css.imageWrapper}><Image src={Radicchio} width='370' height='300' objectFit='cover' objectPosition='center' quality='80'/></div>
            <h3>Salat</h3>
            <p><strong>Radicchiosalat</strong> · eddamammebønner · blåbær granatæblesylt · brøndkarse · hindbærvinaigrette</p>
          </div>
          <div className={css.dish}>
            <div className={css.imageWrapper}><Image src={Blomkaal} width='370' height='300' objectFit='cover' objectPosition='center' quality='80'/></div>
            <h3>Salat</h3>
            <p><strong>Blomkålsalat</strong> · saltmandler · grana padano · persille · sød sennepsvinaigrette</p>
          </div>
          <div className={css.dish}>
            <div className={css.imageWrapper}><Image src={Tomat} width='370' height='300' objectFit='cover' objectPosition='center' quality='80'/></div>
            <h3>Salat</h3>
            <p><strong>Tomatsalat</strong> · rødløg · mozzarella · basilikumspesto</p>
          </div>
          <div className={css.dish}>
            <div className={css.imageWrapper}><Image src={Kartofler} width='370' height='300' objectPosition='center' objectFit='cover' quality='80'/></div>
            <h3>Grøntsager</h3>
            <p><strong>Kartofler</strong> · sprøde · ovnbagte · stegt m. hvidløg</p>
          </div>
          <div className={css.dish}>
            <div className={css.imageWrapper}><Image src={Broed} width='370' height='300' objectFit='cover' objectPosition='center' quality='80'/></div>
            <h3>Brød</h3>
            <p><strong>Foccacia & ciabatta</strong> · langtidshævet · hjemmebagt · smør · chiliolie · chilipesto</p>
          </div>
          <div className={css.dish}>
            <div className={css.imageWrapper}><Image src={Is} width='370' height='300' objectFit='cover' objectPosition='center' quality='80'/></div>
            <h3>Dessert</h3>
            <p><strong>Vaniljeis</strong> · hjemmerørt · sprød mandelbund · flødeskum · friske bær</p>
          </div>
        </div>
      </div>
    </>
  )
}
