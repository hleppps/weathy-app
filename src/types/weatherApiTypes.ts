interface ForecastCondition {
  text: string;
  icon: string;
  [x: string | number | symbol]: unknown;
}

export interface ForecastHourItem {
  time_epoch: number;
  time: string;
  condition: ForecastCondition;
  temp_c: number;
  [x: string | number | symbol]: unknown;
}

export interface ForecastDayItem {
  date: string;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    condition: ForecastCondition;
  };
  hour: ForecastHourItem[];
  selected?: boolean;
  [x: string | number | symbol]: unknown;
}

export interface WeatherForecastResponse {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
  };
  current: {};
  forecast: {
    forecastday: ForecastDayItem[];
  };
}
