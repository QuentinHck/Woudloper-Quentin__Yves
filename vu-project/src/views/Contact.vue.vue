<template>
<div>
  <aside class="signup-field">
    <div class="aside__button signup-field__button button-link__blue">
      <div class="aside__heading signup-field__heading">
        <h2>Wordt nu lid!</h2>
        <div class="dropdown-aside__button"></div>
      </div>
      <form class="signup-field__form" name="signup-form" action="" method="GET">
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Naam">
        <input type="text" placeholder="Adres">
        <input type="submit" value="Inschrijven">
      </form>
    </div>
    <div class="aside__button button-agenda ">
      <div class="aside__heading  agenda-field__heading">
        <h2>Agenda</h2>
        <div class="agenda-dropdown dropdown-aside__button">
          <img class="calendar-icon" src="../assets/images/icon-calendar.svg" alt="icoon kalender">
        </div>
      </div>
      <div id="card-calendar">
        <h2 class="card-header" id="monthAndYear"></h2>
        <table class="table" id="calendar">
          <thead>
            <tr>
              <th>Zo</th>
              <th>Ma</th>
              <th>Di</th>
              <th>Wo</th>
              <th>Do</th>
              <th>Vr</th>
              <th>Za</th>
            </tr>
          </thead>
          <tbody id="calendar-body">
          </tbody>
          <div class="calendar-buttons">
            <button class="previousBtn" onClick=calendarPrev()><span></span></button>
            <button class="nextBtn" onClick=calendarNext()><span></span></button>
          </div>
        </table>
      </div>
    </div>
  </aside>
  <header>
  </header>
  <section id="contact-content">
    <div class="container">
        <div class="contact-content__text">
          <h1>Contact</h1>
          <div>
            <h2>VZW Woudloper</h2>
            <p><img class="icon" src="images/icon-phone.png" alt=""> 0472/204899</p>
            <p><img class="icon" src="images/icon-marker.png" alt="">Houte 27, 9860 Balegem</p>
            <p><img class="icon" src="images/icon-mail.png" alt="">info@woudloper.be</p>
          </div>
          <div>
            <h2>VZW Woudloper</h2>
            <p><img class="icon" src="images/icon-phone.png" alt=""> 0479/795956</p>
            <p><img class="icon" src="images/icon-marker.png" alt="">Gijzelstraat 12, 9031 Drongen</p>
            <p><img class="icon" src="images/icon-mail.png" alt="">eenheidsleiding@woudloper.be</p>
          </div>
        </div>
      <div class="contact-content__map" >
        <iframe scrolling="no" frameborder="0" src="https://www.google.com/maps/d/embed?mid=1VxP_DYxFyTAG2fzirKjjFrH88uEdiMrD"></iframe>
      </div>
    </div>
  </section>
  <section id="contact-form">
    <div class="container">
      <h1>Contacteer ons</h1>
      <form action="">
        <input type="text" name="" id="" placeholder="NAAM">
        <input type="text" name="" id="" placeholder="VOORNAAM">
        <input type="text" name="" id="" placeholder="E-MAILADRES">
        <input type="text" name="" id="" placeholder="ONDERWERP">
        <input type="submit" name="" id="" value="verzenden">
      </form>
    </div>
  </section>
  <footer>
    <article class="container">
      <h2>Interessante links</h2>
      <ul>
        <a href="">Evenementen</a>
        <a href="">Contacteer ons</a>
        <a href="">Inschrijvingsformulier</a>
        <a href="">Onze agenda</a>
        <a href="">Algemeen reglement</a>
        <a href="">Infobrief groot kamp</a>
      </ul>
    </article>
    <div>
      <img src="../assets/images/logo.png" alt="logo scouts woudloper">
    </div>
  </footer>
  </div>
</template>