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
            <h1>Her får du frisk og veltilberedt mad, der smager og mætter</h1>
            <Link href='/'><a className={css.button} data='first-button'>Bestil Catering</a></Link>
            <Link href='/'><a className={css.button} data='second-button'>Bestil Private Dining</a></Link>
          </div>
        </div>
      </section>
    </>
  )
}
