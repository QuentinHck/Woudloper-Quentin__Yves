<template>
  <h1>{{ heading }}</h1>
  <p>
    {{ bodyText }}
  </p>
  <h2>Voor wie?</h2>
  <div class="evenementen-slider__main-content-text_filter">
    <a href="" class="button">Junioren</a>
    <a href="" class="button">Senioren</a>
  </div>
</template>

<script>
export default {
  name: 'MainEvent',
  props: {
    id: {
      type: Number,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    bodyText: {
      type: String,
      required: true,
    },
  },
};
</script>
