import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import css from '../styles/footer.module.scss'
import WhiteButton from '../components/WhiteButton'
import SolidButton from '../components/SolidButton'
import Instagram from '../public/Instagram_white.svg'
import Facebook from '../public/Facebook_white.svg'

export default function Footer() {
  return(
    <>
      <footer className={css.footer}>
        <div className={css.footerInner}>
          <div className={css.contactWrapper}>
            <h3>Kontakt os</h3>
            <p>Hos Chef Jen går vi op i at maden skal mætte, smage godt, og at der skal være rigeligt af det. Vores retter består af traditionel dansk mad - typisk baseret på en god blanding af kød, fisk, lækre salater og hjemmebagt brød - tilsat et strejf af Thailand. Velbekomme!</p>
            <WhiteButton href='mailto:kontakt@chefjen.dk' text='kontakt@chefjen.dk' />
            <SolidButton href='tel:22929499' text='Ring på +45 22 92 94 99' />
          </div>
        </div>
        <div className={css.footerBottom}>
          <ul className={css.terms}>
            <li><Link href='/'><a>Handelsbetingelser</a></Link></li>
            <li><Link href='/'><a>Persondatapolitik</a></Link></li>
          </ul>
          <span className={css.cvr}>©{new Date().getFullYear()} ChefJen — CVR 37440175</span>
          <ul className={css.socials}>
            <li><Link href='/'><a><Image src={Facebook} width='18' height='18'/></a></Link></li>
            <li><Link href='/'><a><Image src={Instagram} width='18' height='18' /></a></Link></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
