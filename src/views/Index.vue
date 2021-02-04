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
            src="@/assets/images/icon-calendar.svg"
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
  <section id="intro">
    <article class="container">
      <h1>Wie zijn we?</h1>
      <h2>Bizon en Panda</h2>
      <div class="intro-content_text">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, est?
          Numquam perferendis consequuntur reiciendis ut nisi obcaecati,
          eligendi assumenda, vero quis cum harum officiis aliquid! Odit
          inventore sint sapiente consequuntur?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, est?
          Numquam perferendis consequuntur reiciendis ut nisi obcaecati,
          eligendi assumenda, vero quis cum harum officiis aliquid! Odit
          inventore sint sapiente consequuntur?
        </p>
      </div>
    </article>
  </section>
  <section id="evenementen">
    <article class="container">
      <h1>Evenementen</h1>
      <div class="evenementen-slider content_text">
        <div class="evenementen-slider__wrapper">
          <div class="evenementen-slider__subcontainer">
            <div class="evenementen-slider__frame">
              <Event
                v-for="event of events"
                :key="event.id"
                :image="event.image"
                :title="event.title"
                :shortText="event.shortText"
              />
            </div>
          </div>
          <div class="evenementen-slider-buttons">
            <button class="previousBtn evenementen-slider-buttons__left">
              <span></span>
            </button>
            <button class="nextBtn evenementen-slider-buttons__right">
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </article>
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
      <img src="@/assets/images/logo.png" alt="logo scouts woudloper" />
    </div>
  </footer>
</template>

<script>
// @ is an alias to /src
// import mainJs from '@/assets/js/main.js';

import Event from '@/components/Event';

export default {
  name: 'Index',
  components: {
    Event,
  },
  data() {
    return {
      events: [
        {
          id: 1,
          image: 'camp.jpg',
          title: 'Groot kamp',
          shortText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
        },
        {
          id: 2,
          image: 'camp.jpg',
          title: 'Bivak',
          shortText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
        },
        {
          id: 3,
          image: 'camp.jpg',
          title: 'Klein kamp',
          shortText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
        },
        {
          id: 4,
          image: 'camp.jpg',
          title: 'Mini kamp',
          shortText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
        },
      ],
    };
  },
};
</script>
