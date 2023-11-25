import { showPosition, showError } from "./app.js";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, showError);
  console.log(location);
}
