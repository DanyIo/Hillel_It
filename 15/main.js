const APIKey = "9SjprIauzm1kV2DrNv7UGEZL92uy576Z";
const xhr = new XMLHttpRequest();
const cityInputField = document.getElementById("name");
const mainDiv = document.getElementById("main");
const childDiv = document.createElement("div");
mainDiv.append(childDiv);
const buttonCheckWeather = document.getElementById("addbutton");
let counter = 0;
const locationKeys = {
  Lviv: 324561,
  Kyiv: 324505,
  Kharkiv: 323903,
  Chernihiv: 322162,
  Odesa: 325343,
  Mariupol: 323037,
  Poltava: 325523,
  Zhytomyr: 326609,
  Cherkasy: 321985,
  London: 328328,
  Warsaw: 274663,
  "New York": 349727,
};
function cityValidation() {
  for (let city in locationKeys) {
    if (cityInputField.value === city) {
      return locationKeys[city];
    }
  }
  return 0;
}
function convertToCelsius(num) {
  return ((num - 32) * 5) / 9;
}
function getWheather(id) {
  xhr.open(
    "GET",
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=9SjprIauzm1kV2DrNv7UGEZL92uy576Z`
  );
  xhr.send();
  xhr.onload = function () {
    if (xhr.status !== 200) {
      console.error(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      const result = JSON.parse(this.response);
      displayWheatherInfo(result);
    }
  };
  xhr.onerror = function () {
    console.error("Request failed");
  };
}
function displayWheatherInfo(wheatherInfo) {
  const childDiv = document.createElement("div");
  mainDiv.append(childDiv);
  const wheather = wheatherInfo.DailyForecasts;
  for (const parameter in wheather) {
    const div = document.createElement("div");
    div.setAttribute("id", +[parameter]);
    div.className = "div";
    childDiv.appendChild(div);
    const dateInfo = document.createElement("p");
    dateInfo.innerHTML = new Date(wheather[parameter].Date).toDateString();
    div.append(dateInfo);
    const dayInfo = document.createElement("p");
    if (wheather[parameter].Day.HasPrecipitation === false) {
      dayInfo.innerHTML = `Day: ${wheather[parameter].Day.IconPhrase}`;
    } else {
      dayInfo.innerHTML = `Day: ${wheather[parameter].Day.IconPhrase}. ${wheather[parameter].Day.PrecipitationIntensity} ${wheather[parameter].Day.PrecipitationType}.`;
    }
    div.append(dayInfo);
    const nightInfo = document.createElement("p");
    if (wheather[parameter].Night.HasPrecipitation === false) {
      nightInfo.innerHTML = `Night: ${wheather[parameter].Night.IconPhrase}`;
    } else {
      nightInfo.innerHTML = `Night: ${wheather[parameter].Night.IconPhrase}. ${wheather[parameter].Night.PrecipitationIntensity} ${wheather[parameter].Night.PrecipitationType}.`;
    }
    div.append(nightInfo);
    const temperature = document.createElement("p");
    temperature.innerHTML = `Temperature: ${convertToCelsius(
      +wheather[parameter].Temperature.Minimum.Value
    ).toFixed(1)}°C - ${convertToCelsius(
      wheather[parameter].Temperature.Maximum.Value
    ).toFixed(1)}°C`;
    div.append(temperature);
  }
  counter++;
}
buttonCheckWeather.addEventListener("click", function (event) {
  if (counter == 1) {
    for (let a = 0; a < 5; a++) {
      const div = document.getElementById(`${a}`);
      div.remove();
    }
    counter--;
  }
  if (cityInputField.value !== "") {
    if (cityValidation() !== 0) {
      getWheather(cityValidation());
    } else {
      cityInputField.value = "Invalid City";
    }
  }
});
