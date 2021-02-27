<template>
  <article class="evenementen-slider__item">
    <div class="evenementen-slider__image">
      <img :src="imageSrc" />
    </div>
    <div class="evenementen-slider__content">
      <h2>{{ title }}</h2>
      <router-link :to="'/evenementen/' + id" class="button button-link__blue">
        Meer...
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Event',
  props: {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    shortText: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    goTodetail() {
      this.$router.push({ name: 'Evenementen' });
    },
  },
  computed: {
    imageSrc() {
      return require('@/assets/images/' + this.image);
    },
  },
};
</script>

<style lang="scss">
.evenementen-slider__item {
  width: calc((1200px / 3) - 2em);
  float: left;
  background-color: white;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
  padding-bottom: 3rem;
  border-bottom: 3px solid #0559d3;
  position: relative;
  scroll-snap-align: start;
  margin: 1em;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  .evenementen-slider__image {
    transition: all 0.2s ease-in-out;
    z-index: 0;
    position: absolute;
    img {
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  .evenementen-slider__content {
    padding: 0 2em;
    z-index: 2;
    position: relative;
  }

  .evenementen-slider__content {
    h2 {
      color: white;
      font-size: 3em;
      text-shadow: 2px 2px 3px grey;
    }
    a {
      margin-top: 1em;
    }
  }
  &:hover {
    .evenementen-slider__image {
      opacity: 0.6;
    }
  }
}
</style>
