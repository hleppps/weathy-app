import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Slider from "react-slick";
import {
  CarouselButtonDirections,
  CarouselTypes,
  sliderBreakpoints,
} from "../../../constants/carouselConstants";
import { CarouselDataType } from "../../../types/carouselTypes";
import {
  getTemperatureRange,
  isDayTypeItem,
  isHourTypeItem,
} from "../../../utils/carouselUtils";
import Container from "../Container";
import styles from "./Carousel.module.scss";
import CarouselButton from "./CarouselButton";
import CarouselDailyItem from "./CarouselDailyItem";
import CarouselHourlyItem from "./CarouselHourlyItem";

const { back: backButton, forward: forwardButton } = CarouselButtonDirections;

interface CarouselProps {
  data: CarouselDataType[];
  selectedForecastDay?: number;
  setSelectedForecastDay?: Dispatch<SetStateAction<number>>;
  type: CarouselTypes;
}

const getSliderSettings = (ref: any) => {
  return {
    className: "slider variable-width",
    infinite: false,
    variableWidth: true,
    nextArrow: (
      <CarouselButton
        onClick={() => {
          ref.current?.slickPrev();
        }}
        direction={forwardButton}
      />
    ),
    prevArrow: (
      <CarouselButton
        onClick={() => {
          ref.current?.slickNext();
        }}
        direction={backButton}
      />
    ),
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: sliderBreakpoints,
  };
};

const Carousel: FC<CarouselProps> = ({
  data,
  selectedForecastDay,
  setSelectedForecastDay,
  type,
}) => {
  const [hourlyTemperatureRange, setHourlyTemperatureRange] = useState({
    min: 100,
    max: 0,
  });
  const sliderRef: any = useRef(null);

  const sliderSettings = getSliderSettings(sliderRef);

  const getCarouselItems = (dataItems: CarouselDataType[]) => {
    if (isDayTypeItem(dataItems)) {
      return dataItems.map((dataItem, idx) => {
        const selected = selectedForecastDay === idx;
        return (
          <CarouselDailyItem
            key={dataItem.date_epoch}
            data={dataItem}
            selected={selected}
            selectItemHandler={() => setSelectedForecastDay!(idx)}
          />
        );
      });
    }

    if (isHourTypeItem(dataItems)) {
      // const curDate = new Date();
      const itemsToRender: JSX.Element[] = [];

      dataItems.forEach((dataItem) => {
        // const itemDate = new Date(dataItem.time);
        // if (itemDate >= curDate) {
        itemsToRender.push(
          <CarouselHourlyItem
            key={dataItem.time_epoch}
            data={dataItem}
            hourlyTemperatureRange={hourlyTemperatureRange}
          />,
        );
        // }
      });
      return itemsToRender;
    }

    return <div>No items to render</div>;
  };

  const carouselItems = getCarouselItems(data);

  useEffect(() => {
    if (isHourTypeItem(data)) {
      setHourlyTemperatureRange((prevValue) =>
        getTemperatureRange(data, prevValue),
      );
    }
  }, [data]);

  const carouselStyles = `${styles.carousel} ${
    type === CarouselTypes.daily ? styles.carouselDaily : styles.carouselHourly
  }`;

  return (
    <Container>
      <Slider {...sliderSettings} ref={sliderRef} className={carouselStyles}>
        {carouselItems}
      </Slider>
    </Container>
  );
};

export default Carousel;
