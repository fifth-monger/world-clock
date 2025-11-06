function updateTime() {
  let kyotoElement = document.querySelector("#kyoto");
  let kyotoDateElement = kyotoElement.querySelector(".date");
  let kyotoTimeElement = kyotoElement.querySelector(".time");
  let currentKyotoTime = moment().tz("Asia/Tokyo");
  kyotoDateElement.innerHTML = currentKyotoTime.format("MMMM Do YYYY");
  kyotoTimeElement.innerHTML = currentKyotoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let denmarkElement = document.querySelector("#denmark");
  let denmarkDateElement = denmarkElement.querySelector(".date");
  let denmarkTimeElement = denmarkElement.querySelector(".time");
  let currentDenmarkTime = moment().tz("Europe/Copenhagen");
  denmarkDateElement.innerHTML = currentDenmarkTime.format("MMMM Do YYYY");
  denmarkTimeElement.innerHTML = currentDenmarkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
