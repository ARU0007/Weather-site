async function fetchWeather() {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e714c6fa71msh526850dcc0b5ebap1171e0jsnafa94952a82c",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // You can also parse as JSON
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
fetchWeather();
