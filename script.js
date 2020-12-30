

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

showCalendar(currentMonth,currentYear);

function showCalendar(month, year){
  let firstDay= new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let tbl = document.getElementById('calendar-body');
  tbl.innerHTML = "";
  monthAndYear.innerHTML = months[month] + " " + year;

  let date = 1; 
  for (let i = 0 ; i < 6; i++){
    let row = document.createElement('tr');

    for(let j = 0; j < 7; j++){
      if(i === 0 && j < firstDay){
        let cell = document.createElement('td');
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }else if(date > daysInMonth){
        break;
      }else{
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

function calendarPrev(){
  currentYear = (currentMonth === 0)? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0? 11: currentMonth - 1;
  showCalendar(currentMonth,currentYear);
}

function calendarNext(){
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth,currentYear);
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

function openDropdown(target1,target2){
  if(!menuOpen){
    target1.classList.add('open');
    target2.classList.add('show-dropdown');
    $aside.classList.remove('reduce');
    menuOpen = true;
    
    window.onscroll = function () {
      target1.classList.remove('open');
      target2.classList.remove('show-dropdown');
      $aside.classList.add('reduce');
      menuOpen = false;
    }
  }else{
    target1.classList.remove('open');
    target2.classList.remove('show-dropdown');
    $aside.classList.add('reduce');
    menuOpen = false;
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
    } 
    else if(document.documentElement.scrollTop < 70){
      $navBar.classList.remove("navigation-background__colored");
      $navBar.classList.add("navigation-background__transparant");
      $aside.classList.remove('reduce');
    }
};

function checkReduce(){
  if(!menuOpen  && !$aside.classList.contains('reduce')){
    $aside.classList.remove('reduce');
  }
}

document.addEventListener('click',dropDownEffect);
window.addEventListener('scroll',checkReduce);