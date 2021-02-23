<template>
  <div>
    <aside
      class="
  signup-field
  "
    >
      <AsideBtns />
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
                  :id="event.id"
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
  </div>
</template>

<script>
// @ is an alias to /src
// import mainJs from '@/assets/js/main.js';
import Event from '@/components/Event';
import AsideBtns from '@/components/AsideBtns';
export default {
  name: 'Index',
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
