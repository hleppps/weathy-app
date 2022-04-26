import { FC, useRef } from "react";
import Slider from "react-slick";
import { ForecastDayItem } from "../../../types/weatherApi";
import Container from "../Container";
import styles from "./Carousel.module.scss";
import CarouselButton from "./CarouselButton";
import CarouselItem from "./CarouselItem";
import { CAROUSEL_BUTTON_DIRECTIONS } from "./constants";

const { back: backButton, forward: forwardButton } = CAROUSEL_BUTTON_DIRECTIONS;

const sliderBreakpoints = [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 7.5,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: 1100,
    settings: {
      slidesToShow: 6.5,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: 1000,
    settings: {
      slidesToShow: 5.5,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 850,
    settings: {
      slidesToShow: 4.5,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 730,
    settings: {
      slidesToShow: 3.5,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2.5,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 460,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 1.5,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 340,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

const Carousel: FC<{ data: ForecastDayItem[] }> = ({ data }) => {
  const sliderRef: any = useRef(null);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 8.5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: (
      <CarouselButton
        onClick={() => {
          sliderRef.current!.slickPrev();
        }}
        direction={forwardButton}
      />
    ),
    prevArrow: (
      <CarouselButton
        onClick={() => {
          sliderRef.current!.slickNext();
        }}
        direction={backButton}
      />
    ),
    responsive: sliderBreakpoints,
  };

  console.log(forwardButton);

  const carouselItems = data.map((dataItem) => (
    <CarouselItem key={dataItem.date_epoch} data={dataItem} />
  ));

  return (
    <Container>
      <Slider {...settings} className={styles.carousel}>
        {carouselItems}
      </Slider>
    </Container>
  );
};

export default Carousel;
