import { FC, useEffect, useState } from "react";
import Carousel from "../../components/UI/Carousel";
import SearchBox from "../../components/UI/SearchBox";
import { DEFAULT_SELECTED_CITY } from "../../constants";
import { CarouselTypes } from "../../constants/carouselConstants";
import { dummyForecastData } from "../../constants/dummyData";

const HomePage: FC = () => {
  const [forecastData, setForecastData] = useState(dummyForecastData);
  const [selectedForecastDay, setSelectedForecastDay] = useState<number>(1);
  const [selectedCity, setSelectedCity] = useState(DEFAULT_SELECTED_CITY);

  useEffect(() => {
    // getWeatherForecast(selectedCity, 3).then((forecast) =>
    //   setForecastData(forecast),
    // );
    setForecastData(dummyForecastData);
  }, [selectedCity]);

  return (
    <>
      <SearchBox
        defaultValue={DEFAULT_SELECTED_CITY}
        onSubmit={setSelectedCity}
        placeholder="Enter a city"
      />
      <Carousel
        data={forecastData}
        selectedForecastDay={selectedForecastDay}
        setSelectedForecastDay={setSelectedForecastDay}
        type={CarouselTypes.daily}
      />
      <Carousel
        data={forecastData[selectedForecastDay].hour}
        type={CarouselTypes.hourly}
      />
    </>
  );
};

export default HomePage;
