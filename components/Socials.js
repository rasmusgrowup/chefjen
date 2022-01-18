import Link from 'next/link'
import Image from 'next/image'

import Instagram from '../public/Instagram.svg'
import Facebook from '../public/Facebook.svg'
import css from '../styles/socials.module.scss'

export default function Socials() {
  return (
    <>
      <section className={css.socialsSection}>
        <div className={css.socialsInner}>
          <h3>Følg med her</h3>
          <div className={css.socialLink}>
            <Link href='/'><a className={css.linkInner}>
              <Image src={Instagram} width='18' height='18' />
              <span>@chefjendenmark</span>
            </a></Link>
          </div>
          <div className={css.socialLink}>
            <Link href='/'><a className={css.linkInner}>
              <Image src={Facebook} width='18' height='18'/>
              <span>@chefjendk</span>
            </a></Link>
          </div>
        </div>
      </section>
    </>
  )
}
