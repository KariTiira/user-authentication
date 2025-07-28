# Käyttäjän todentaminen ja valtuuttaminen React.js:ssä

Tämän tehtävän avulla opit tärkeitä React.js-konsepteja, kuten komponenttien hallintaa, reititystä ja käyttäjätunnistusta avoimen lähdekoodin kirjastoilla.

## Tehtävän kuvaus

Tee React.js-sovellus, jossa käyttäjä voi:

1. Rekisteröityä luomalla käyttäjätilin.
2. Kirjautua sisään ja saada henkilökohtaisen näkymän.
3. Nähdä vain omia tietojaan, kun hän on kirjautuneena.
4. Valtuuttaminen toteutetaan siten, että tietyt näkymät ovat vain kirjautuneille käyttäjille.

## Ohjeet

**1. Frontend:**

- Luo yksinkertainen React.js-sovellus.
- Käytä kirjastoa, kuten react-router-dom navigointiin.
- Lisää kirjautumis- ja rekisteröintilomakkeet.
- Toteuta yksityinen reititys (Private Routes), joka sallii pääsyn tiettyihin näkymiin vain, jos käyttäjä on kirjautunut.

**2. Backend** (valinnainen):

- Voit käyttää Firebase Authenticationia, tai toteuttaa oman backendi esimerkiksi Node.js:llä ja Expressillä.
- Toteuta JWT-todennus, jossa backend generoi ja vahvistaa kirjautumistokenit.

**3. Toiminnot:**

- Kun käyttäjä kirjautuu onnistuneesti, hän saa todennustokenin (esim. JWT tai Firebase ID Token).
- Tallennettu token säilytetään turvallisesti (esim. httpOnly-evästeenä tai localStorage-muistissa).
- Tarkista token jokaisessa suojatussa reitissä ja salli pääsy vain, jos token on voimassa.

**4. Open Source -kirjastot:**

- Firebase Authentication: Jos käytät Firebasea, implementoi sen valmiit kirjautumis- ja rekisteröintitoiminnot.
- JWT: Käytä kirjastoja kuten jsonwebtoken ja axios käyttäjätokenin validointiin.

## Vaiheet
- Asenna tarvittavat kirjastot:
- Luo React-komponentit:

    - Login.js: Käyttäjän kirjautumislomake.
    - Register.js: Käyttäjän rekisteröintilomake.
    - Dashboard.js: Henkilökohtainen näkymä kirjautuneelle käyttäjälle.
    - PrivateRoute.js: Reitityslogiikka kirjautuneille.

- Valtuutuksen esimerkki: 
    - Jos token ei ole voimassa, näytä käyttäjälle virheilmoitus tai ohjaa hänet kirjautumissivulle.

**Bonus:**
- Lisää logout-toiminto.
- Tee erillinen "admin"-näkymä, johon vain admin-oikeudet omaavat käyttäjät pääsevät.
- Dokumentoi tehtävä README.md-tiedostoon.
