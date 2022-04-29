import { Typography } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import { getDateOrdinal, getWeekDay } from "../../../../service/dateService";
import { ForecastDayItem } from "../../../../types/weatherApiTypes";
import styles from "./CarouselDailyItem.module.scss";

interface CarouselDailyItemProps {
  data: ForecastDayItem;
  selected: boolean;
  selectItemHandler: () => void;
}

const CarouselDailyItem: FC<CarouselDailyItemProps> = ({
  data,
  selected,
  selectItemHandler,
}) => {
  const { day, date: dateValue } = data;
  const [weekDay, setWeekDay] = useState("");
  const [dateOrdinal, setDateOrdinal] = useState("");

  const formatDataHandler = useCallback(() => {
    const date = new Date(dateValue);
    const newWeekDay = getWeekDay(date);
    const newDateOrdinal = getDateOrdinal(date.getDate());
    setWeekDay(newWeekDay);
    setDateOrdinal(newDateOrdinal);
  }, [dateValue]);

  useEffect(() => {
    formatDataHandler();
  }, [formatDataHandler]);

  const carouselItemStyles = `${styles.carouselItem} ${
    selected ? styles.selected : ""
  }`;

  return (
    <button
      type="button"
      onClick={selectItemHandler}
      className={carouselItemStyles}
    >
      <div className={styles.item_title}>
        <Typography component="span" variant={selected ? "body2" : "body1"}>
          {weekDay}
        </Typography>
        &nbsp;
        <Typography component="span" color="gray.main">
          {dateOrdinal}
        </Typography>
      </div>
      <div className={styles.item_description}>
        <div className={styles.itemDescription_image}>
          <img
            onDragStart={(e) => e.preventDefault()}
            src={day.condition.icon}
            alt="weather-icon"
          />
        </div>
        <div className={styles.itemDescription_temperature}>
          <Typography variant={selected ? "subtitle2" : "subtitle1"}>
            {day.mintemp_c}&deg;
          </Typography>
          <Typography variant={selected ? "body2" : "body1"}>
            {day.maxtemp_c}&deg;
          </Typography>
        </div>
      </div>
      {selected && (
        <div className={styles.itemDescription_text}>
          <Typography variant="body2">{day.condition.text}</Typography>
        </div>
      )}
    </button>
  );
};

export default CarouselDailyItem;
