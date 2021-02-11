<template>
  <header
    id="navigation"
    :class="{ 'navigation-background__colored': scrollIndex > 70 }"
  >
    <div class="dropdown__navbar container">
      <img src="@/assets/images/logo.png" alt="logo scouts woudloper" />
      <div
        @click="openDropdown"
        :class="{
          'dropdown-menu': true,
          open: dropdownOpen,
        }"
      >
        <div class="dropdown-menu__button-container">
          <div class="dropdown-menu__button"></div>
        </div>
        <div
          :class="{
            'dropdown-menu__list': true,
            'show-dropdown': dropdownOpen,
          }"
        >
          <ul class="dropdown-menu__list-content">
            <li v-for="navLink in navLinks" :key="navLink.path">
              <router-link
                :class="{ active: $route.path === navLink.path }"
                :to="navLink.path"
                >{{ navLink.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nav class="container">
      <img src="@/assets/images/logo.png" alt="logo scouts woudloper" />
      <ul>
        <li v-for="navLink in navLinks" :key="navLink.path">
          <router-link
            :class="{ active: $route.path === navLink.path }"
            :to="navLink.path"
            >{{ navLink.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      scrollIndex: null,
      dropdownOpen: false,
      navLinks: [
        { label: 'Home', path: '/' },
        { label: 'Evenementen', path: '/evenementen/:eventid' },
        { label: 'Nieuws', path: '/nieuws/' },
        { label: 'Contact', path: '/contact/' },
      ],
    };
  },
  methods: {
    updateScroll() {
      this.scrollIndex = window.scrollY;
    },
    openDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
};
</script>

<style></style>
