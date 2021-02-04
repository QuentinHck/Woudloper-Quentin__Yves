<template>
  <aside class="signup-field">
    <div class="aside__button signup-field__button button-link__blue">
      <div class="aside__heading signup-field__heading">
        <h2>Wordt nu lid!</h2>
        <div class="dropdown-aside__button"></div>
      </div>
      <form
        class="signup-field__form"
        name="signup-form"
        action=""
        method="GET"
      >
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Naam" />
        <input type="text" placeholder="Adres" />
        <input type="submit" value="Inschrijven" />
      </form>
    </div>
    <div class="aside__button button-agenda ">
      <div class="aside__heading  agenda-field__heading">
        <h2>Agenda</h2>
        <div class="agenda-dropdown dropdown-aside__button">
          <img
            class="calendar-icon"
            src="../assets/images/icon-calendar.svg"
            alt="icoon kalender"
          />
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
          <tbody id="calendar-body"></tbody>
          <div class="calendar-buttons">
            <button class="previousBtn" onClick="calendarPrev()">
              <span></span>
            </button>
            <button class="nextBtn" onClick="calendarNext()">
              <span></span>
            </button>
          </div>
        </table>
      </div>
    </div>
  </aside>
  <div class="hero"></div>
  <section id="nieuws">
    <div class="container">
      <h1>Nieuws</h1>
      <div class="nieuws-content__wrapper">
        <div class="nieuws-content__item">
          <h2>Heading nieuws</h2>
          <p>
            Content nieuws Lorem ipsum dolor sit amet consectetur adipisicing
            elit. explicabo eum ipsam laborum esse architecto odio? Provident
            exercitationem at nihil necessitatibus ea, ullam fuga minima.
          </p>
          <div class="nieuws-content__date">
            <img
              src="../assets/images/icon-calendar.png"
              alt="icon of calendar"
            />
            <p>02.02.2020</p>
          </div>
        </div>
        <div class="nieuws-content__item">
          <h2>Heading nieuws</h2>
          <p>
            Content nieuws Lorem ipsum dolor sit amet consectetur adipisicing
            elit. explicabo eum ipsam laborum esse architecto odio? Provident
            exercitationem at nihil necessitatibus ea, ullam fuga minima.
          </p>
          <div class="nieuws-content__date">
            <img
              src="../assets/images/icon-calendar.png"
              alt="icon of calendar"
            />
            <p>02.02.2020</p>
          </div>
        </div>
        <div class="nieuws-content__item">
          <h2>Heading nieuws</h2>
          <p>
            Content nieuws Lorem ipsum dolor sit amet consectetur adipisicing
            elit. explicabo eum ipsam laborum esse architecto odio? Provident
            exercitationem at nihil necessitatibus ea, ullam fuga minima.
          </p>
          <div class="nieuws-content__date">
            <img
              src="../assets/images/icon-calendar.png"
              alt="icon of calendar"
            />
            <p>02.02.2020</p>
          </div>
        </div>
        <div class="nieuws-content__item">
          <h2>Heading nieuws</h2>
          <p>
            Content nieuws Lorem ipsum dolor sit amet consectetur adipisicing
            elit. explicabo eum ipsam laborum esse architecto odio? Provident
            exercitationem at nihil necessitatibus ea, ullam fuga minima.
          </p>
          <div class="nieuws-content__date">
            <img
              src="../assets/images/icon-calendar.png"
              alt="icon of calendar"
            />
            <p>02.02.2020</p>
          </div>
        </div>
        <div class="nieuws-content__item">
          <h2>Heading nieuws</h2>
          <p>
            Content nieuws Lorem ipsum dolor sit amet consectetur adipisicing
            elit. explicabo eum ipsam laborum esse architecto odio? Provident
            exercitationem at nihil necessitatibus ea, ullam fuga minima.
          </p>
          <div class="nieuws-content__date">
            <img
              src="../assets/images/icon-calendar.png"
              alt="icon of calendar"
            />
            <p>02.02.2020</p>
          </div>
        </div>
        <div class="nieuws-content__item">
          <h2>Heading nieuws</h2>
          <p>
            Content nieuws Lorem ipsum dolor sit amet consectetur adipisicing
            elit. explicabo eum ipsam laborum esse architecto odio? Provident
            exercitationem at nihil necessitatibus ea, ullam fuga minima.
          </p>
          <div class="nieuws-content__date">
            <img
              src="../assets/images/icon-calendar.png"
              alt="icon of calendar"
            />
            <p>02.02.2020</p>
          </div>
        </div>
      </div>
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
      <img src="../assets/images/logo.png" alt="logo scouts woudloper" />
    </div>
  </footer>
</template>
