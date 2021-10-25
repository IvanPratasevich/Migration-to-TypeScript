function showGrade() {
  let counterForGrade = localStorage.getItem("grade") || 0;
  if (counterForGrade === 0) {
    alert(
      "Уважаемые проверяющие, не успел доделать проект. Проверьте, пожалуйста, работу ещё раз в четверг вечером (последний день проверки задания).Cпасибо ^ↀᴥↀ^"
    );
  }
  let grade = `
  Уважаемые проверяющие, не успел доделать проект. Проверьте, пожалуйста, работу ещё раз в четверг вечером (последний день проверки задания).
  Cпасибо ^ↀᴥↀ^
  `;
  console.log(
    "%c Уважаемые проверяющие, не успел доделать проект. Проверьте, пожалуйста, работу ещё раз в четверг вечером (последний день проверки задания). Cпасибо ^ↀᴥↀ^",
    "color: green; font-weight: bold; font-size: 20px"
  );
  console.log(grade);
  counterForGrade++;
  localStorage.setItem("grade", counterForGrade);
}

const greetingField = document.querySelector(".greeting");
const time = document.querySelector(".time");
const options = { weekday: "long", month: "long", day: "numeric" };
const dateApp = document.querySelector(".date");
const name = document.querySelector(".name");
const body = document.querySelector(".body");
const nextSlide = document.querySelector(".slide-next");
const prevSlide = document.querySelector(".slide-prev");

const regex = /[0-9]/;
let randomNum = getRandomNum(1, 20);
let bgNum = randomNum;

const city = document.querySelector(".city");
const defaultCity = { en: "Minsk" };

city.value = localStorage.getItem("city") || defaultCity.en;

const weatherError = document.querySelector(".weather-error");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

const changeQuote = document.querySelector(".change-quote");
const author = document.querySelector(".author");
const quote = document.querySelector(".quote");

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
  greetingField.textContent = `Good ${timeOfDay},`;
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
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function setBg() {
  const img = new Image();
  console.log("Slide number:" + " " + randomNum);
  if (randomNum < 10) {
    randomNum = "0" + randomNum;
  }
  img.src = `https://raw.githubusercontent.com/IvanPratasevich/stage1-tasks/assets/images/${getTimeOfDay()}/${randomNum}.jpg`;
  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`;
    setTimeout(() => nextSlide.removeAttribute("disabled"), 1000);
    setTimeout(() => prevSlide.removeAttribute("disabled"), 1000);
  };
}
function getSlideNext() {
  randomNum++;
  if (randomNum == 21) {
    randomNum = 1;
  }
  nextSlide.setAttribute("disabled", true);
  prevSlide.setAttribute("disabled", true);
  setBg();
}

function getSlidePrev() {
  randomNum--;
  if (randomNum == 0) {
    randomNum = 20;
  }
  nextSlide.setAttribute("disabled", true);
  prevSlide.setAttribute("disabled", true);
  setBg();
}
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=60a196b04fe428d2ebd80f7d243fa3c7&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(city.value);
  if (!res.ok) {
    if (city.value === "") {
      weatherError.textContent = `You haven't entered anything`;
      weatherIcon.className = "";
      temperature.textContent = "";
      weatherDescription.textContent = "";
      wind.textContent = "";
      humidity.textContent = "";
    } else {
      weatherError.textContent = `Error! "${city.value}" is not found`;
      weatherIcon.className = "";
      temperature.textContent = "";
      weatherDescription.textContent = "";
      wind.textContent = "";
      humidity.textContent = "";
      return;
    }
  } else {
    localStorage.setItem("city", city.value);
    weatherError.textContent = "";
    weatherIcon.classList.add("weather-icon");
    weatherIcon.classList.add("owf");
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent =
      "Wind speed:" + " " + Math.round(data.wind.speed) + " m/s";
    humidity.textContent =
      "Humidity:" + " " + Math.round(data.main.humidity) + "%";
  }
}
city.addEventListener("change", () => {
  city.value = city.value.replace(regex, "");
  getWeather();
});

async function getQuotes() {
  const quotes = "https://type.fit/api/quotes";
  const res = await fetch(quotes);
  const data = await res.json();
  let randomQuote = getRandomNum(0, data.length);
  quote.textContent = `${data[randomQuote].text}`;
  author.textContent = `${data[randomQuote].author}`;
}
function quotesAnimation() {
  changeQuote.classList.toggle("rotated");
}

window.addEventListener("load", getLocalStorage);
window.addEventListener("load", setBg);
window.addEventListener("load", getWeather);
window.addEventListener("load", setBg);
window.addEventListener("load", getQuotes);
window.addEventListener("load", quotesAnimation);
window.addEventListener("load", showGrade);
changeQuote.addEventListener("click", getQuotes);
changeQuote.addEventListener("click", quotesAnimation);
nextSlide.addEventListener("click", getSlideNext);
prevSlide.addEventListener("click", getSlidePrev);

showGreeting();
showDate();
showTime();