import Link from 'next/link'
import { useRouter } from 'next/router'

import css from '../styles/menu.module.scss'

export default function MenuList() {
  const router = useRouter();

  return (
    <>
      <li className={css.index}><Link href='/'><a style={{ textDecoration: `${router.pathname == '/' ? 'underline' : '' }`}}>Forside</a></Link></li>
      <li><Link href='/catering'><a style={{ textDecoration: `${router.pathname == '/catering' ? 'underline' : '' }`}}>Catering</a></Link></li>
      <li><Link href='/private-dining'><a style={{ textDecoration: `${router.pathname == '/private-dining' ? 'underline' : '' }`}}>Private Dining</a></Link></li>
      <li style={{ display: 'none' }}><Link href='/'><a>Dagens Ret</a></Link></li>
      <li><Link href='/selskabslokaler'><a style={{ textDecoration: `${router.pathname == '/selskabslokaler' ? 'underline' : '' }`}}>Selskabslokaler</a></Link></li>
      <li><Link href='/om-chefjen'><a style={{ textDecoration: `${router.pathname == '/om-chefjen' ? 'underline' : '' }`}}>Om Os</a></Link></li>
    </>
  )
}
