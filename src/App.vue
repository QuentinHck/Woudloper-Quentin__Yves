<template>
  <Header />
  <router-view />
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'app',
  components: { Header },
};
</script>

<style></style>
