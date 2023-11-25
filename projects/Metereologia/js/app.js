const current = document.querySelector("#current");
const addCity = document.querySelector("#addCity");
const add = document.querySelector("#add");
const form = document.querySelector("form");
const newCity = document.createElement("div");
const center = document.querySelector(".center");
const close = document.querySelector("#close");
var cities = JSON.parse(localStorage.getItem("cities")) || [];
const urlCapitals = `https://restcountries.com/v3.1/subregion/Europe`;
const ul = document.querySelector("ul");

const showPosition = (position) => {
  const location = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=8ee1b211e8f94edb923210015232111&q=${location.latitude},${location.longitude}&days=3&aqi=no&alerts=no`;

  fetchData(apiUrl)
    .then((response) => (current.innerHTML = contentCity(response)))
    .catch((error) => console.log("erro:", error.message));
};

const showError = (error) => {
  let locationError;
  switch (error.code) {
    case error.PERMISSION_DENIED:
      location = "User denied the request for Geolocation.";
      nreak;
    case error.POSITION_UNAVAILABLE:
      location = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      location = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      location = "An unknown error occurred.";
      break;
  }
  console.log(locationError);
};

const fetchData = async (url) => {
  const response = await fetch(url);
  var data = await response.json();
  return data;
};

const contentCity = (cityData) => {
  console.log(cityData);
  const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
  let content = `
  <p><img src="${cityData.current.condition.icon}"></p>
  <p>${cityData.location.region}, ${cityData.location.country}<br>
  <span class="condition">${cityData.current.condition.text}, ${
    cityData.current.is_day == 1 ? "day" : "night"
  }</span><br>
  ${cityData.current.temp_c}º<br>
  `;

  cityData.forecast.forecastday.forEach((day) => {
    content += `
          <span class="condition">${
            weekDays[new Date(day.date).getDay()]
          } <img src="${day.day.condition.icon}" width="40px"> ${
      day.day.condition.text
    }<br>
      `;
  });
  return content;
};

add.addEventListener("click", (e) => {
  addCity.classList.remove("hide");
});

window.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addCity.classList.add("hide");
  }
});

const buildCity = (city) => {
  const secondUrl = `http://api.weatherapi.com/v1/forecast.json?key=8ee1b211e8f94edb923210015232111&q=${city}&days=3&aqi=no&alerts=no`;
  fetchData(secondUrl)
    .then((response) => {
      const newCity = document.createElement("div");
      newCity.classList.add("gradient-border");
      newCity.classList.add("current");
      newCity.setAttribute("id", city);
      newCity.innerHTML =
        contentCity(response) + `<div id='close'><strong>x</strong></div>`;
      center.insertBefore(newCity, add);
      localStorage.setItem("cities", JSON.stringify(cities));
    })
    .catch((error) => console.log("Error:", error.message));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitedCity = form.city.value.trim();
  console.log(submitedCity);
  addCity.classList.add("hide");
  form.reset();
  // adicionar cidades
  buildCity(submitedCity);
  cities.push(submitedCity);
});

center.addEventListener("click", (e) => {
  if (e.target.parentElement.getAttribute("id") == "close") {
    e.target.parentElement.parentElement.remove();
    const deletedCity = e.target.parentElement.parentElement.getAttribute("id");
    cities = cities.filter((city) => city != deletedCity);
    localStorage.setItem("cities", JSON.stringify(cities));
  }
});

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, showError);
  console.log(location);
}
cities.forEach((city) => buildCity(city));

fetchData(urlCapitals)
  .then((response) => {
    var lis = "";
    response.forEach((country) => {
      lis += `<li id="${country.capital[0]}">${country.capital[0]}</li>`;
    });
    ul.innerHTML = lis;
    const items = document.querySelectorAll("ul li");
    items.forEach((item) => {
      item.draggable = true;
      item.ondragstart = (e) => {
        e.dataTransfer.setData("item-id", e.target.id);
      };
    });
    const dropzones = document.querySelectorAll("[dropzone]");
    dropzones.forEach((dropzone) => {
      dropzone.ondragover = (e) => e.preventDefault();
      dropzone.ondrop = (e) => {
        const id = e.dataTransfer.getData("item-id");
        buildCity(id);
        cities.push(id);
        localStorage.setItem("cities", JSON.stringify(cities));
      };
    });
  })
  .catch((error) => console.log("Error:", error.message));
