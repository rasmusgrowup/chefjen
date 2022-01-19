import Link from 'next/link'

import css from '../styles/utils.module.scss'

export default function SolidButton({ href, text }) {
  return(
    <>
      <Link href={href}>
        <div className={css.solidButton}>
          <a>{text}</a>
        </div>
      </Link>
    </>
  )
}
