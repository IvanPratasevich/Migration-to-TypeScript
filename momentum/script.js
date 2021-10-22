const greetingField = document.querySelector(".greeting");
const time = document.querySelector(".time");
const options = { weekday: "long", month: "long", day: "numeric" };
const dateApp = document.querySelector(".date");
const name = document.querySelector(".name");
const regex = /[0-9]/;

//Time
function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
}
//Date
function showDate() {
  const date = new Date();
  const currentDate = date.toLocaleDateString("en-Us", options);
  dateApp.textContent = currentDate;
  setTimeout(showDate, 1000);
}
//Get Time Of Day
function getTimeOfDay() {
  const date = new Date();
  let timeOfDay = "";
  const hours = date.getHours();
  if (hours >= 0 && hours < 6) {
    timeOfDay = "night";
  } else if (hours < 12 && hours >= 6) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = "afternoon";
  } else if (hours >= 18 && hours <= 23) {
    timeOfDay = "evening";
  }
  return timeOfDay;
}
//Show Greeting
function showGreeting() {
  const timeOfDay = getTimeOfDay();
  greetingField.textContent = `Good ${timeOfDay}`;
  setTimeout(showGreeting, 1000);
}
function getLocalStorage() {
  name.placeholder = "[Enter name]";
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
}
name.oninput = function () {
  this.value = this.value.replace(regex, "");
  localStorage.setItem("name", name.value);
};
name.change = function () {
  this.value = this.value.replace(regex, "");
};

window.addEventListener("load", getLocalStorage);

showGreeting();
showDate();
showTime();
