//TODO CONST
let tags = [];
let tagsFromList = [];
let tagsArray2 = [];
let counter = -1;
let tagsArray = [];
let mode = "";
let tagsArrayLocalStorage = [];
let example = "car man boy video";

let defaultLang = { en: "en", ru: "ru" };
let lang = localStorage.hasOwnProperty("lang");
if (!lang) {
  localStorage.setItem("lang", defaultLang.en);
  lang = defaultLang.en;
} else {
  lang = localStorage.getItem("lang");
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
const defaultCity = { en: "Minsk", ru: "Минск" };

const overlay = document.querySelector(".overlay");
const todoBlock = document.querySelector(".todo-block");
const todoBtn = document.querySelector(".todo-btn");

const weatherError = document.querySelector(".weather-error");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

const changeQuote = document.querySelector(".change-quote");
const author = document.querySelector(".author");
const quote = document.querySelector(".quote");

const translateBtn = document.querySelectorAll(".translate");

if (!localStorage.getItem("city")) {
  switch (lang) {
    case "ru":
      city.value = defaultCity.ru;
      localStorage.setItem("city", defaultCity.ru);
      break;

    case "en":
      city.value = defaultCity.en;
      localStorage.setItem("city", defaultCity.en);
      break;
  }
} else {
  city.value = localStorage.getItem("city");
}

if (localStorage.getItem("lang") === "ru") {
  translateBtn[0].classList.add('translate-btn-active')
} else{
  translateBtn[1].classList.add('translate-btn-active')
}

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
  let currentDate = date.toLocaleDateString("en-Us", options);
  if (localStorage.getItem("lang") === "ru") {
    currentDate = date.toLocaleDateString("ru-Ru", options);
  }
  dateApp.textContent = currentDate;
  setTimeout(showDate, 1000);
}
//Get Time Of Day
function getTimeOfDay() {
  const date = new Date();
  let timeOfDay = "";
  const hours = date.getHours();
  switch (lang) {
    case "ru":
      if (hours >= 0 && hours < 6) {
        timeOfDay = "ночи";
      } else if (hours < 12 && hours >= 6) {
        timeOfDay = "утро";
      } else if (hours >= 12 && hours < 18) {
        timeOfDay = "день";
      } else if (hours >= 18 && hours <= 23) {
        timeOfDay = "вечер";
      }
      break;
    case "en":
      if (hours >= 0 && hours < 6) {
        timeOfDay = "night";
      } else if (hours < 12 && hours >= 6) {
        timeOfDay = "morning";
      } else if (hours >= 12 && hours < 18) {
        timeOfDay = "afternoon";
      } else if (hours >= 18 && hours <= 23) {
        timeOfDay = "evening";
      }
      break;
  }
  return timeOfDay;
}
//Show Greeting
function showGreeting() {
  const timeOfDay = getTimeOfDay();
  let greetingText = "";
  switch (lang) {
    case "ru":
      if (timeOfDay == "утро") {
        greetingText = "Доброе";
      } else if (timeOfDay == "ночь") {
        greetingText = "Доброй";
        timeOfDay = "ночи";
      } else {
        greetingText = "Добрый";
      }

      break;
    case "en":
      greetingText = "Good";
      break;
  }
  greetingField.textContent = `${greetingText} ${timeOfDay},`;
  setTimeout(showGreeting, 1000);
}
function getLocalStorage() {
  name.placeholder = "[Enter name]";
  if (localStorage.getItem("lang") === "ru") {
    name.placeholder = "[Введите имя]";
  }
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
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem(
    "city"
  )}&lang=${lang}&appid=60a196b04fe428d2ebd80f7d243fa3c7&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
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
    switch (lang) {
      case "ru":
        weatherError.textContent = "";
        weatherIcon.classList.add("weather-icon");
        weatherIcon.classList.add("owf");
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent =
          "Скорость ветра:" + " " + Math.round(data.wind.speed) + " m/s";
        humidity.textContent =
          "Влажность:" + " " + Math.round(data.main.humidity) + "%";
        break;

      case "en":
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
        break;
    }
  }
}
city.addEventListener("change", () => {
  city.value = city.value.replace(regex, "");
  localStorage.setItem("city", city.value);
  getWeather();
});

async function getQuotes() {
  let quotes = "https://type.fit/api/quotes";
  if (localStorage.getItem("lang") === "ru") {
    quotes = "./quotes_ru.json";
  }
  const res = await fetch(quotes);
  const data = await res.json();
  let randomQuote = getRandomNum(0, data.length - 1);
  quote.textContent = `${data[randomQuote].text}`;
  author.textContent = `${data[randomQuote].author}`;
}
function quotesAnimation() {
  changeQuote.classList.toggle("rotated");
}

function getTodo() {
  overlay.classList.add("add-overlay");
  setTimeout(addAnimation, 200);
  todoBtn.classList.add("hide");
}
function addAnimation() {
  todoBlock.classList.add("todo-animation");
}
function closeForm() {
  todoBlock.classList.remove("todo-animation");
  setTimeout(removeAnimation, 900);
}
function removeAnimation() {
  overlay.classList.remove("add-overlay");
  todoBtn.classList.remove("hide");
}
//TODO
const todo = {
  action() {
    let deleteTags = document.querySelectorAll(".delete");
    if (document.querySelector("#create-tag").value.length == 0) {
      alert("Please enter at least one tag");
    }
    this.add();
  },
  add() {
    let tagsArray = document.querySelector("#create-tag").value.split(" ");
    let tagsArray3 = document.querySelector("#create-tag").value.split(" ");
    if (tagsArray2.length !== 0) {
      localStorage.clear();
      tagsArray = tagsArray2;
      tagsArray3.forEach(function (item, i, arr) {
        tagsArray.push(item);
      });
      document.querySelector("#tags").innerHTML = "";
      tags = [];
    } else {
      if (tagsArrayLocalStorage.length !== 0) {
        tagsArray.forEach(function (item, i, arr) {
          tagsArrayLocalStorage.push(item);
        });
        localStorage.setItem("todo", JSON.stringify(tagsArrayLocalStorage));
      }
    }
    document.querySelector("#create-tag").value = "";
    this.create(tagsArray);
  },
  create(tagsArray) {
    tagsArray.forEach(function (item, i, arr) {
      if (item === "") {
        arr.splice(i, 1);
      } else {
        tags.push(item);
        counter += 1;
        document.querySelector("#tags").innerHTML += `
            <div id="tag" data-size="${item}">
                <span id="tag-name">${item}</span>
                <button data-num="${counter}" class="delete-btn" onclick="todo.delete(event)"></button>
            </div>
        `;
      }
    });
    localStorage.setItem("todo", JSON.stringify(tags));
  },
  delete() {
    let target = event.target.parentNode;
    let button = event.target;
    let targetTag = target.dataset.size;
    let deleteItem = target.dataset.size;
    tags.splice(button.dataset.num, 1);
    event.target.parentNode.style.cssText = `animation: tag-animation 1s linear; `;
    setTimeout(function () {
      target.remove();
      let tagsSearch = JSON.parse(localStorage.getItem("todo"));
      tagsSearch.forEach(function (item, i, arr) {
        if (item == `${targetTag}`) {
          arr.splice(i, 1);
          tags.splice(i, 1);
        }
      });
      tagsArrayLocalStorage.forEach(function (item, i, arr) {
        if (item == `${targetTag}`) {
          arr.splice(i, 1);
        }
      });
      tagsArray.forEach(function (item, i, arr) {
        if (item == `${targetTag}`) {
          arr.splice(i, 1);
        }
      });
      localStorage.clear();
      localStorage.setItem("todo", JSON.stringify(tagsSearch));
      tags = tagsSearch;
    }, 980);
  },
  init() {
    tagsArray = [];
    if (localStorage.getItem("todo") != undefined) {
      tagsArray = JSON.parse(localStorage.getItem("todo"));
      tagsArrayLocalStorage = JSON.parse(localStorage.getItem("todo"));
    }
    if (tagsArray.length !== 0) {
      this.create(tagsArray);
    }
  },
  set changeListOfTags(values) {
    document.querySelector("#tags").innerHTML = "";
    tagsArray = values.split(" ");
    tagsArray2 = tagsArray;
    localStorage.setItem("todo", JSON.stringify(tagsArray));
    this.createTagsFromList(tagsArray);
  },
  set addTagsFromList(tagsArray) {
    localStorage.clear();
    localStorage.setItem("todo", JSON.stringify(tagsArrayLocalStorage));
    tagsArray = tagsArray.split(" ");
    this.create(tagsArray);
  },
  createTagsFromList(tagsArray) {
    tagsArray.forEach(function (item, i, arr) {
      if (item === "") {
        arr.splice(i, 1);
      } else {
        tagsFromList.push(item);
        counter += 1;
        document.querySelector("#tags").innerHTML += `
            <div id="tag" data-size="${item}">
                <span id="tag-name">${item}</span>
                <button data-num="${counter}" class="delete-btn" onclick="todo.delete(event)"></button>
            </div>
        `;
      }
    });
    localStorage.clear();
    localStorage.setItem("todo", JSON.stringify(tagsFromList));
    tagsFromList = [];
  },
  set readonly(mode) {
    let btn = document.getElementById("add-btn");
    let input = document.getElementById("create-tag");
    if (mode === "on") {
      return (
        (btn.disabled = true),
        (input.style.cssText = `background: red; border: 2px solid gray`),
        (input.placeholder = ""),
        (input.readOnly = true),
        (btn.style.cssText = `background: red; border: 2px solid gray; color:white`),
        (document.querySelector("#tags").innerHTML = ""),
        localStorage.clear()
      );
    }
    if (mode === "off") {
      return (
        (btn.disabled = false),
        (input.style.cssText = ``),
        (input.placeholder = "Add tags"),
        (input.readOnly = false),
        (btn.style.cssText = ``),
        (document.querySelector("#tags").innerHTML = ""),
        (tags = [])
      );
    }
  },
  get getListOfTags() {
    let listOfTags = JSON.parse(localStorage.getItem("todo"));
    return console.log(listOfTags);
  },
};
todo.init();
document.querySelector("#create-tag").addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    todo.action();
  }
});
function showGrade() {
  let grade = `
  Уважаемые проверяющие, не успел доделать проект. Проверьте, пожалуйста, работу ещё раз в четверг вечером (последний день проверки задания).
  Cпасибо ^ↀᴥↀ^
  `;
  console.log(
    "%c Уважаемые проверяющие, не успел доделать проект. Проверьте, пожалуйста, работу ещё раз в четверг вечером (последний день проверки задания). Cпасибо ^ↀᴥↀ^",
    "color: green; font-weight: bold; font-size: 20px"
  );
  console.log(grade);
}
function showMessage() {
  let tagManager = `
  Компонент для создания тэгов TagList (ToDo)

  [+] Все  изменения  применяться без перезагрузки страницы, SPA
  [+] запись/считывание списка тэгов в localStorage
  [+] readonly mode.  блокируется возможность изменять тэги
  (добавлять и удалять).
  
  Теги надо вводить через пробел
  Функционал на уровне JS :
  Метод для получения списка тегов: todo.getListOfTags
  Метод для установки нового списка тэгов вместо предыдущего: todo.changeListOfTags = 'tags'
    Пример: todo.changeListOfTags = 'a b c d'
  Метод для добавления тега: todo.addTagsFromList = 'tags'
    Пример: todo.addTagsFromList = 'boy red apple 125'
  Метод для создания readonly mode: todo.readonly = 'mode'
    Пример:
    1 . todo.readonly = 'on' - блокируется возможность изменять тэги
    2 . todo.readonly ='off'- включается возможность изменять тэги
  `;
  console.log(tagManager);
}

function translate() {
  switch (this.getAttribute("lang")) {
    case "ru":
      translateBtn[1].classList.remove('translate-btn-active')
      translateBtn[0].classList.add('translate-btn-active');
      localStorage.setItem("lang", defaultLang.ru);
      lang = defaultLang.ru;
      if (city.value === "Minsk") {
        city.value = defaultCity.ru;
        localStorage.setItem("city", defaultCity.ru);
      } else {
        city.value = city.value;
        localStorage.setItem("city", city.value);
      }
      getTimeOfDay();
      showGreeting();
      getWeather();
      getLocalStorage();
      getQuotes()
      break;

    case "en":
      translateBtn[0].classList.remove('translate-btn-active')
      translateBtn[1].classList.add('translate-btn-active');
      localStorage.setItem("lang", defaultLang.en);
      lang = defaultLang.en;
      if (city.value === "Минск") {
        city.value = defaultCity.en;
        localStorage.setItem("city", defaultCity.en);
      } else {
        city.value = city.value;
        localStorage.setItem("city", city.value);
      }
      getTimeOfDay();
      showGreeting();
      getWeather();
      getLocalStorage();
      getQuotes()
      break;
  }
}

translateBtn[0].addEventListener("click", translate);
translateBtn[1].addEventListener("click", translate);

window.addEventListener("load", getLocalStorage);
window.addEventListener("load", setBg);
window.addEventListener("load", getWeather);
window.addEventListener("load", setBg);
window.addEventListener("load", getQuotes);
window.addEventListener("load", quotesAnimation);
window.addEventListener("load", showGrade);
changeQuote.addEventListener("click", getQuotes);
todoBtn.addEventListener("click", getTodo);
changeQuote.addEventListener("click", quotesAnimation);
nextSlide.addEventListener("click", getSlideNext);
prevSlide.addEventListener("click", getSlidePrev);
window.addEventListener("load", showMessage);

showGreeting();
showDate();
showTime();
