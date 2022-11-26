const APIKey = "9SjprIauzm1kV2DrNv7UGEZL92uy576Z";
const cityInputField = document.getElementById("name");
const mainDiv = document.getElementById("main");
const navbar = document.getElementById("getCityNeighbors-container");
const childDiv = document.createElement("div");
mainDiv.append(childDiv);
const buttonCheckWeather = document.getElementById("addbutton");
let counter = 0;
function convertToCelsius(num) {
  return ((num - 32) * 5) / 9;
}
async function getCityID(cityName) {
  try {
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`
    );
    if (response.status === 200) {
      const parsedJSON = await response.json();
      getWeather(parsedJSON[0].Key);
    }
  } catch (error) {
    console.error(error);
    cityInputField.value = "Something gone wrong.";
    refresh()

  }
}
async function getWeather(id) {
  try {
    const foreCastResponse = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=${APIKey}`
    );
    const cityNeighborsResponse = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/neighbors/${id}?apikey=${APIKey}`
    );
    if (
      foreCastResponse.status === 200 &&
      cityNeighborsResponse.status === 200
    ) {
      const foreCastparsedJSON = await foreCastResponse.json();
      const cityNeighborsJSON = await cityNeighborsResponse.json();
      displayWeatherInfo(foreCastparsedJSON, cityNeighborsJSON);
    }
  } catch (error) {
    console.error(error);
    cityInputField.value = "Something gone wrong.";
    refresh()
  }
}
function displayWeatherInfo(forecastInfo, cityNeighborsInfo) {
  const childDiv = document.createElement("div");
  mainDiv.append(childDiv);
  const weather = forecastInfo.DailyForecasts;
  for (const parameter in weather) {
    const div = document.createElement("div");
    div.setAttribute("id", +[parameter]);
    div.className = "div";
    childDiv.appendChild(div);
    const dateInfo = document.createElement("p");
    dateInfo.innerHTML = new Date(weather[parameter].Date).toDateString();
    div.append(dateInfo);
    const dayInfo = document.createElement("p");
    if (weather[parameter].Day.HasPrecipitation === false) {
      dayInfo.innerHTML = `Day: ${weather[parameter].Day.IconPhrase}`;
    } else {
      dayInfo.innerHTML = `Day: ${weather[parameter].Day.IconPhrase}. 
      ${weather[parameter].Day.PrecipitationIntensity} ${weather[parameter].Day.PrecipitationType}.`;
    }
    div.append(dayInfo);
    const nightInfo = document.createElement("p");
    if (weather[parameter].Night.HasPrecipitation === false) {
      nightInfo.innerHTML = `Night: ${weather[parameter].Night.IconPhrase}`;
    } else {
      nightInfo.innerHTML = `Night: ${weather[parameter].Night.IconPhrase}. 
      ${weather[parameter].Night.PrecipitationIntensity} ${weather[parameter].Night.PrecipitationType}.`;
    }
    div.append(nightInfo);
    const temperature = document.createElement("p");
    temperature.innerHTML = `Temperature: ${convertToCelsius(
      +weather[parameter].Temperature.Minimum.Value
    ).toFixed(1)}°C - ${convertToCelsius(
      weather[parameter].Temperature.Maximum.Value
    ).toFixed(1)}°C`;
    div.append(temperature);
  }
  counter++;
  for (let a = 0; a < 5; a++) {
    const button = document.createElement("button");
    button.className = "neighborCityButton";
    button.innerHTML = cityNeighborsInfo[a].LocalizedName;
    navbar.append(button);
  }
}
function refresh() {
  if (counter === 1) {
    document.querySelectorAll(".div").forEach((element) => element.remove());
    document
      .querySelectorAll(".neighborCityButton")
      .forEach((element) => element.remove());
    counter--;
  }
}
buttonCheckWeather.addEventListener("click", function (event) {
  if (cityInputField.value !== "") {
    refresh()
    getCityID(cityInputField.value);
  }
});
navbar.addEventListener("click", (event) => {
  refresh()
  cityInputField.value = event.target.innerHTML;
  getCityID(event.target.innerHTML);
});
