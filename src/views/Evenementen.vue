<template>
  <aside
    class="
  signup-field
  "
  >
    <AsideBtns />
  </aside>
  <div class="hero"></div>
  <section id="evenementen">
    <div class="container">
      <h1>Evenementen</h1>
      <div class="evenementen-slider content_text">
        <div class="evenementen-slider__main">
          <div class="evenementen-slider__main-image"></div>
          <div class="evenementen-slider__main-content-text">
            <div>
              <h1>{{ this.events[1].title }}</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                rerum perspiciatis in nostrum architecto ut expedita beatae,
                facere quasi nam impedit repudiandae quidem voluptatum vero.
                Voluptatibus odit nulla error iste?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem optio ad accusamus consequuntur maiores minima
                perspiciatis id ut. Dignissimos assumenda quia harum ipsum illo
                repellendus autem corporis ea blanditiis nulla!
              </p>
              <h2>Voor wie?</h2>
              <div class="evenementen-slider__main-content-text_filter">
                <a href="" class="button">Junioren</a>
                <a href="" class="button">Senioren</a>
              </div>
            </div>
          </div>
        </div>
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

<script>
import Event from '@/components/Event';
import AsideBtns from '@/components/AsideBtns';

export default {
  name: 'evenementen',
  components: {
    Event,
    AsideBtns,
  },
  data() {
    return {
      scrollIndex: null,
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
          image: 'scouts2.jpg',
          title: 'Bivak',
          shortText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
        },
        {
          id: 3,
          image: 'scouts1.jpg',
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
