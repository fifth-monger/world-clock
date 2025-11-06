let cityInterval;

function updateTime() {
  let currentElement = document.querySelector("#current");
  if (currentElement) {
    let currentDateElement = currentElement.querySelector(".date");
    let currentTimeElement = currentElement.querySelector(".time");
    let currentTime = moment().tz("America/Chicago");
    currentDateElement.innerHTML = currentTime.format("MMMM Do YYYY");
    currentTimeElement.innerHTML = currentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = event.target.options[event.target.selectedIndex].text;
  let citiesElement = document.querySelector("#cities");

  function displayCityTime() {
    let cityTime = moment().tz(cityTimeZone);
    citiesElement.innerHTML = `
  <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
        </div>`;
  }
  clearInterval(cityInterval);
  displayCityTime();
  cityInterval = setInterval(displayCityTime, 1000);
  event.target.selectedIndex = 0;
}
updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
