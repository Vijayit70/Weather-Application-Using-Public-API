function getWeather() {
  const city = document.getElementById("city").value.trim();

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "fb35297e4f66e588915e9ea87dcc52fb"; // your working key

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {

      if (data.cod !== 200) {
        alert("City not found. Try again.");
        return;
      }

      const weather = data.weather[0].main.toLowerCase();

      document.getElementById("name").innerText = data.name;
      document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
      document.getElementById("desc").innerText = "Condition: " + data.weather[0].description;
      document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
      document.getElementById("wind").innerText = "Wind Speed: " + data.wind.speed + " m/s";

      // ---- Weather Icons ----
      const icon = document.getElementById("weatherIcon");
      icon.style.display = "block";

      if (weather.includes("clear")) {
        icon.src = "https://cdn-icons-png.flaticon.com/512/3222/3222800.png";
        document.body.className = "clear";
      }
      else if (weather.includes("cloud")) {
        icon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
        document.body.className = "clouds";
      }
      else if (weather.includes("rain")) {
        icon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163657.png";
        document.body.className = "rain";
      }
      else if (weather.includes("smoke")) {
        icon.src = "https://cdn-icons-png.flaticon.com/512/727/727790.png";
        document.body.className = "smoke";
      }
      else {
        icon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
        document.body.className = "default";
      }
    })
    .catch(error => console.log(error));
}
