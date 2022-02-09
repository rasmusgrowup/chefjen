import css from '../styles/terms.module.scss'
import Link from 'next/link'

export default function Handelsbetingelser() {
  return (
    <>
      <section className={css.terms}>
        <div className={css.inner}><h1>Handelsbetingelser</h1></div>
        <div className={css.inner}>
          <h2>Bestilling</h2>
          <p>Når du laver en bestilling hos Chef Jen, er der ikke indgået en bindende købeaftale med Chef Jen, før du har modtaget en ordrebekræftelse/faktura. Chef Jen forbeholder sig retten til at afvise ordrer over en mail eller via telefon.</p>
        </div>
        <div className={css.inner}>
          <h2>Levering og betaling</h2>
          <p>Chef Jen leverer catering til hele Danmark, primært til Nordjylland, da vi til dagligt er placeret i Aalborg og omegn. Der tillægges et kørselsgebyr som afhænger af distancen. Tøv ikke med at kontakte os for at få mere information om priser på kørsel og levering til din fest. Når vi sammen planlægger catering til din fest, aftaler vi også hvornår vi ankommer til adressen og hvornår vi kører derfra igen. </p>
          <p>Leveringstidspunktet foregår efter aftale. Der kan komme ekstra omkostninger for levering, som altid vil fremgå i din menuforslag/faktura. Ved afhentning vil du ikke blive opkrævet ekstra omkostninger. </p>
        </div>
        <div className={css.inner}>
          <h2>Leveringsgaranti</h2>
          <p>Hvis maden ikke er fremme senest 45 minutter efter aftalt planlagte tidspunkt, får du 50% rabat på din bestilling. Være opmærksom på at garantien kun dækker de tilfælde, hvor ChefJen, har skylden for forsinkelsen.</p>
          <p>Garantien bortfalder i følgende tilfælde:</p>
          <ul>
            <li>Voldsomt snefald - Trafik som følge af trafikuheld - alvorlige strømsvigt eller andre naturkatastrofer.</li>
            <li>Hvis der ikke er nogen hjemme på adressen, når vi ankommer - Oplyst forkert adresse.</li>
          </ul>
        </div>
        <div className={css.inner}>
          <h2>Priser og Betalingsmetoder</h2>
          <p>Bankoverførsel, mobilepay eller kontant. Betalingen af catering/mad til selskab afregnes via en tilsendt faktura.</p>
        </div>
        <div className={css.inner}>
          <h2>Afbestilling</h2>
          <p>Afbestilling skal ske skriftligt på <Link href='mailto:kontaktform@chefjen.dk'><a>kontaktform@chefjen.dk</a></Link>, og skal være givet minimum 5 hverdage før det aftalte leveringstidspunkt. Ved afbestilling modtager du en bekræftelse på, at afbestillingen er modtaget. Hvis afbestillingen sker efter, tillader vi os at beholde 50% af det samlede beløb, uanset begrundelse.</p>
        </div>
        <div className={css.inner}>
          <h2>Leje af tjenere</h2>
          <p>Har du brug for hjælp i køkkenet og omkring bordet under arrangementet, kan du booke tjenere hos os. Du skal venligst booke personale minimum tre uger før dit arrangement. Vores tjenere kan bookes til at hjælpe med opdækning, servering, afrydning, opvask m.m. Pris DKK 300 pr. time (minimum 5 timer). Bemærk, at der beregnes transporttid for både kok og personale.</p>
          <p>Vedrørende fødevareallergi opfordres du til at kontakte personalet, som vil gøre alt for at hjælpe. Chef Jen ApS påtager sig intet ansvar for eventuelle allergiske reaktioner.</p>
        </div>
        <div className={css.inner}>
          <h2>Timeløn for kok</h2>
          <p>Du bedes at oplyse om du gerne vil have en kok til at servicere dit selskab. (Gælder ikke opvask eller oprydning)</p>
          <p>Pris DKK 400 pr. time </p>
        </div>
        <div className={css.inner}>
          <h2>NB!</h2>
          <p>Alt service og varmekasser fra ChefJen, skal være vasket/rengjort efter brug. (Vi tillader os at sende en efterregning på 1000,00 kr. - hvis dette ikke overholdes)</p>
        </div>
      </section>
    </>
  )
}
