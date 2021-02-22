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
        <div class="dropdown-menu__button">
          <div class="dropdown-menu__button-content"></div>
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
  name: "Header",
  data() {
    return {
      scrollIndex: null,
      dropdownOpen: false,
      navLinks: [
        { label: "Home", path: "/" },
        { label: "Evenementen", path: "/evenementen/1" },
        { label: "Nieuws", path: "/nieuws/" },
        { label: "Contact", path: "/contact/" },
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
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss">
/*---------- NAVIGATION MENU --------------*/
#navigation {
  height: 70px;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  .dropdown__navbar {
    display: none;
    height: 50px;
    @media screen and (max-width: 860px) {
      display: block;
    }
    img {
      height: 80%;
    }
    .dropdown-menu {
      width: 50px;
      height: 50px;
      float: right;
      display: flex;
      justify-content: center;
      align-items: center;
      &__button {
        position: relative;
        z-index: 200;
        &-content {
          width: 30px;
          background-color: #0559d3;
          height: 4px;
          border-radius: 5px;
          transition: all 0.1s ease-in-out;
          z-index: 20;
          &:before,
          &:after {
            content: "";
            position: absolute;
            width: 30px;
            background-color: #0559d3;
            height: 4px;
            border-radius: 5px;
            transition: all 0.3s ease-in-out;
          }
          &:before {
            transform: translateY(-8px);
          }
          &:after {
            transform: translateY(8px);
          }
        }
      }
      &__list {
        position: absolute;
        z-index: 100;
        width: 100vw;
        height: 100vh;
        right: 0;
        top: 0;
        background-color: #0559d3;
        transform: translateX(100%);
        transition: transform 0.2s ease;
        margin: 0;
        display: flex;
        justify-content: center;
        align-content: center;
        &-content {
          align-self: center;
          list-style-type: none;
          font-weight: 500;
          padding: 0;
          margin: 0;
          text-align: center;
          a {
            display: block;
            text-decoration: none;
            text-transform: uppercase;
            color: #fff;
            padding: 0 3em;
            font-size: 1.5em;
          }
        }
      }
      &__list.show-dropdown {
        transform: translateX(0);
      }
    }
  }
  .dropdown-menu.open {
    .dropdown-menu__button-content {
      transform: translateX(-50px);
      background: transparent;
      &:before {
        transform: rotate(45deg) translate(35px, -35px);
        background-color: #fff;
      }
      &:after {
        transform: rotate(-45deg) translate(35px, 35px);
        background-color: #fff;
      }
    }
  }
  nav {
    height: 70px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 860px) {
      display: none;
    }
    img {
      height: 50px;
      margin: 8px 0;
    }
    a {
      text-decoration: none;
      color: #003575;
      display: block;
      padding: 0 1em;
      position: relative;
    }
    a.active::after {
      position: absolute;
      top: 85%;
      left: 0;
      width: 100%;
      height: 2px;
      background: rgba(5, 90, 211, 1);
      content: "";
      opacity: 1;
    }
    a::after {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 2px;
      background: rgba(5, 90, 211, 1);
      content: "";
      opacity: 0;
      -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
      -moz-transition: opacity 0.3s, -moz-transform 0.3s;
      transition: opacity 0.3s, transform 0.3s;
      -webkit-transform: translateY(10px);
      -moz-transform: translateY(10px);
      transform: translateY(10px);
    }
    a:hover::after,
    a:focus::after {
      opacity: 1;
      -webkit-transform: translateY(0px);
      -moz-transform: translateY(0px);
      transform: translateY(0px);
    }
    ul {
      display: flex;
      list-style-type: none;
      height: 100%;
      margin: 0;
      line-height: 70px;
    }
  }
}
.navigation-background__colored {
  background-color: rgba(255, 255, 255, 1);
  transition: all 0.3s ease-in-out;
  box-shadow: 1px -7px 22px 0px rgba(5, 89, 211, 0.87);
  -webkit-box-shadow: 1px -7px 22px 0px rgba(5, 89, 211, 0.87);
  -moz-box-shadow: 1px -7px 22px 0px rgba(5, 89, 211, 0.87);
}
</style>