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
