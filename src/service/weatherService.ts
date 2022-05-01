import { dummyForecastData } from "../constants/dummyData";
import { WeatherForecastResponse } from "../types/weatherApiTypes";
import { client } from "./api";

export const getWeatherForecast = async (city: string, days: number) => {
  const response = await client.get<WeatherForecastResponse>(
    `/forecast.json?q=${city}&days=${days}&aqi=no&alerts=no`,
  );
  const forecast = await response.data.forecast;
  const dayForecast = forecast.forecastday;

  if (dayForecast.length < 10) {
    dayForecast.push(...dummyForecastData);
  }
  return forecast.forecastday;
};
