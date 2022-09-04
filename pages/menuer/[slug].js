import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import css from '../../styles/menuer.module.scss'
import { GraphQLClient } from 'graphql-request';

import Button from '../../components/Button'
import Chevron from '../../public/Icon awesome-chevron-left_green.svg'

const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckymsus1203z101z04nrn9eoy/master'
);

export async function getStaticProps({ params }) {
  const { menu } = await graphcms.request(
    `
    query MenuPageQuery($slug: String!) {
      menu(where: { slug: $slug }) {
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
        type
        buffet
        forret {
          ... on Forret {
            titel
            id
            beskrivelse {
              text
            }
          }
        }
        ret {
          ... on Ret {
            id
            titel
            beskrivelse {
              text
            }
          }
        }
        dessert {
          ... on Dessert {
            id
            beskrivelse {
              text
            }
            titel
          }
        }
        tilbehoer {
          ... on Tilbehoer {
            id
            type
            tilbehoer {
              text
            }
          }
        }
        tilkoeb {
          html
        }
        pris
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      menu,
    },
  };
}

export async function getStaticPaths() {
  const { menus } = await graphcms.request(`
    {
      menus {
        slug
        titel
      }
    }
  `);

  return {
    paths: menus.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default function Menu({ menu }) {
  const router = useRouter()
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.set(menuRef.current, {
      y:50,
      opacity:0
    });
    gsap.to(menuRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
    });
  }, [])

  return (
    <>
      <section className={css.singleMenuContainer}>
        <div className={css.singleMenu} ref={menuRef}>
          <div className={css.menuContent}>
            <span className={css.backLink} onClick={router.back}>
              <Image src={Chevron} width='9' height='9'/>Gå tilbage
            </span>
            <h1>{menu.titel}</h1>
            <span className={css.typeOfMenu}>Type: { menu.type }</span>
            <p>{menu.beskrivelse.text}</p>
            { menu.tilkoeb != null &&
                <div className={css.addonsWrapper}>
                  <h3>Tilkøb</h3>
                  <div className={css.addons} dangerouslySetInnerHTML={{ __html: menu.tilkoeb.html }}></div>
                </div>
            }
            <span className={css.price}>{menu.pris},- kr./kuvert*</span>
            <span className={css.titleTerms} style={{opacity: '0.25', display: 'block', marginBottom: '1rem'}}>*prisen på vores menuer kan variere</span>
            <Button href='mailto:chefjendk@gmail.com?subject=Bestilling af menu' text='Bestil menuen' />
          </div>
          <div className={css.menuImage}>
            <Image src={menu.billede.url} width='500' height='625' objectFit='cover' objectPosition='center' quality='80'/>
          </div>
        </div>
        <div className={css.menuCourses}>
          <h2 className={css.menuCourseTitle}>Menuen består af:</h2>
          <div className={css.starters}>
            { menu.type != 'tapas' ? <h3>Forret</h3>: '' }
            {menu.forret.map(({ id, titel, beskrivelse }) => (
              <div key={id} className={css.starter}>
                <h4>{titel}</h4>
                <p>{beskrivelse.text}</p>
              </div>
            ))}
          </div>
          <div className={css.mainCourses}>
            { menu.type != 'tapas' ? <h3>Hovedretter</h3>: '' }
            <span className={css.buffetBoolean}>{ menu.buffet == false ? '' : '(Serveres som buffet)'}</span>
            {menu.ret.map(({ id, titel, beskrivelse }) => (
              <div key={id} className={css.mainCourse}>
                <h4>{titel}</h4>
                <p>{beskrivelse.text}</p>
              </div>
            ))}
          </div>
          <div className={css.desserts}>
            { menu.type != 'tapas' ? <h3>Dessert</h3>: '' }
            {menu.dessert.map(({ id, titel, beskrivelse }) => (
              <div key={id} className={css.dessert}>
                <h4>{titel}</h4>
                <p>{beskrivelse.text}</p>
              </div>
            ))}
          </div>
          <div className={css.extras}>
            {menu.tilbehoer.map(({ id, type, tilbehoer }) => (
              <div key={id} className={css.extra}>
                <p><strong>{type}:</strong> {tilbehoer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
