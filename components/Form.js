import { useState, useRef } from 'react';
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

export default function Form({ menus }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [value, setValue] = useState('Private dining');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
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
    console.log(data);
  };

  return (
    <div className={css.wrapper}>
        <form onSubmit={handleSubmit} className={css.form}>
          <label htmlFor="name">Navn:</label>
          <input
            id="name"
            type="text"
            name='name'
            onChange={e => setName(e.target.value)}
            placeholder='Anders Andersen'
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name='email'
            onChange={e => setEmail(e.target.value)}
            placeholder='anders123@andersen.mail'
            required
          />
          <label htmlFor="phone">Telefonnummer:</label>
          <input
            id="phone"
            type="phone"
            name='phone'
            onChange={e => setPhone(e.target.value)}
            placeholder='+45 12 34 56 78'
            required
          />
          <label htmlFor='options'>Emne</label>
          <select
            id='options'
            name='options'
            value={value}
            onChange={(e) => { setValue(e.target.value);}}
            required
            >
            <option value='Private dining'>Private dining</option>
            <option value='Valentinsmenu'>Valentinsmenu</option>
          </select>
          <label htmlFor="message">Besked:</label>
          <textarea
            id="message"
            type="text"
            name='message'
            rows="4"
            onChange={e => setMessage(e.target.value)}
            placeholder='Beskriv jeres arrangement'
            required
          />
          <button className={css.send} type="submit" style={{ opacity: `${ complete ? '0.25' : '1' }`}}>Send</button>
        </form>
    </div>
  );
}
