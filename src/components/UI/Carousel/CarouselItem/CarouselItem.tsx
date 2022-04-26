import { Typography } from "@mui/material";
import { DragEvent, FC, useEffect, useState } from "react";
import { ForecastDayItem } from "../../../../types/weatherApi";
import styles from "./CarouselItem.module.scss";

import { getWeekDay, getDateOrdinal } from "../../../../service/dateService";

const CarouselItem: FC<{ data: ForecastDayItem }> = ({ data }) => {
  const { day, date: dateValue } = data;
  const [weekDay, setWeekDay] = useState("");
  const [dateOrdinal, setDateOrdinal] = useState("");

  const preventDragHandler = (e: DragEvent<HTMLImageElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const date = new Date(dateValue);
    const newWeekDay = getWeekDay(date);
    const newDateOrdinal = getDateOrdinal(date.getDate());
    setWeekDay(newWeekDay);
    setDateOrdinal(newDateOrdinal);
  }, [dateValue]);

  return (
    // <div>{day.condition.text}</div>
    <div className={styles.carouselItem}>
      <div className={styles.item_title}>
        <Typography component="span">{weekDay}</Typography>
        &nbsp;
        <Typography component="span" color="gray.dark">
          {dateOrdinal}
        </Typography>
      </div>
      <div className={styles.item_description}>
        <div className={styles.item_image}>
          {/* img */}
          <img
            onDragStart={preventDragHandler}
            src={day.condition.icon}
            alt="weather-icon"
          />
        </div>
        <div className={styles.itemDescription_temperature}>
          <Typography variant="subtitle2">{day.mintemp_c}&deg;</Typography>
          <Typography>{day.maxtemp_c}&deg;</Typography>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
