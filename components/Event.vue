<template>
  <article class="evenementen-slider__item">
    <div class="evenementen-slider__image">
      <img :src="imageSrc" >
    </div>
    <div class="evenementen-slider__content">
      <h2>{{ title }}</h2>
      <p>{{ shortText }}</p>
      <a href="" class="button-more button-link__blue">Lees meer...</a>
    </div>  
  </article>
</template>

<script>
export default {
  name: 'Event',
  props: {
    id: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    shortText:{
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    imageSrc(){
      return require("@/assets/images/" + this.image);
    }
  }
  
};
</script>

<style></style>
