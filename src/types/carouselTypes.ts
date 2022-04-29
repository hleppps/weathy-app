import { ForecastDayItem, ForecastHourItem } from "./weatherApiTypes";

export type CarouselDataType = ForecastDayItem | ForecastHourItem;

export interface HourlyItemTemperatureRange {
  min: number;
  max: number;
}
