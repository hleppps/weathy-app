import AirIcon from "@mui/icons-material/Air";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { Typography } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import { HourlyItemTemperatureRange } from "../../../../types/carouselTypes";
import { ForecastHourItem } from "../../../../types/weatherApiTypes";
import styles from "./CarouselHourlyItem.module.scss";

const MIN_TEMPERATURE_COLUMN_HEIGHT = 36;

interface CarouselHourlyItemProps {
  data: ForecastHourItem;
  hourlyTemperatureRange: HourlyItemTemperatureRange;
}

const CarouselHourlyItem: FC<CarouselHourlyItemProps> = ({
  data,
  hourlyTemperatureRange,
}) => {
  const {
    time,
    temp_c: temperature,
    condition,
    cloud: rainProbability,
    wind_mph: windSpeed,
  } = data;
  const [hours, setHours] = useState("");

  const formatDataHandler = useCallback(() => {
    setHours(time.split(" ")[1].split(":")[0]);
  }, [time]);

  const temperatureColumnHeight =
    ((temperature - hourlyTemperatureRange.min) *
      (100 - MIN_TEMPERATURE_COLUMN_HEIGHT)) /
      (hourlyTemperatureRange.max - hourlyTemperatureRange.min) +
    MIN_TEMPERATURE_COLUMN_HEIGHT;

  useEffect(() => {
    formatDataHandler();
  }, [formatDataHandler]);

  return (
    <div className={styles.carouselItem}>
      <div>
        <Typography component="span" variant="body1">
          {hours}
        </Typography>
        <Typography component="span" color="gray.main">
          :00
        </Typography>
      </div>
      <div
        className={styles.item_temperature}
        style={{ height: `${temperatureColumnHeight}%` }}
      >
        <div className={styles.itemTemperature_icon}>
          <img
            onDragStart={(e) => e.preventDefault()}
            src={condition.icon}
            alt="weather-icon"
          />
        </div>
        <Typography variant="body1">{temperature}&deg;</Typography>
      </div>
      <div className={styles.item_atmospheric}>
        <div>
          <ThunderstormIcon color="disabled" />
          <Typography component="p" variant="body1" color="gray.main">
            {rainProbability}&#37;
          </Typography>
        </div>
        <div>
          <AirIcon color="disabled" />
          <Typography component="p" variant="body1" color="gray.main">
            {windSpeed} &#13223;
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CarouselHourlyItem;
