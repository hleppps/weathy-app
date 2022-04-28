import { FC, useRef } from "react";
import Slider from "react-slick";
import { ForecastCarouselItem } from "../../../constants";
import { ForecastHourItem } from "../../../types/weatherApiTypes";
import Container from "../Container";
import styles from "./Carousel.module.scss";
import CarouselButton from "./CarouselButton";
import CarouselDailyItem from "./CarouselDailyItem";
import { CAROUSEL_BUTTON_DIRECTIONS } from "./constants";

const { back: backButton, forward: forwardButton } = CAROUSEL_BUTTON_DIRECTIONS;

const sliderBreakpoints = [
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: 760,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 2,
    },
  },
];

interface CarouselProps {
  // data: ForecastDayItem[];
  data: ForecastHourItem[];
  type: ForecastCarouselItem;
}

const Carousel: FC<CarouselProps> = ({ data, type }) => {
  const sliderRef: any = useRef(null);

  const settings = {
    className: "slider variable-width",
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: true,
    nextArrow: (
      <CarouselButton
        onClick={() => {
          sliderRef.current?.slickPrev();
        }}
        direction={forwardButton}
      />
    ),
    prevArrow: (
      <CarouselButton
        onClick={() => {
          sliderRef?.current?.slickNext();
        }}
        direction={backButton}
      />
    ),
    responsive: sliderBreakpoints,
  };

  const carouselItems = data.map((dataItem) => (
    <CarouselDailyItem key={dataItem.date_epoch} data={dataItem} />
  ));

  return (
    <Container>
      <Slider {...settings} ref={sliderRef} className={styles.carousel}>
        {carouselItems}
      </Slider>
    </Container>
  );
};

export default Carousel;
