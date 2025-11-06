function updateTime() {
  let kyotoElement = document.querySelector("#kyoto");
  if (kyotoElement) {
    let kyotoDateElement = kyotoElement.querySelector(".date");
    let kyotoTimeElement = kyotoElement.querySelector(".time");
    let currentKyotoTime = moment().tz("Asia/Tokyo");
    kyotoDateElement.innerHTML = currentKyotoTime.format("MMMM Do YYYY");
    kyotoTimeElement.innerHTML = currentKyotoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let denmarkElement = document.querySelector("#denmark");
  if (denmarkElement) {
    let denmarkDateElement = denmarkElement.querySelector(".date");
    let denmarkTimeElement = denmarkElement.querySelector(".time");
    let currentDenmarkTime = moment().tz("Europe/Copenhagen");
    denmarkDateElement.innerHTML = currentDenmarkTime.format("MMMM Do YYYY");
    denmarkTimeElement.innerHTML = currentDenmarkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = event.target.options[event.target.selectedIndex].text;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
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

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
