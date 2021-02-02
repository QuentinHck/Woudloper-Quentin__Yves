<template>
  <div id="navigation" class="navigation-background__transparant">
    <div class="dropdown__navbar container">
      <img src="@/assets/images/logo.png" alt="logo scouts woudloper" />
      <div :class="{ 'dropdown-menu': true, open: dropdownOpen }">
        <button
          @click="toggleDropdown"
          class="dropdown-menu__button-container"
          type="button"
        >
          <span class="dropdown-menu__button"></span>
        </button>
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
              >
                {{ navLink.label }}
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
          >
            {{ navLink.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      dropdownOpen: false,
      navLinks: [
        { label: 'Home', path: '/' },
        { label: 'Evenementen', path: '/evenementen/' },
        { label: 'Nieuws', path: '/nieuws/' },
        { label: 'Contact', path: '/contact/' },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
  },
};
</script>

<style lang="scss">
#navigation {
  background-color: $blue;
}
</style>
