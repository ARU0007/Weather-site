// Function to convert Unix timestamps to human-readable time
const convertToTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString(); // Return time in a readable format
};

// Define the async getWeather function to fetch weather data for a specific city
const getWeather = async (city) => {
  cityName.innerHTML = city;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e714c6fa71msh526850dcc0b5ebap1171e0jsnafa94952a82c",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    // Fetch the weather data
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch weather data for ${city}`);
    }

    const result = await response.json();

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

    // Update the DOM elements with fetched data
    document.getElementById("temp").innerText = `${temp}°C`;
    document.getElementById("min_temp").innerText = `${min_temp}°C`;
    document.getElementById("max_temp").innerText = `${max_temp}°C`;
    document.getElementById("cloud_pct").innerText = `${cloud_pct}%`;
    document.getElementById("feels_like").innerText = `${feels_like}°C`;
    document.getElementById("humidity").innerText = `${humidity}%`;
    document.getElementById("wind_speed").innerText = `${wind_speed} km/h`;
    document.getElementById("wind_degrees").innerText = `${wind_degrees}°`;
    document.getElementById("sunrise").innerText = convertToTime(sunrise);
    document.getElementById("sunset").innerText = convertToTime(sunset);
  } catch (error) {
    console.error(
      `An error occurred while fetching weather data for ${city}:`,
      error
    );
  }
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

// Example of calling getWeather
getWeather("Delhi"); // You can change "Delhi" to the city of your choice
