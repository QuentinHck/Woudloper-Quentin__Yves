<template>
  <div
    :class="{
      aside__button: true,
      'signup-field__button': true,
      'button-link__blue': true,
      reduce: scrollIndex > 70,
    }"
  >
    <div @click="toggleDropdown" class="aside__heading signup-field__heading">
      <h2>Wordt nu lid!</h2>
      <div
        :class="{
          'dropdown-aside__button': true,
          open: dropDownOpen,
        }"
      ></div>
    </div>
    <form
      :class="{ 'signup-field__form': true, 'show-dropdown': dropDownOpen }"
      name="signup-form"
      action=""
      method="GET"
    >
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Naam" />
      <input type="text" placeholder="Adres" />
      <input type="submit" value="Inschrijven" />
    </form>
  </div>
  <div
    @click="toggleAgendaDropdown"
    :class="{
      aside__button: true,
      'button-agenda': true,
      reduce: scrollIndex > 70,
    }"
  >
    <div class="aside__heading  agenda-field__heading">
      <h2>Agenda</h2>
      <div
        :class="{
          'agenda-dropdown': true,
          'dropdown-aside__button': true,
          open: agendaOpen,
        }"
      >
        <img
          class="calendar-icon"
          src="@/assets/images/icon-calendar.svg"
          alt="icoon kalender"
        />
      </div>
    </div>
    <div id="card-calendar" :class="{ 'show-dropdown': agendaOpen }">
      <h2 class="card-header" id="monthAndYear"></h2>
      <table class="table" id="calendar">
        <thead>
          <tr>
            <th>Zo</th>
            <th>Ma</th>
            <th>Di</th>
            <th>Wo</th>
            <th>Do</th>
            <th>Vr</th>
            <th>Za</th>
          </tr>
        </thead>
        <tbody id="calendar-body"></tbody>
        <div class="calendar-buttons">
          <button class="previousBtn" onClick="calendarPrev()">
            <span></span>
          </button>
          <button class="nextBtn" onClick="calendarNext()">
            <span></span>
          </button>
        </div>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsideBtns',
  data() {
    return {
      dropDownOpen: false,
      agendaOpen: false,
      scrollIndex: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropDownOpen = !this.dropDownOpen;
      this.scrollIndex = null;
    },
    toggleAgendaDropdown() {
      this.agendaOpen = !this.agendaOpen;
      this.scrollIndex = null;
    },
    updateScroll() {
      this.scrollIndex = window.scrollY;
      this.dropDownOpen = false;
      this.agendaOpen = false;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
};
</script>

<style lang="scss">
.reduce {
  transform: translateX(-190px);
}

.aside__button {
  box-shadow: 3px 3px 6px -3px rgba(5, 89, 211, 0.87);
  -webkit-box-shadow: 3px 3px 6px -3px rgba(5, 89, 211, 0.87);
  -moz-box-shadow: 3px 3px 6px -3px rgba(5, 89, 211, 0.87);

  span {
    display: inline-block;
  }

  .aside__heading {
    display: flex;
    justify-content: space-between;
    h2 {
      color: #fff;
      margin: 0;
    }

    .dropdown-aside__button {
      width: 30px;
      background-color: #fff;
      height: 4px;
      border-radius: 5px;
      top: 10px;
      transition: all 0.3s ease-in-out;
      position: relative;
      &:before,
      &:after {
        content: '';
        position: absolute;
        width: 30px;
        background-color: #fff;
        height: 4px;
        border-radius: 5px;
        left: 0;
        transition: all 0.3s ease-in-out;
      }
      &:before {
        transform: translateY(-8px);
      }
      &:after {
        transform: translateY(8px);
      }
    }
    .dropdown-aside__button.open {
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

  .signup-field__form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 0px;
    flex-direction: column;
    padding: 0rem;
    position: relative;
    transition: all 0.3s ease-in-out;

    input {
      padding: 0.6em;
      margin: 0.3em 0;
      border: none;
      border-bottom: solid 1px #0559d3;
      flex: 1;

      &:first-child {
        margin-top: 1em;
      }
      &[type='submit'] {
        background-color: #fff;
        color: #0559d3;
        border: 2px solid #fff;
        text-transform: uppercase;
      }
    }
  }
}

.button-agenda {
  background-color: #fff;
  &:hover {
    background-color: #003575;
    .agenda-dropdown.open {
      &:after,
      &:before {
        background-color: #fff;
      }
    }
    .agenda-field__heading {
      color: #fff;
      h2 {
        color: #fff;
      }
    }
    .calendar-icon {
      filter: invert(100);
    }
  }
  .agenda-field__heading {
    h2 {
      color: #0559d3;
    }
    .dropdown-aside__button {
      width: 30px;
      transition: all 0.3s ease-in-out;
      position: relative;
      background-color: transparent;
      &:before,
      &:after {
        background-color: transparent;
      }
    }
    &:hover {
      .dropdown-aside__button {
        &:before,
        &:after {
          background-color: transparent;
        }
      }
    }
    .agenda-dropdown.open {
      .calendar-icon {
        transition: 0.3s ease-in-out all;
        opacity: 0;
        background-color: transparent;
      }
      &:before,
      &:after {
        background-color: #0559d3;
      }
    }
    .calendar-icon {
      width: 100%;
      transform: translateY(-8px);
      filter: invert(26%) sepia(98%) saturate(1493%) hue-rotate(199deg)
        brightness(89%) contrast(118%);
    }
  }
}

#card-calendar,
.button-agenda:hover #card-calendar {
  background-color: white;
}

#card-calendar {
  width: 400px;
  position: absolute;
  margin-top: 1rem;
  left: -400px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 0.3s ease-in-out;
}

#card-calendar.show-dropdown {
  left: 0;
}

table#calendar {
  display: block;
  margin: 0;
}

#card-calendar h2 {
  text-align: center;
}

#card-calendar thead {
  width: 84%;
  margin: auto;
  display: block;
}

#card-calendar thead tr {
  width: 100%;
  display: flex;
  text-align: center;
}

#card-calendar thead th {
  display: block;
  float: left;
  width: calc(100% / 7);
}

#card-calendar .calendar-buttons {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
