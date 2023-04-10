const apiKey = "1b20c65265de3121a399b689e7f12abf";

function getWeather() {
  const location = document.getElementById("location").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById("weather-info");
      weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>

        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => console.log(error));
}

    

