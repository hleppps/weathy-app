import { dummyForecastData } from "../constants/dummyData";
import { WeatherForecastResponse } from "../types/weatherApiTypes";
import { handleError } from "../utils";
import { client } from "./api";

export const getWeatherForecast = async (city: string, days: number) => {
  return client
    .get<WeatherForecastResponse>(
      `/forecast.json?q=${city}&days=${days}&aqi=no&alerts=no`,
    )
    .then((response) => response.data.forecast.forecastday)
    .then((forecast) =>
      forecast.length < 10 ? [...forecast, ...dummyForecastData] : forecast,
    )
    .catch((error) => {
      handleError(error.data.error);
    });
};
