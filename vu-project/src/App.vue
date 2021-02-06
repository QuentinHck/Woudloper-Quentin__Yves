<!--<template>
<div>
  <div id="navigation" class="navigation-background__transparant">
    <div class="dropdown__navbar container">
      <img src="images/logo.png" alt="logo scouts woudloper">
      <div class="dropdown-menu">
        <div class="dropdown-menu__button-container">
          <div class="dropdown-menu__button"></div>
        </div>
        <div class="dropdown-menu__list">
          <ul class="dropdown-menu__list-content">
            <a class="active"><li><router-link to="/">Home</router-link></li></a>
            <a><li><router-link to="/evenementen">Evenementen</router-link></li></a>
            <a><li><router-link to="/nieuws">Nieuws</router-link></li></a>
            <a><li><router-link to="/contact">Contact</router-link></li></a>
          </ul>
        </div>  
      </div>
    </div>
    <nav class="container">
      <img src="@/assets/images/logo.png" alt="logo scouts woudloper">
      <ul>
        <a class="active"><li><router-link to="/">Home</router-link></li></a>
        <a><li> <router-link to="/evenementen">Evenementen</router-link></li></a>
        <a><li><router-link to="/nieuws">Nieuws</router-link></li></a>
        <a><li><router-link to="/contact">Contact</router-link></li></a>
      </ul>
    </nav>
  </div>
  <router-view />
  </div>
</template>

<script>
// import Navigation from '@/components/Navigation';
export default {
  name: "app",
};
</script>

<style>
</style> -->

<template>
<div>
  <Header />
  <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "app",
  components: { Header },
};
</script>

<style></style>