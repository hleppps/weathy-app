import { WeatherForecastResponse } from "../types/weatherApi";
import { client } from "./api";

export const getWeatherForecast = async (city: string, days: number) => {
  const response = await client.get<WeatherForecastResponse>(
    `/forecast.json?q=${city}&days=${days}&aqi=no&alerts=no`,
  );
  const forecast = await response.data.forecast;
  return forecast.forecastday;
};
