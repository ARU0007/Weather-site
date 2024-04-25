// Define the async function
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
    // Await the fetch response
    const response = await fetch(url, options);
    // Await the conversion to JSON
    const result = await response.json();

    // Log the entire result
    console.log("Weather data:", result);

    // Destructure the result to get specific fields
    const {
      cloud_pct,
      temp,
      feels_like,
      humidity,
      min_temp,
      max_temp,
      wind_speed,
      wind_degrees,
      sunrise,
      sunset,
    } = result;

    // Use the destructured values
    console.log("Cloud Percentage:", cloud_pct);
    console.log("Temperature:", temp);
    console.log("Feels Like:", feels_like);
    console.log("Humidity:", humidity);
    console.log("Min Temperature:", min_temp);
    console.log("Max Temperature:", max_temp);
    console.log("Wind Speed:", wind_speed);
    console.log("Wind Degrees:", wind_degrees);
    console.log("Sunrise:", sunrise);
    console.log("Sunset:", sunset);
  } catch (error) {
    // Catch and log errors
    console.error("An error occurred while fetching weather data:", error);
  }
}

// Call the async function to fetch weather data
fetchWeather();
