import { useState, useEffect } from 'react';
import css from '../styles/form.module.scss';
import { GraphQLClient, gql } from 'graphql-request';

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/ckymsus1203z101z04nrn9eoy/master'
  )

  const { menus } = await graphcms.request(
    `
      {
        menus {
          titel
          id
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

export default function Kontakt({ menus }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [value, setValue] = useState('Private Dining');
  const [message, setMessage] = useState('');
  const [complete, setComplete] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      value,
      message,
    };
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    });
    setTimeout(function(){alert('Tak for din henvendelse. Vi bestræber os på at svare alle henvendelser indenfor 24 timer. Du hører fra os hurtigst muligt.');}, 200)
  };

  useEffect(() => {
    if ( name.length > 0 && email.length > 0 && phone.length > 0 && message.length > 0) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [name, email, phone, value, message])

  return (
    <section className={css.section}>
    <div className={css.title}>
      <h1>Kontakt os</h1>
      <p>Udfyld formularen nedenunder, for at få et uforpligtende tilbud på mad-ud-af-huset, private dining, eller leje af vores selskabslokaler. Vi vender tilbage på din henvendelse hurtigst muligt.</p>
    </div>
    <div className={css.wrapper}>
        <form onSubmit={handleSubmit} className={css.form}>
          <label htmlFor="name">Navn:</label>
          <input
            id="name"
            type="text"
            onChange={e => setName(e.target.value)}
            placeholder='Anders Andersen'
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder='anders123@andersen.mail'
            required
          />
          <label htmlFor="phone">Telefonnummer:</label>
          <input
            id="phone"
            type="phone"
            onChange={e => setPhone(e.target.value)}
            placeholder='+45 12 34 56 78'
            required
          />
          <label htmlFor='options'>Emne</label>
          <select
            id='options'
            type='select'
            name=''
            value={value}
            onChange={e => setValue(e.target.value)}
            >
            <option value='Private dining'>Private dining</option>
            {menus.map(({ titel, id }) => (
              <option value={titel} key={id}>{titel}</option>
            ))}
            <option value='Leje af lokaler'>Leje af selskabslokaler</option>
          </select>
          <label htmlFor="message">Besked:</label>
          <textarea
            id="message"
            type="text"
            rows="4"
            onChange={e => setMessage(e.target.value)}
            placeholder='Beskriv jeres arrangement'
            required
          />
          <button className={`${css.send} ${complete ? `${css.sendable}` : `${css.unsendable}`}`} type="submit">Send</button>
        </form>
        <p className={css.disclaimer}>Når du bruger vores kontaktformular, accepterer du samtidig at du videregiver dine personlige oplysninger (kun dem du udfylder herover) til Chefjen Aps. Kontakt os på chefjendk@gmail.com for at få slettet dine oplysninger.</p>
    </div>
    </section>
  )
}
