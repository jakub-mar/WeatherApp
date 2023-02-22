let weather = {
  apiKey: "3223237a96fb3e09bc49a6595b6dbf52",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
  displayWeather: function (data) {},
};
