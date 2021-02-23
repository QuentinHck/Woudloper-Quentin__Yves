<template>
  <div class="nieuws-content__item">
    <h2>{{ heading }}</h2>
    <p>
      {{ bodyText }}
    </p>
    <div class="nieuws-content__date">
      <img src="../assets/images/icon-calendar.png" alt="icon of calendar" />
      <p>{{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleBlog',
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
    date: {
      type: String,
      required: true,
    },
  },
};
</script>
