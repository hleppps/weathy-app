import {
  CarouselDataType,
  HourlyItemTemperatureRange,
} from "../types/carouselTypes";
import { ForecastDayItem, ForecastHourItem } from "../types/weatherApiTypes";

export const isDayTypeItem = (
  item: CarouselDataType[],
): item is ForecastDayItem[] => {
  return (item as ForecastDayItem[])[0].date_epoch !== undefined;
};

export const isHourTypeItem = (
  item: CarouselDataType[],
): item is ForecastHourItem[] => {
  return (item as ForecastHourItem[])[0].time_epoch !== undefined;
};

export const getTemperatureRange = (
  dataItems: CarouselDataType[],
  prevTemperatureRange: HourlyItemTemperatureRange,
) => {
  const newTemperatureRange = { ...prevTemperatureRange };
  if (isHourTypeItem(dataItems)) {
    dataItems.reduce((temperatureRange, dataItem) => {
      const { temp_c: curTemperature } = dataItem;

      if (curTemperature > temperatureRange.max) {
        newTemperatureRange.max = curTemperature;
      } else if (curTemperature < temperatureRange.min) {
        newTemperatureRange.min = curTemperature;
      }
      return newTemperatureRange;
    }, newTemperatureRange);
  }
  return newTemperatureRange;
};
