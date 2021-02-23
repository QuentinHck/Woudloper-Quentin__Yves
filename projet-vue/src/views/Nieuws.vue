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
    <section id="nieuws">
      <div class="container">
        <h1>Nieuws</h1>
        <div class="nieuws-content__wrapper">
          <ArticleBlog
            v-for="article of articles"
            :key="article.id"
            :heading="article.heading"
            :bodyText="article.bodyText"
            :date="article.date"
          />
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
import AsideBtns from '@/components/AsideBtns';
import ArticleBlog from '../components/ArticleBlog.vue';
export default {
  name: 'nieuws',
  components: {
    AsideBtns,
    ArticleBlog,
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          heading: 'Volgend Kamp',
          bodyText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
          date: '02.02.2020',
        },
        {
          id: 2,
          heading: 'Kamperen',
          bodyText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
          date: '01.07.2020',
        },
        {
          id: 3,
          heading: 'Kamperen kamperen',
          bodyText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
          date: '09.10.2020',
        },
        {
          id: 4,
          heading: 'Olé Olé',
          bodyText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
          date: '29.06.2019',
        },
        {
          id: 5,
          heading: 'Superveel tenten',
          bodyText:
            'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',
          date: '02.12.2019',
        },
      ],
    };
  },
};
</script>
