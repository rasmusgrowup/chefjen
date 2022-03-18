import Link from 'next/link'
import Image from 'next/image'

import css from '../../styles/menuer.module.scss'
import { GraphQLClient, gql } from 'graphql-request';

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/ckymsus1203z101z04nrn9eoy/master'
  )

  const { menus } = await graphcms.request(
    `
      {
        menus {
          slug
          id
          titel
          billede {
            url
            height
            width
          }
          beskrivelse {
            text
          }
          pris
        }
      }
    `
  );

  return {
    props: {
      menus,
    },
  };
}

export default function Menuer({ menus }) {
  console.log({ menus })

  return (
    <>
      <div className={css.menuContainer}>
        <div className={css.menuer}>
          <h2>Vores menuer</h2>
          <div className={css.inner}>
          {menus.map(({ id, slug, titel, pris, billede, beskrivelse }) => (
            <div className={css.menuWrapper} key={id}>
              <Link href={`/menuer/${slug}`}><a>
                <Image src={billede.url} width='370' height='300' objectFit='cover' objectPosition='center' quality='80'/>
                <h3>{titel}</h3>
                <p>{beskrivelse.text}</p>
                <span className={css.price}>{pris},- kr./kuvert*</span>
                <span className={css.titleTerms} style={{opacity: '0.25'}}>*prisen på vores menuer kan variere</span>
              </a></Link>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  )
}
