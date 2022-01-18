import Link from 'next/link'

import css from '../styles/utils.module.scss'

export default function Button({ href, text }) {
  return(
    <>
      <Link href={href}>
        <div className={css.button}>
          <a>{text}</a>
        </div>
    </Link>
    </>
  )
}
