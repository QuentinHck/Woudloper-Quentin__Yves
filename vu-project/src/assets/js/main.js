// agenda
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = [
  "Jan",
  "Feb",
  "Ma",
  "Apr",
  "Mei",
  "Juni",
  "Juli",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dec"
];
let monthAndYear = document.getElementById('monthAndYear');
showCalendar(currentMonth, currentYear);

function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();
  let tbl = document.getElementById('calendar-body');
  tbl.innerHTML = "";
  monthAndYear.innerHTML = months[month] + " " + year;
  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement('td');
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(date);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      date++;
    }
    tbl.appendChild(row);
  }
}

function calendarPrev() {
  currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function calendarNext() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}
// toggle dropdown-menu
const $dropdownContainer = document.querySelector('.dropdown-menu');
const $dropdownHamburger = document.querySelector('.dropdown-menu__button');
const $dropdownList = document.querySelector('.dropdown-menu__list');
const $signupDropdownWrapper = document.querySelector('.signup-field__heading');
const $signupDropdownButton = document.querySelector('.dropdown-aside__button');
const $signupFieldForm = document.querySelector('.signup-field__form');
const $agendaButton = document.querySelector('.agenda-field__heading');
const $agendaDropdownButton = document.querySelector('.calendar-icon');
const $agendaDropdownAfter = document.querySelector('.agenda-dropdown')
const $cardCalendar = document.getElementById('card-calendar');
let $navBar = document.getElementById('navigation');
let $aside = document.querySelector('.signup-field');
let menuOpen = false;

function openDropdown(target1, target2) {
  if (!menuOpen) {
    target1.classList.add('open');
    target2.classList.add('show-dropdown');
    $aside.classList.remove('reduce');
    menuOpen = true;
  } else if (menuOpen && document.documentElement.scrollTop >= 70) {
    target1.classList.remove('open');
    target2.classList.remove('show-dropdown');
    menuOpen = false;
  }
  /*else if(window.onscroll && menuOpen){
    target1.classList.remove('open');
    target2.classList.remove('show-dropdown');
    $aside.classList.add('reduce');
    menuOpen = false;
  }else{
    $aside.classList.add('reduce');
  }
}
function dropDownEffect(event){
  console.log(event.target);
  if(event.target === $dropdownHamburger){
    openDropdown($dropdownContainer,$dropdownList);
  }else if(event.target === $signupDropdownWrapper || event.target === $signupDropdownButton){
    openDropdown($signupDropdownButton, $signupFieldForm);
  }else if(event.target === $agendaButton || event.target === $agendaDropdownButton || event.target === $agendaDropdownAfter){
    openDropdown($agendaDropdownAfter,$cardCalendar);
  }
  //openDropdown($dropdownContainer,$dropdownList);
}
window.onscroll = function () { 
  console.log(menuOpen);
    if (document.body.scrollTop >= 70 || document.documentElement.scrollTop >= 70 ) {
      $navBar.classList.remove("navigation-background__transparant");
      $navBar.classList.add("navigation-background__colored");  
      $aside.classList.add('reduce');
      if(!menuOpen  && !$aside.classList.contains('reduce')){
        $aside.classList.remove('reduce');
      }
    } 
    else if(document.documentElement.scrollTop < 70){
      $navBar.classList.remove("navigation-background__colored");
      $navBar.classList.add("navigation-background__transparant");
      $aside.classList.remove('reduce');
    }
    
};
document.addEventListener('click',dropDownEffect);
/*--------------------SLIDER------------------*/
  /*
  const previousBtn = document.querySelector(".evenementen-slider-buttons__left");
  const nextBtn = document.querySelector(".evenementen-slider-buttons__right");
  const sliderContainer = document.querySelector(".evenementen-slider__frame");
  const slider = document.querySelector(".evenementen-slider__wrapper");
  let sliderInfo = {
    sliderElement: sliderContainer,
    sliderItemCount: document.querySelector(".evenementen-slider__wrapper"),
    currentSlide: 0
  };
  function getSliderItemWidth() {
    const sliderItem = document.querySelector(".evenementen-slider__item");
    return sliderItem.clientWidth;
  }
  function setSliderPosition() {
    const itemWidth = getSliderItemWidth();
    sliderInfo.sliderElement.style.left =
      -1 * sliderInfo.currentSlide * itemWidth + "px";
  }
  function getShownItems() {
    const container = document.querySelector(".evenementen-slider__subcontainer");
    return Math.floor(container.clientWidth / getSliderItemWidth());
  }
  function nextSlide(event) {
    const shownItems = getShownItems();
    if (sliderInfo.currentSlide === sliderInfo.sliderItemCount - shownItems) {
      nextBtn.classList.add("hide");
      return;
    }
    if (
      sliderInfo.currentSlide ===
      sliderInfo.sliderItemCount - (shownItems + 1)
    ) {
      nextBtn.classList.add("hide");
    }
    previousBtn.classList.remove("hide");
    sliderInfo.currentSlide++;
    setSliderPosition();
  }
  function previousSlide(event) {
    if (sliderInfo.currentSlide === 0) {
      return;
    }
    if (sliderInfo.currentSlide === 1) {
      previousBtn.classList.add("hide");
    }
    nextBtn.classList.remove("hide");
    sliderInfo.currentSlide--;
    setSliderPosition();
  }
  function windowResize() {
    setSliderPosition();
    const shownItems = getShownItems();
    if (sliderInfo.currentSlide === sliderInfo.sliderItemCount - shownItems) {
      nextBtn.classList.add("hide");
    } else {
      nextBtn.classList.remove("hide");
    }
  }
  /*----- event listeners----*/
  /*
  previousBtn.addEventListener("click", previousSlide);
  nextBtn.addEventListener("click", nextSlide);
  window.addEventListener("resize", windowResize);*/