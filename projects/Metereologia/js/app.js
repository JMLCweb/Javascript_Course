const current = document.querySelector("current");
function showPosition(position) {
  console.log("jorge");
}

function showError(error) {
  console.log(error.code);
  if (error.code == 1) {
    current.innerHTML = "O Utilizador nao permite";
  }
}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
  current.innerHTML = "O browser nao suporta";
}
const apiKey = "155f7049f6fb4024a42212523232011";
const apiUrl =
  "http://api.weatherapi.com/v1/current.json?key=155f7049f6fb4024a42212523232011&q=Porto, Portugal&aqi=yes";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
}
checkWeather();
