import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY; // Correct API key reference
const API_HOST = "ai-weather-by-meteosource.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": API_KEY,
  "X-RapidAPI-Host": API_HOST,
};

export async function getWeatherData(endpoint, place_id, measurementSystem) {
  const options = {
    method: "GET",
    url: `https://${API_HOST}/${endpoint}`,
    params: {
      place_id,
      language: "en",
      units: measurementSystem,
    },
    headers,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

export async function searchPlaces(text) {
  const options = {
    method: "GET",
    url: `https://${API_HOST}/find_places`,
    params: {
      text,
      language: "en",
    },
    headers,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error searching places:", error);
    return null;
  }
}
