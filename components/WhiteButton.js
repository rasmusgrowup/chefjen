import Link from 'next/link'

import css from '../styles/utils.module.scss'

export default function WhiteButton({ href, text }) {
  return(
    <>
      <Link href={href}>
        <div className={css.whiteButton}>
          <a>{text}</a>
        </div>
      </Link>
    </>
  )
}
