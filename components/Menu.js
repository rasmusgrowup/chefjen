import Link from 'next/link'

import MenuList from './MenuList'
import css from '../styles/menu.module.scss'

export default function Menu() {
  return (
    <>
      <nav data='main-navigation'>
        <ul className={css.menuList} data='menu-list' >
          <MenuList />
        </ul>
      </nav>
    </>
  )
}
