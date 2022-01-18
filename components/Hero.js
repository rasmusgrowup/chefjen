import Image from 'next/image'
import Link from 'next/link'

import css from '../styles/hero.module.scss'
import Landscape from '../public/Buffet_landscape.jpg'
import Portrait from '../public/Buffet_portrait.jpg'

export default function Hero() {
  return (
    <>
      <section className={css.wrapper}>
        <div className={css.landscapeHero}>
          <div className={css.content}>
            <h1>Catering og Private Dining til jeres festlige begivenheder</h1>
            <Link href='/catering'><a className={css.button} data='first-button'>Se mere & bestil</a></Link>
            <Link href='/privat-dining'><a className={css.button} data='second-button'>Læs mere om Private Dining</a></Link>
          </div>
        </div>
      </section>
    </>
  )
}
