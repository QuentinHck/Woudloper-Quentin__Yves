<template>
  <article class="person">
    <div class="person__image">
      <img :src="imageSrc" />
    </div>
    <div class="person__content">
      <h2>{{ name }}</h2>
      <p>{{ intro }}</p>
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
    name: {
      type: String,
      required: true,
    },
    intro: {
      type: String,
      required: true,
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
.person {
  width: 25%;
  padding: 0.5em;
  &__image {
    margin: auto;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    overflow: hidden;
    -webkit-box-shadow: 1px 2px 2px 2px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 1px 2px 2px 2px #ccc; /* Firefox 3.5 - 3.6 */
    box-shadow: 1px 2px 2px 2px #ccc;
    img {
      margin: auto;
      display: block;
      width: 100%;
    }
  }
  &__content {
    text-align: center;
  }
}
</style>
