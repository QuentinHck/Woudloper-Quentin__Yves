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
    <section id="evenementen">
      <div class="container">
        <h1>Evenementen</h1>
        <div class="evenementen-slider content_text">
          <div class="evenementen-slider__main">
            <div class="evenementen-slider__main-image">
              <img :src="require('../assets/images/' + activeEvent.image)" />
            </div>
            <div class="evenementen-slider__main-content-text">
              <div>
                <h1>{{ activeEvent.title }}</h1>
                <p>
                  {{ activeEvent.shortText }}
                </p>
                <p>
                  {{ activeEvent.bodyText }}
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
  </div>
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
          bodyText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
        },
        {
          id: 2,
          image: 'scouts2.jpg',
          title: 'Bivak',
          shortText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
          bodyText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
        },
        {
          id: 3,
          image: 'scouts1.jpg',
          title: 'Klein kamp',
          shortText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
          bodyText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
        },
        {
          id: 4,
          image: 'camp.jpg',
          title: 'Mini kamp',
          shortText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
          bodyText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
        },
      ],
    };
  },
  computed: {
    activeEvent: function() {
      let urlId = this.$route.params.eventid;
      return this.events[urlId - 1];
    },
  },
};
</script>
<style lang="scss">
.evenementen-slider__main {
  display: flex;
  margin-bottom: 3rem;
  &-image {
    flex: 1;
    overflow: hidden;
    img {
      max-width: 100%;
    }
  }
  &-content-text {
    flex: 1;
    padding: 2rem;
  }
}
</style>
