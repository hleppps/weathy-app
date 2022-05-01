export enum CarouselButtonDirections {
  forward = "FORWARD",
  back = "BACK",
}

export enum CarouselTypes {
  daily = "DAILY",
  hourly = "HOURLY",
}

export const sliderBreakpoints = [
  {
    breakpoint: 900,
    settings: {
      // slidesToShow: 4,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: 760,
    settings: {
      // slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 500,
    settings: {
      // slidesToShow: 1,
      slidesToScroll: 2,
    },
  },
];
