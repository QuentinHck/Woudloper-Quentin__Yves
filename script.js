

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

const dropdownBtn = document.querySelector('.dropdown-menu');
const dropdownList = document.querySelector('.dropdown-list');
let menuOpen = false;

dropdownBtn.addEventListener('click', () => {
  if(!menuOpen){
    dropdownBtn.classList.add('open');
    dropdownList.classList.add('show-dropdown');
    menuOpen = true;
  }else{
    dropdownBtn.classList.remove('open');
    dropdownList.classList.remove('show-dropdown');
    menuOpen = false;
  }
})


let myNav = document.getElementById('navigation');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        console.log('ok');
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};