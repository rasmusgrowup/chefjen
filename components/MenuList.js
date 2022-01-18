import Link from 'next/link'

export default function MenuList() {
  return (
    <>
      <li><Link href='/catering'><a>Catering</a></Link></li>
      <li><Link href='/'><a>Private Dining</a></Link></li>
      <li><Link href='/'><a>Dagens Ret</a></Link></li>
      <li><Link href='/'><a>Selskabslokaler</a></Link></li>
      <li><Link href='/'><a>Om Os</a></Link></li>
    </>
  )
}
